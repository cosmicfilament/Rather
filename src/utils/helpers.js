'use strict';

const helpers = {};
export default helpers;

helpers.saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.log(`Failed to save to localStorage item with key: ${key}.`);
    }
};

helpers.getFromLocalStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (error) {
        console.log(`Failed to retrieve from localStorage item with key: ${key}.`);
        return null;
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
