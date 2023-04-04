import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Router from './pages/router/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
