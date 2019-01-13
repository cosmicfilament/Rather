'use strict';

/**
    * @file middleware that logs all redux store activity
    * @author John Butler
*/

export const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The action: ', action);
    const returnValue = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return returnValue;
};
