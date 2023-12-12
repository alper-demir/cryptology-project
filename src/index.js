import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { routes } from './route.js';
import { RouterProvider } from 'react-router-dom';
import "./components/asset/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);