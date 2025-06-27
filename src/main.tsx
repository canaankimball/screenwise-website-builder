
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting Screenwise Eating app...');
console.log('Current URL:', window.location.href);
console.log('Base URL:', document.baseURI);
console.log('Host:', window.location.host);
console.log('Pathname:', window.location.pathname);
console.log('Environment:', import.meta.env.MODE);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Root element found, rendering app...');
  try {
    createRoot(rootElement).render(<App />);
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering app:', error);
  }
}
