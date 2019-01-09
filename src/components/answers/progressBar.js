import React, { Component } from 'react';
import PropTypes from 'prop-types';

// loosely based on a Dan Zuzevich's example on Medium.com
// https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
// with additional help from this stackoverflow example :
// https://stackoverflow.com/questions/39426083/update-react-component-every-second


// as above but I pretty much gutted it and made it fixed.

class ProgressBar extends Component {
    // percentage incrementor
    static defaultProps = {
        percentage: 10
    }

    render() {
        const { percentage } = this.props;
        return (
            <div className='progress-bar'>
                <_ProgressBar percentage={percentage} />
            </div>
        );
    }
}

ProgressBar.prototypes = {
    percentage: PropTypes.number
};

const _ProgressBar = ({ percentage }) => {
    return (
        <div className='progress-bar-widget'
            style={{ width: `${percentage}%` }}
        >
            <span>
                {percentage}%
            </span>
        </div>

    );
};

export default ProgressBar;
