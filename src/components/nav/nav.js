import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './avatar';
import Greeting from './greeting';
import { FaBars } from 'react-icons/fa';
//import './nav.scss';

const GOING_MOBILE = 490;

export default class Nav extends Component {
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
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize = () => {
        const isMobile = window.innerWidth < GOING_MOBILE;
        this.setState((prevState) => ({
            goingMobile: isMobile,
            ulClass: isMobile ? prevState.ulClass : 'navBar-ul-normal'
        }));
        console.log(`Going Mobile: ${isMobile}`);
    }

    handleToggleClick = (e) => {
        e.preventDefault();

        const isDisplayed = this.state.isDisplayed;
        const ulClass = isDisplayed ? 'navBar-ul-normal' : 'navBar-toggle-show';

        this.setState({
            isDisplayed: !isDisplayed,
            ulClass: ulClass
        });
    }

    render() {
        const { name, avatarURL } = this.props;
        return (
            <nav className='nav'>
                <div className='nav-title-wrapper'>
                    <div className='nav-title-toggle-icon'>
                        <FaBars
                            onClick={this.handleToggleClick}
                        />
                    </div>
                    <div className='nav-app-title'>
                        Would You Rather?
                </div>
                </div>
                <div>
                    <ul className={this.state.ulClass}>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leader' activeClassName='active'>
                                Leader Board
                            </NavLink>
                        </li>
                        <li>
                            <Greeting name={name} />
                        </li>
                        <li>
                            <Avatar name={name} avatarURL={avatarURL} />
                        </li>
                        <li>
                            <NavLink to='/logout' activeClassName='active'>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
