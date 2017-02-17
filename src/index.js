import 'babel-polyfill';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {selectSubreddit, fetchPosts, fetchPostsIfNeeded} from './actions/actions';
import rootReducer from './reducers/reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        loggerMiddleware
    )
);

store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
    console.log(store.getState())
);

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
