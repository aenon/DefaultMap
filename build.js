"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultObj = function defaultObj() {
    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    var defaultObj = {};
    var set = function set(key, value) {
        defaultObj[key] = value;
    };
    var get = function get(key) {
        if (key in defaultObj) {
            return defaultObj[key];
        }
        return defaultValue;
    };
    return { set: set, get: get };
};

exports.default = defaultObj;
