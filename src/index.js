import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import middleware from './middleware';
import './styles/index.scss';
import App from './components/App';

import authUser from './store/auth/authReducer';
import users from './store/users/usersReducer';
import questions from './store/questions/questionsReducer';

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
