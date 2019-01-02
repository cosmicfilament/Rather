import React, { Fragment } from 'react';
import DashboardTabBody from './dashboardTabBody';

const DashboardTab = () => {

    return (
        <Fragment>
            <div className='dashboard-tab-wrapper'>
                <div className='dashboard-tab-left unselected-tab'>
                    Unanswered Questions
                </div>
                <div className='dashboard-tab-right selected-tab raise-right-tab'>
                    Answered Questions
                </div>
                <DashboardTabBody />
            </div>
        </Fragment>
    );
};

export default DashboardTab;
