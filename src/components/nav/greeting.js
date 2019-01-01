import React from 'react';

const Greeting = ({ name }) => {

    const firstName = name.split(' ', 1);

    return (
        <span className='nav-greeting'>Hi! {firstName}</span>
    );
};

export default Greeting;
