import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './context/Store';
import App from './App';
import './styles/normalize.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
