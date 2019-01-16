'use strict';

/**
    * @file 404 not found implementation
    * @author John Butler
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NotFound extends Component {

    onHomeSelected = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='notfound-wrapper'>
                <div className='notfound-header'>
                    <p>
                        404 Page not Found
                </p>
                </div >
                <div className='login-logo' />
                <div className='poll-button-wrapper' >
                    <Link to={'/'}>
                        <button className='question-poll-button'
                            onClick={(e) => this.onHomeSelected}>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        );
    };
}

// @ts-ignore
export default withRouter(connect()(NotFound));
