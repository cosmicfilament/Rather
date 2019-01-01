import React from 'react';

const DashboardTab = () => {

    return (
        <div className='dashboard-tab'>
            <div className='dashboard-tab-left unselected-tab'>
                Unanswered Questions
            </div>
            <div className='dashboard-tab-right selected-tab raise-right-tab'>
                Answered Questions
            </div>
        </div>
    );
};

export default DashboardTab;
