import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
// import { positions, transitions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic';

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}>
    <Provider store={store}>
      {/* <AlertProvider template={AlertTemplate} {...options}> */}
      <App />
      {/* </AlertProvider> */}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
