import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={initStore()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);