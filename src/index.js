import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './router';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
