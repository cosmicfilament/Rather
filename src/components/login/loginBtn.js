import React from 'react';

const LoginBtn = ({ onHandleSubmit }) => {
    return (
        <div className='login-form-button-wrapper' >
            <button
                className='login-form-button'
                type='button'
                onClick={(e) => onHandleSubmit()}>
                Sign In
            </button>
        </div>
    );
};

export default LoginBtn;
