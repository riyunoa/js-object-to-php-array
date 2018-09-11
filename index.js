(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
    (factory((global['js-object-to-php-array'] = {}),global.lodash));
}(this, (function (exports,lodash) { 'use strict';

    /**
     * Convert a js object to PHP array for export
     * @param item
     * @returns {string}
     */

    function convert(item) {
        if (lodash.isUndefined(item) || lodash.isNull(item)) {
            return '\'\'';
        }

        if (lodash.isArray(item)) {
            var res = lodash.map(item, function (val) {
                return convert(val);
            }).join(',\n');

            return '[\n' + res + '\n]';
        }

        if (lodash.isObject(item)) {
            var _res = lodash.map(item, function (val, key) {
                return '\'' + key + '\' => ' + convert(val);
            }).join(',\n');

            return '[\n' + _res + '\n]';
        }

        // Otherwise, the item is a string.
        // If there is the single quotes character in the string, then surround it with double quotes.
        var itemStr = item.toString();
        if (itemStr.indexOf('\'') !== -1) {
            return '\"' + itemStr + '\"';
        }

        return '\'' + itemStr + '\'';
    }

    exports.jsObjectToPhpArray = convert;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
