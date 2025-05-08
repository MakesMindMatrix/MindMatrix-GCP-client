# ------------------ BUILDER STAGE ------------------
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Install dependencies
    COPY package.json package-lock.json ./
    RUN npm ci
    
    # Copy project files
    COPY . .
    
    # Inject backend URL into build
    ARG REACT_APP_BACKEND_URL
    ARG REACT_APP_GOOGLE_CLIENT_ID
    ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
    ENV REACT_APP_GOOGLE_CLIENT_ID=$REACT_APP_GOOGLE_CLIENT_ID
    
    # Build the React app
    RUN npm run build && ls -la build
    
    # ------------------ NGINX STAGE ------------------
    FROM nginx:alpine
    WORKDIR /usr/share/nginx/html
    
    # Ensure the directory exists
    RUN mkdir -p /usr/share/nginx/html
    
    # Copy custom Nginx config
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Copy build output from React build
    COPY --from=builder /app/build /usr/share/nginx/html
    
    # Expose the port that Nginx will serve on
    EXPOSE 8080
    
    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]
    