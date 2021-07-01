import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';

export default App;

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-app-container');

  if (el) {
    ReactDOM.render(<App />, el);
  }
}
