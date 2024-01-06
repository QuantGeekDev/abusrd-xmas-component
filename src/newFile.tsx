import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <App />
  </React.StrictMode>
);
