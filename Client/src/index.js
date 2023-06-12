import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import { UserContextProvider } from './component/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <App/>
    </UserContextProvider>
  
  </React.StrictMode>
  
);

reportWebVitals();
