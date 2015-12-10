"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var options = {
    errorHandler: function errorHandler(error) {
        throw error;
    }
};

function config(newOptions) {
    for (var key in options) {
        setOption(options, newOptions, key);
    }
}

function setOption(options, newOptions, field) {
    options[field] = newOptions[field] || options[field];
}

exports.options = options;
exports.config = config;
