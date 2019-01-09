import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/init/initActions';
import helpers from '../utils/helpers';
import Nav from './nav/nav';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import NewQuestion from './newQuestion/newQuestionContainer';
import LeaderBoard from './leaderBoard/leaderboard';
import ARContainer from './answers/answerResultsContainer';
import Footer from './footer';
import '../styles/index.scss';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <ProgressBar /> */}
                    <div className='container'>
                        {this.props.loggedIn
                            ? <Fragment>
                                <Nav name={this.props.userName} avatarURL={this.props.avatarURL} />
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/new' component={NewQuestion} />
                                <Route path='/leader' component={LeaderBoard} />
                                <Route path='/question/:id' component={ARContainer} />
                                <Route path='/results/:id' component={ARContainer} />
                                <Route path='/logout' render={() => (< Redirect to='/' />)} />
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
        userName: authUser && authUser.token > 0 && users[authUser.uid].name,
        avatarURL: authUser && authUser.token > 0 && users[authUser.uid].avatarURL,
    };
}

export default connect(mapStateToProps)(App);
