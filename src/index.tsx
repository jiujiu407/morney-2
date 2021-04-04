import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss';

ReactDOM.render(
    //<React.StrictMode>让你知道你的代码有那些错
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


