import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './components/App';
import { SearchProvider } from './contexts/SearchContext';

document.title = "Back Office";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
