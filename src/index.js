import React from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './AppWrapper';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);