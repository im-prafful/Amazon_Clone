import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from "./StateProvider";
import Reducer, { initialState } from "./Reducer.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState = { initialState } Reducer = { Reducer }>
      <App />
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
