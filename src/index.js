import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
import App from './app.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <BrowserRouter>  */}
      <App />
    {/* </BrowserRouter>  */}
  </React.StrictMode>
);


reportWebVitals();
