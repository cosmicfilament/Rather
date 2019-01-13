'use strict';

/**
    * @file displays the option text for an individual option on either a question or an answer card
    * @author John Butler
*/

import React, { Fragment } from 'react';

const Options = ({ item }) => {
    return (
        <Fragment>
            <div>
                Would you rather?
            </div> <div>
                {item.optionOne.text} or ...
            </div> <div>
                {item.optionTwo.text} ?
            </div>
        </Fragment>
    );
};

export default Options;
