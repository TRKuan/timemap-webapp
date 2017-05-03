import React from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.store = null;
    }

    componentWillMount() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        this.store = createStore(combineReducers({
            //TODO: reducers
        }), composeEnhancers(applyMiddleware(thunkMiddleware)));
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="main">
                  <h1>Hello word</h1>
                </div>
            </Provider>
        );
    }
}
