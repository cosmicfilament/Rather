'use strict';

/**
    * @file module that combines the middleware modules
    * @author John Butler
*/

import thunk from 'redux-thunk';
import { logger } from './logger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
    thunk,
    logger,
);
