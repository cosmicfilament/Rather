import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PollButton extends Component {

    render() {
        const { item, link, linkText, onPollSelection } = this.props;
        return (
            <div className='poll-button-wrapper' >
                <Link to={`${link}/${item.id}`}>
                    <button className='btn question-poll-button'
                        onClick={(e) =>
                            onPollSelection(`${link}/${item.id}`)}>
                        {linkText}
                    </button>
                </Link>
            </div>
        );
    }
}

export default PollButton;
