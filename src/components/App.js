import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/init/initActions';
import { handleRenewToken } from '../store/auth/authActions';
import helpers from '../utils/helpers';
import { TOKEN_EXPIRY } from '../utils/constants';
import Nav from './nav/nav';
import Login from './login/login';
import NotFound from './notfound';
import Dashboard from './dashboard/dashboard';
import NewQuestion from './newQuestion/newQuestionContainer';
import LeaderBoard from './leaderBoard/leaderBoardContainer';
import ARContainer from './answers/answerResultsContainer';
import Footer from './footer';
import '../styles/index.scss';

class App extends Component {

    componentDidMount() {

        this.props.dispatch(handleInitialData());

        // start session token timer loop and renew the token if still logged in.
        setInterval(() => {
            if (this.props.loggedIn && this.props.authUser.token <= Date.now()) {
                this.props.dispatch(handleRenewToken(this.props.authUser));
            }
        }, 1000 * 60);
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    {this.props.loggedIn
                        ? <Fragment>
                            <Nav name={this.props.userName} avatarURL={this.props.avatarURL} />
                            <Switch>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/new' component={NewQuestion} />
                                <Route path='/leader' component={LeaderBoard} />
                                <Route path='/question/:id' component={ARContainer} />
                                <Route path='/results/:id' component={ARContainer} />
                                <Route path='/logout' render={() => (< Redirect to='/' />)} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </Fragment>
                        : <Login />
                    }
                    <Footer />
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ authUser, users, questions }) {
    const isLoggedIn = helpers.validateObject(authUser) && authUser.token > 0 && helpers.validateObject(users) && helpers.validateObject(questions);
    return {
        loggedIn: isLoggedIn,
        authUser: isLoggedIn && authUser,
        userName: isLoggedIn && users[authUser.uid].name,
        avatarURL: isLoggedIn && users[authUser.uid].avatarURL,
    };
}

export default connect(mapStateToProps)(App);
