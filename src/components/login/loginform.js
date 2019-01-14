'use strict';

/**
    * @file user login form
    * @author John Butler
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../../store/auth/authactions';
import helpers from '../../utils/helpers';
import LoginBtn from './loginbtn';
import { LOGIN_FAILED_TOKEN, LOGIN_DEFAULT_TOKEN } from
    '../../utils/constants';

class LoginForm extends Component {

    state = {
        uid: '',
        password: '',
        token: LOGIN_DEFAULT_TOKEN
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = e.target.value;
        if (name === 'uid') {
            this.setState({
                uid: value,
                token: null
            });
        }
        if (name === 'pwd') {
            this.setState({
                password: value,
                token: null
            });
        }
    }

    handleSubmit = () => {
        const { uid, password } = this.state;
        if (helpers.validateString(uid) && helpers.validateString(password)) {
            const { dispatch } = this.props;
            dispatch(handleLogin(uid, password));
        }
    }

    handleReturn = (e) => {
        e.key === 'Enter' && this.handleSubmit();
    }

    render() {

        const { uid, password } = this.state;
        return (
            <form className='login-form'>
                {this.props.loginFailed
                    ? <div
                        className='login-form-error'>
                        Login Failed! Retry?
                    </div>
                    : <div>
                    </div>
                }
                <div
                    className='login-form-input-wrapper'
                    onKeyPress={this.handleReturn}>
                    <input
                        type='text'
                        value={uid}
                        name={'uid'}
                        onChange={this.handleChange}
                        placeholder='User Id' />
                    <input
                        type='password'
                        name={'pwd'}
                        value={password}
                        onChange={this.handleChange}
                        placeholder='Password' />
                </div>
                <LoginBtn onHandleSubmit={this.handleSubmit} />
            </form>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        loginFailed: authUser && authUser.token === LOGIN_FAILED_TOKEN
    };
}

export default connect(mapStateToProps)(LoginForm);
