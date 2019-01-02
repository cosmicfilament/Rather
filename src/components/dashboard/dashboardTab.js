import React, { Component } from 'react';
import classNames from 'classnames';

import {
    TAB_LEFT,
    TAB_RIGHT,
    TAB_SELECTED,
    TAB_UNSELECTED
} from '../../utils/constants';

class DashboardTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.defaultSelected
        };
    }

    render() {
        const { selected } = this.state;
        const { side, title } = this.props;

        const tabClass = classNames(this.props.side, {
            'dashboard-tab-left': side === TAB_LEFT,
            'dashboard-tab-right': side === TAB_RIGHT,
            'raise-left-tab': side === TAB_LEFT &&
                selected === TAB_SELECTED,
            'raise-right-tab': side === TAB_RIGHT &&
                selected === TAB_SELECTED,
            'selected-tab': selected === TAB_SELECTED,
            'unselected-tab': selected === TAB_UNSELECTED
        });

        return (
            <div>
                <div className={tabClass} >{title}</div>
            </div >
        );
    }
}

export default DashboardTab;
