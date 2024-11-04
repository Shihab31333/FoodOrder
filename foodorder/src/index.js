import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create root

root.render(
  <Router>
    <App />
  </Router>
);
