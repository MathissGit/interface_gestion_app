import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App';
import { SearchProvider } from './contexts/SearchContext';

document.title = "Back Office";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
