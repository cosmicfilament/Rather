import React, { Component } from 'react';
import DashboardTab from './dashboardTab';
import Question from './question';
import './dashboard.scss';

const Dashboard = () => {

    return (
        <div className='dashboard-wrapper'>
            <DashboardTab />
            <div className='dashboard-questions'>
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
        </div >
    );
};

export default Dashboard;
