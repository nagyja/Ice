import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(

    <div>
        <Routes />
    </div>

, document.getElementById('root'));
registerServiceWorker();
