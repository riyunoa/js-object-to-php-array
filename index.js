const map = require('lodash/collection/map');
const isObject = require('lodash/lang/isObject');
const isArray = require('lodash/lang/isArray');
const isNil = require('lodash/lang/isNil');

/**
 * Convert a js object to PHP array for export
 * @param item
 * @returns {string}
 */
const jsObjectToPhpArray = (item) => {
    // if the item is undefined or null
    if (isNil(item)) {
        return '\'\'';
    }

    if (isArray(item)) {
        let res = map(item, (val) => {
            return jsObjectToPhpArray(val);
        }).join(',\n');

        return '[\n' + res + '\n]';
    }

    if (isObject(item)) {
        let res = map(item, (val, key) => {
            return '\'' + key + '\' => ' + jsObjectToPhpArray(val);
        }).join(',\n');

        return '[\n' + res + '\n]';
    }

    // Otherwise, the item is a string.
    // If there is the single quotes character in the string, then surround it with double quotes.
    let itemStr = item.toString();
    if (itemStr.indexOf('\'') !== -1) {
        return '\"' + itemStr + '\"';
    }

    return '\'' + itemStr + '\'';
};

module.exports = jsObjectToPhpArray;