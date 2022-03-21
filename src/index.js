import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import checkerReducer from './features/checker';
import themeReducer from './features/theme';
import taskReducer from './features/tasks';
import activePageReducer from './features/activePage';

const store = configureStore({
  reducer: {
    checker: checkerReducer,
    theme: themeReducer,
    task: taskReducer,
    activePage: activePageReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

