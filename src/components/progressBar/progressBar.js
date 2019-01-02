import React, { Component } from 'react';
import PropTypes from 'prop-types';

// loosely based on a Dan Zuzevich's example on Medium.com
// https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
// with additional help from this stackoverflow example :
// https://stackoverflow.com/questions/39426083/update-react-component-every-second
// and additional support from my antiquated brain matter.

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = { percentage: 0 };
    }
    // percentage incrementor
    static defaultProps = {
        incrementor: 10
    }

    incrementPercentage = () => {
        this.setState(prevState => ({
            percentage: prevState >= 100 ? 100 : prevState + this.props.incrementor
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.incrementPercentage(), 250
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { percentage } = this.state;
        return (
            <div className='progress-bar'>
                <_ProgressBar percentage={percentage} />
            </div>
        );
    }
}

ProgressBar.prototypes = {
    incrementor: PropTypes.number
};

const _ProgressBar = ({ percentage }) => {
    return (
        <div className='progress-bar-widget'
            style={{ width: `${percentage}%` }}
        />
    );
};

export default ProgressBar;
