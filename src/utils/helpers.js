'use strict';

/**
    * @file helper functions not specific to any component
    * @author John Butler
*/

import { LOGIN_FAILED_TOKEN } from './constants';

const helpers = {};
export default helpers;

helpers.saveToLocalStorage = (obj) => {
    try {
        const strObj = JSON.stringify(obj);
        console.log(`Saving token to localStorage: ${strObj}`);
        localStorage.setItem('token', strObj);
    }
    catch (error) {
        console.log(`Failed to save to localStorage : ${strObj}.`);
    }
};

helpers.getFromLocalStorage = () => {
    try {
        const result = localStorage.getItem('token');
        console.log(`getFromLocalStorage: ${result}`);
        return JSON.parse(result);
    }
    catch (error) {
        console.log(`Failed to retrieve from localStorage item : ${result}.`);
        return LOGIN_DEFAULT_TOKEN;
    }
};

helpers.clearLocalStorage = () => {
    try {
        localStorage.removeItem('token');
    }
    catch (error) {
        console.log('Failed to remove token from localStorage');
    }
};

// grabbed the idea for this from http://bonsaiden.github.io/JavaScript-Garden/#types.typeof
helpers._typeof = (value) => {
    if (value === null) {
        return value;
    }
    if (typeof (value) === 'undefined') {
        return 'undefined';
    }
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
};

helpers.validateString = (str) => {
    if (helpers._typeof(str) === 'string' && str.length > 0) {
        return str;
    }
    return false;
};

helpers.validateArray = (obj) => {
    if (helpers._typeof(obj) === 'array' && obj instanceof Array && obj.length > 0) {
        return obj;
    }
    return false;
};

helpers.validateObject = (obj) => {
    if (typeof (obj) === 'object' && obj !== null && Object.keys(obj).length > 0) {
        return obj;
    }
    return false;
};

/**
 * @summary log
 * @description writes in color to the console in staqing mode only
 * @returns object as JSON string
 */
helpers.log = (color, msg) => {

    switch (color) {
        case 'red':
            color = '\x1b[31m%s';
            break;
        case 'green':
            color = '\x1b[32m%s';
            break;
        case 'blue':
            color = '\x1b[34m%s';
            break;
        case 'yellow':
            color = '\x1b[33m%s';
            break;
        case 'black':
            color = '\x1b[30m%s';
            break;
        case 'white':
            color = '\x1b[37m%s';
            break;
        case 'cyan':
            color = '\x1b[36m%s';
            break;
        case 'magenta':
            color = '\x1b[35m%s';
            break;
    }
    console.log(color, msg);
};
