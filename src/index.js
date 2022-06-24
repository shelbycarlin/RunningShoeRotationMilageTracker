import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'
import sylesSheet from './scss/styles.scss'

ReactDOM.render(
    <div>
    <Provider store ={store}>
        <React.StrictMode>
         <App/>
        </React.StrictMode>
    </Provider>
    </div>,
  document.getElementById('root')
);
