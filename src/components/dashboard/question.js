import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    TAB_LEFT
} from '../../utils/constants';

class Question extends Component {

    handlePollSelection = (url) => {
        this.props.history.push(url);
    }

    render() {

        const { side, item, user } = this.props;

        const { link, linkText } = (side === TAB_LEFT) ?
            { link: '/pollQuestion', linkText: 'Submit Answer' } :
            { link: '/pollResults', linkText: 'View Results' };

        return (
            <div className='question-wrapper' >
                <div className='question-title'>
                    {user.name} asks:
            </div>
                <div className='question-body-wrapper'>
                    <div className='question-avatar'
                        style={{
                            backgroundImage: `url(\"${user.avatarURL}\")`
                        }}
                    />
                    <div className='vhr-wrapper'>
                        <div className='vhr-outer' >
                            <div className='vhr-inner' />
                        </div>
                    </div>
                    <div className='question-details-wrapper'>
                        <div>
                            Would you rather?
                    </div><div>
                            {item.optionOne.text} or ...
                    </div> <div>
                            {item.optionTwo.text} ?
                    </div>
                        <div className='poll-button-wrapper' >
                            <Link to={`${link}/${item.id}`}>
                                <button className='btn question-poll-button'
                                    onClick={(e) => this.handlePollSelection(
                                        `${link}/${item.id}`)}>
                                    {linkText}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Question;
