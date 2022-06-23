import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <div>
    <Provider store ={store}>
        <React.StrictMode>
         <h1>Hello World</h1>
         <App/>
        </React.StrictMode>
    </Provider>
    </div>,
  document.getElementById('root')
);
