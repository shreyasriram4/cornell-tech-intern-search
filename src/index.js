// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'; // Update this line to reflect the new path
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
