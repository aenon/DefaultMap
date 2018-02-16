'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DefaultMap = function DefaultMap() {
    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    var map = new Map();
    var set = function set(key, value) {
        map.set(key, value);
    };
    var get = function get(key) {
        if (map.get('a')) {
            return map.get('a');
        }
        return defaultValue;
    };
    return { set: set, get: get };
};

exports.default = DefaultMap;
