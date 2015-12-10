"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.check = undefined;

var _types = require("./types");

var _options = require("./options");

function check() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    params.forEach(function (param) {
        for (var key in param) {
            if (typeof _types.types[key] !== "function") {
                if (key !== "message") {
                    throw new Error("type " + key + " is not defined");
                }
                return;
            }
            var defaultMessage = _types.types[key](param[key]);
            if (defaultMessage !== true) {
                var e = new TypeError(param.message || defaultMessage);
                _options.options.errorHandler(e);
            }
        };
    });
}

exports.check = check;
