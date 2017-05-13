import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {calendar} from 'states/calendar-reducers.js';
import {map} from 'states/map-reducers.js';

import Main from 'components/Main.jsx';
import MainClient from 'components/Main-client.jsx';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/font-awesome.css'

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(combineReducers({
        calendar,
        map
    }), composeEnhancers(applyMiddleware(thunkMiddleware)));

    ReactDOM.render((

        <Provider store={this.store}>
          <MainClient/>
        </Provider>
        ),
        document.getElementById('root')
    );
};
