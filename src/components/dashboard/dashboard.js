import React, { Component } from 'react';
import DashboardTab from './dashboardTab';
import DashboardList from './dashboardList';
import '../../styles/index.scss';

import {
    TAB_LEFT,
    TAB_RIGHT,
    TAB_SELECTED,
    TAB_UNSELECTED
} from '../../utils/constants';

class Dashboard extends Component {
    // initial state is left tab selected
    state = { selectedSide: TAB_LEFT };

    handleTabSelection = (tab) => {
        const { selectedSide } = this.state;

        if (selectedSide !== tab) {
            this.setState({ selectedSide: tab });
        }
    }

    render() {

        const { selectedSide } = this.state;

        return (
            <div className='dashboard-tab-wrapper'>
                <DashboardTab
                    side={TAB_LEFT}
                    title={'Unanswered Questions'}
                    selected={selectedSide === TAB_LEFT ?
                        TAB_SELECTED :
                        TAB_UNSELECTED}
                    selectedTab={this.handleTabSelection}
                />
                <DashboardTab
                    side={TAB_RIGHT}
                    title={'Answered Questions'}
                    selected={selectedSide === TAB_RIGHT ?
                        TAB_SELECTED :
                        TAB_UNSELECTED}
                    selectedTab={this.handleTabSelection}
                />
                <DashboardList side={selectedSide} />
            </div >
        );
    }
}

export default Dashboard;
