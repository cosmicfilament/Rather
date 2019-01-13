'use strict';

/**
    * @file main entry point for the application
    * @author John Butler
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import middleware from './middleware';
import './styles/index.scss';
import App from './components/app';

import authUser from './store/auth/authreducer';
import users from './store/users/usersreducer';
import questions from './store/questions/questionsreducer';

const reducers = combineReducers({
    authUser,
    users,
    questions
});

const store = createStore(reducers, middleware);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
