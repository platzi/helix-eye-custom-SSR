import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './containers/App';
import './assets/favicon.ico'

const container = document.getElementById('app');
const root = createRoot(container)

root.render(<App />)