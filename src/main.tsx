import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import React from 'react';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Check your index.html.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);