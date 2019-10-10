import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import rootReduser from './redux/rootReduser';

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware', store.getState())
    return result
}

const store = createStore(rootReduser, applyMiddleware(loggerMiddleware))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
