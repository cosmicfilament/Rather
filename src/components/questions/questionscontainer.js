'use strict';

/**
    * @file called by dashboardlist for each question object. Wraps the question and answer functionality which is a function of which tab was selected.
    * @author John Butler
*/

import React, { Component } from 'react';
import VerticalBar from './verticalbar';
import Avatar from './questionsavatar';
import Options from './questionsoptions';
import PollButton from './pollbutton';

import {
    TAB_LEFT
} from '../../utils/constants';

class Questions extends Component {

    handlePollSelection = (url) => {
        this.props.history.push(url);
    }

    render() {
        const { side, item, user } = this.props;
        const { link, linkText } = (side === TAB_LEFT) ?
            { link: '/question', linkText: 'Submit Answer' } :
            { link: '/question', linkText: 'View Results' };

        return (
            <div className='question-wrapper' >
                <div className='question-title'>
                    {user.name} asks:
                </div>
                <div className='question-body-wrapper'>
                    <Avatar url={user.avatarURL} />
                    <VerticalBar />
                    <div className='question-details-wrapper'>
                        <Options item={item} />
                        <PollButton
                            item={item}
                            link={link}
                            linkText={linkText}
                            onPollSelection={this.handlePollSelection}
                        />
                    </div>
                </div>
            </div >
        );
    }
}

export default Questions;
