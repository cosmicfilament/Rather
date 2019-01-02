import React, { Component } from 'react';
import DashboardTab from './dashboardTab';
import DashboardTabBody from './dashboardTabBody';
import '../../styles/index.scss';

import {
    TAB_LEFT,
    TAB_RIGHT,
    TAB_SELECTED,
    TAB_UNSELECTED
} from '../../utils/constants';

class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard-tab-wrapper'>
                <DashboardTab
                    side={TAB_LEFT}
                    title={'Unanswered Questions'}
                    defaultSelected={TAB_SELECTED}
                />
                <DashboardTab
                    side={TAB_RIGHT}
                    title={'Answered Questions'}
                    defaultSelected={TAB_UNSELECTED}
                />
                <DashboardTabBody />
            </div >
        );
    }
}

export default Dashboard;
