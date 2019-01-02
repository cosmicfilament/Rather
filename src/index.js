import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import middleware from './middleware';
import helpers from './utils/helpers';
import throttle from 'lodash.throttle';

import './styles/index.scss';
import App from './components/App';

import authUser from './store/auth/authReducer';
import users from './store/users/usersReducer';
import questions from './store/questions/questionsReducer';

// get logged in user from localStorage if exists
const initialState = helpers.getFromLocalStorage('authUser');
console.log(`initialState: ${JSON.stringify(initialState)}.`);

const reducers = combineReducers({
    authUser: initialState === null ? authUser : initialState,
    users,
    questions
});

const store = createStore(reducers, middleware);

// save logged in user to localStorage once/sec
store.subscribe(throttle(() => {
    helpers.saveToLocalStorage('state', { authUser: store.getState().authUser });
}, 1000));

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
