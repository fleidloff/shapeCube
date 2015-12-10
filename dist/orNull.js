"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function orNull(cb) {
    return function (p) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        if (p === null) {
            return true;
        }
        return cb.apply(undefined, [p].concat(rest));
    };
}

function buildOrNullFunction(types, key) {
    var OR_NULL = "OrNull";
    types[key + OR_NULL] = orNull(types[key]);
}

function addOrNullFunctions(types) {
    Object.keys(types).forEach(function (type) {
        buildOrNullFunction(types, type);
    });
}

exports.orNull = orNull;
exports.buildOrNullFunction = buildOrNullFunction;
exports.addOrNullFunctions = addOrNullFunctions;
