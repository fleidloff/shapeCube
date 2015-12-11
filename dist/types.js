"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createType = exports.types = undefined;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _orNull = require("./orNull");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = {
    Any: function Any(p) {
        if (_lodash2.default.isUndefined(p)) {
            return "Variable must be defined";
        }
        return true;
    },
    Check: function Check(a) {
        return !!a ? true : "Check must be valid";
    },
    NonEmptyArray: function NonEmptyArray(p) {
        if (!_lodash2.default.isArray(p)) {
            return "NonEmptyArray must be Array";
        }
        if (p.length == 0) {
            return "NonEmptyArray must not be empty";
        }
        return true;
    },
    Number: function Number(p) {
        if (isNaN(p)) {
            return "Variable is not a number";
        }
        return standardTypeCheckFunction("Number")(p);
    }
};

(0, _orNull.addOrNullFunctions)(types);

function createType(name, checks, message) {
    if (name === "message") {
        throw new Error("type \"" + name + "\" cannot be created because the name is reserved.");
    }
    types[name] = buildType(checks, message);
    (0, _orNull.buildOrNullFunction)(types, name);
    return types[name];
}

function buildType(checks, message) {
    for (var key in checks) {
        // todo: isObject returns true for functions?
        if (_lodash2.default.isObject(checks[key]) && !_lodash2.default.isFunction(checks[key])) {
            checks[key] = buildType(checks[key], message);
        }
        if (_lodash2.default.isString(checks[key])) {
            checks[key] = types[checks[key]];
        }
        if (!_lodash2.default.isFunction(checks[key])) {
            throw new Error("type is unknown");
        }
    }
    return function () {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var t = arguments[1];

        for (var key in checks) {
            if (checks[key](params[key], t) !== true) {
                return message || "Custom type error";
            }
        }
        return true;
    };
}

function standardTypeCheckFunction(type) {
    return function (p) {
        return _lodash2.default["is" + type](p) ? true : "Variable must be " + type;
    };
}

function addStandardTypes() {
    var standardTypes = ["String", "Boolean", "Function", "Date", "Object", "Array"];
    standardTypes.forEach(function (type) {
        types[type] = standardTypeCheckFunction(type);
        (0, _orNull.buildOrNullFunction)(types, type);
    });
}

addStandardTypes();

exports.types = types;
exports.createType = createType;
