import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
// import Card from './Card.js';
// import App from './App.js';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode >
);


reportWebVitals();
