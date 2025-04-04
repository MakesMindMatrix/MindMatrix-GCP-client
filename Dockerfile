# ------------------ BUILDER STAGE ------------------
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm ci
    
    # Copy all project files
    COPY . .
    
    # Build the React app
    RUN npm run build && ls -la build  # Debugging step
    
    # ------------------ NGINX STAGE ------------------
    FROM nginx:alpine
    WORKDIR /usr/share/nginx/html
    
    # Ensure the directory exists before copying
    RUN mkdir -p /usr/share/nginx/html
    
    # Copy Nginx configuration
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copy the built files from the builder stage
    COPY --from=builder /app/build /usr/share/nginx/html
    
    # ✅ Ensure correct syntax for exposing port
    EXPOSE 8080
    
    CMD ["nginx", "-g", "daemon off;"]
    