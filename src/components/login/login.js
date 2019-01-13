'use strict';

/**
    * @file base login module
    * @author John Butler
*/

import React, { Component } from 'react';
import LoginHeader from './loginheader';
import LoginForm from './loginform';
import helpers from '../../utils/helpers';

class Login extends Component {


    state = { bypassLogin: false };

    componentDidMount() {
        const tokenObj = helpers.getFromLocalStorage();
        //if the token hasn't expired then bypass login
        if (helpers.validateObject(tokenObj) && tokenObj.token > Date.now()) {
            this.setState({ bypassLogin: true });
        }

    }

    render() {

        if (this.state.bypassLogin) {
            return null;
        }

        return (
            <div className='login-wrapper'>
                <LoginHeader />
                <div className='login-logo' />
                <span className='login-text'>Sign In</span>
                <LoginForm />
            </div>
        );
    }
}

export default Login;
