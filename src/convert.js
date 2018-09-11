import { map, isObject, isArray, isNil, isString } from 'lodash';

/**
 * Convert a js object to PHP array for export
 * @param item
 * @returns {string}
 */

export default function convert(item) {
    if (isNil(item)) {
        return '\'\'';
    }

    if (isArray(item)) {
        let res = map(item, (val) => {
            return convert(val);
        }).join(',\n');

        return '[\n' + res + '\n]';
    }

    if (isObject(item)) {
        let res = map(item, (val, key) => {
            return '\'' + key + '\' => ' + convert(val);
        }).join(',\n');

        return '[\n' + res + '\n]';
    }

    // Otherwise, the item is a string.
    // If there is the single quotes character in the string, then surround it with double quotes.
    let itemIsString = isString(item);

    if (itemIsString && item.indexOf('\'') !== -1) {
        return '\"' + item + '\"';
    }

    if (itemIsString) {
        return '\'' + item + '\'';
    }

    return item.toString();
};