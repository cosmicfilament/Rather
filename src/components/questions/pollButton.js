import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PollButton = ({ item, link, linkText, onPollSelection }) => {

    return (
        <div className='poll-button-wrapper' >
            <Link to={`${link}/${item.id}`}>
                <button className='question-poll-button'
                    onClick={(e) => onPollSelection(`${link}/${item.id}`)}>
                    {linkText}
                </button>
            </Link>
        </div>
    );
}

export default PollButton;
