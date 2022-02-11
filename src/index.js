import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { preloadImages } from './js/utils';
import { Grid } from './js/grid';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// Preload images then remove loader (loading class) from body
preloadImages('.column__item-img').then(() => {
  document.body.classList.remove('loading');

  // Initialize the grid
  new Grid(document.querySelector('.columns'));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
