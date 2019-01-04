import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { handleInitialData } from '../store/init/initActions';
import ProgressBar from './progressBar/progressBar';
import Nav from './nav/nav';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import LeaderBoard from './leaderBoard/leaderboard';
import PollQuestion from './poll/pollQuestion';
import PollResults from './poll/pollResults';
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
                            ?
                            <Fragment>
                                <Nav name={this.props.userName} avatarURL={this.props.avatarURL} />
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/pollQuestion/:id' component={PollQuestion} />
                                <Route path='/pollResults/:id' component={PollResults} />
                                <Route path='/LeaderBoard' component={LeaderBoard} />
                                <Route path='/Logout' render={() => (
                                    < Redirect to='/' />
                                )} />
                            </Fragment>
                            :
                            <Login />
                        }
                        <Footer />
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ authUser }) {

    return {
        loggedIn: authUser && authUser.token > 0,
        userName: authUser && authUser.name,
        avatarURL: authUser && authUser.avatarURL,
    };
}

export default connect(mapStateToProps)(App);
