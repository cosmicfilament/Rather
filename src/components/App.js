import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../store/init/initActions';
import Nav from './nav/nav';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Footer from './footer';
import '../index.scss';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        {this.props.loggedIn
                            ?
                            <Fragment>
                                <Nav name={this.props.userName} avatarURL={this.props.avatarURL} />
                                <Dashboard />
                            </Fragment>
                            : <Login />
                        }
                        <Footer />
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authUser, users }) {

    return {
        loggedIn: authUser && authUser.token > 0,
        userName: authUser && authUser.name,
        avatarURL: authUser && authUser.avatarURL,
    };
}

export default connect(mapStateToProps)(App);
