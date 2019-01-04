import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    TAB_LEFT,
    TAB_RIGHT,
    TAB_SELECTED,
    TAB_UNSELECTED
} from '../../utils/constants';

const DashboardTab = ({ side, title, selected, selectedTab }) => {

    const tabClass = classNames(side, {
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
            <div
                className={tabClass}
                onClick={(e) => selectedTab(side)}
            >
                {title}
            </div>
        </div >
    );
}

DashboardTab.propTypes = {
    side: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    selectedTab: PropTypes.func.isRequired
};

export default DashboardTab;
