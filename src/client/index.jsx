import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {calendar} from 'states/calendar-reducers.js';
import {map} from 'states/map-reducers.js';
import {setting} from 'states/setting-reducers.js';

import Main from 'components/Main.jsx';

import './index.css';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    this.store = createStore(combineReducers({
        calendar,
        map,
        setting
    }), composeEnhancers(applyMiddleware(thunkMiddleware)));

    ReactDOM.render((
        <Provider store={this.store}>
          <Main/>
        </Provider>
        ),
        document.getElementById('root')
    );
};
