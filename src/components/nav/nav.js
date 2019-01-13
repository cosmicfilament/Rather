'use strict';

/**
    * @file navigation menu
    * @author John Butler
*/

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Avatar from './navavatar';
import Greeting from './greeting';
import { FaBars } from 'react-icons/fa';
import { handleLogout } from '../../store/auth/authactions';
import '../../styles/index.scss';
import { LOGIN_SIZE_GOING_MOBILE } from '../../utils/constants';


class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goingMobile: false,
            isDisplayed: false,
            ulClass: 'navBar-ul-normal'
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.handleWindowResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize = () => {
        const isMobile = window.innerWidth < LOGIN_SIZE_GOING_MOBILE;
        this.setState((prevState) => ({
            goingMobile: isMobile,
            ulClass: isMobile ? prevState.ulClass : 'navBar-ul-normal'
        }));
        console.log(`Going Mobile: ${isMobile}`);
    }

    handleMenuClicked = (e) => {
        e.preventDefault();
        this.state.goingMobile && this.toggleHamburger();
    }

    handleToggleClick = (e) => {
        e.preventDefault();
        this.toggleHamburger();
    }

    toggleHamburger() {
        const isDisplayed = this.state.isDisplayed;
        const ulClass = isDisplayed ? 'navBar-ul-normal' : 'navBar-toggle-show';
        this.setState({
            isDisplayed: !isDisplayed,
            ulClass: ulClass
        });
    }

    handleLogout = () => {
        this.props.dispatch(handleLogout());
        <Redirect to='/' />
    }

    render() {
        const { name, avatarURL } = this.props;
        return (
            <nav className='nav'
                onClick={this.handleMenuClicked}>
                <div className='nav-title-wrapper'>
                    <div className='nav-title-toggle-icon'>
                        <FaBars
                            onClick={this.handleToggleClick} />
                    </div>
                    <div className='nav-app-title'>
                        Would You Rather?
                </div>
                </div>
                <div>
                    <ul className={this.state.ulClass}>
                        <li>
                            <NavLink to='/' exact
                                className='inactive'
                                activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add'
                                className='inactive'
                                activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard'
                                className='inactive'
                                activeClassName='active'>
                                LeaderBoard
                            </NavLink>
                        </li>
                        <li>
                            <Greeting name={name} />
                        </li>
                        <li>
                            <Avatar name={name} url={`../${avatarURL}`} />
                        </li>
                        <li onClick={this.handleLogout} >
                            <NavLink to='/logout'
                                className='inactive'
                                activeClassName='active'>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Nav.propTypes = {
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
};

Nav.defaultProps = {
    name: '',
    avatarURL: ''
};

export default withRouter(connect()(Nav));
