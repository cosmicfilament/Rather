import React, { Component } from 'react';
import LoginHeader from './loginHeader';
import LoginForm from './loginForm';

const Login = () => {

    return (
        <div className='login-wrapper'>
            <LoginHeader />
            <div className='login-logo' />
            <span className='login-text'>Sign In</span>
            <LoginForm />
        </div>
    );
};

export default Login;
