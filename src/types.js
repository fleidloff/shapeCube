import _ from "lodash";
import { orNull, addOrNullFunctions, buildOrNullFunction } from "./orNull";

const types = {
    Any(p) {
        if (_.isUndefined(p)) {
            return "Variable must be defined";
        }
        return true;
    },
    Check(a) {
        return !!a ? true : "Check must be valid";
    },
    NonEmptyArray(p) {
        if (!_.isArray(p)) {
            return "NonEmptyArray must be Array";
        }
        if (p.length == 0) {
            return "NonEmptyArray must not be empty";
        }
        return true;
    },
    Number(p) {
        if (isNaN(p)) {
            return "Variable is not a number";
        }
        return standardTypeCheckFunction("Number")(p);
    }
};

addOrNullFunctions(types);

function createType(name, checks, message) {
    if (name === "message") {
        throw new Error(`type "${name}" cannot be created because the name is reserved.`);
    }
    types[name] = buildType(checks, message);
    buildOrNullFunction(types, name);
    return types[name];
}

function buildType(checks, message) {
    return (params = {}, t) => {
        for (let key in checks) {
            // todo: isObject returns true for functions?
            if (_.isObject(checks[key]) && !(_.isFunction(checks[key]))) {
                checks[key] = buildType(checks[key], message);
            }
            if (_.isString(checks[key])) {
                checks[key] = types[checks[key]];
            }
            if (!(_.isFunction(checks[key]))) {
                return "type does not exist";
            }
            if (checks[key](params[key], t) !== true) {
                return message || "Custom type error";
            }
        }
        return true;
    };
}

function standardTypeCheckFunction(type) {
    return p => {
        return _[`is${type}`](p) ? true : `Variable must be ${type}`;
    }
}

function addStandardTypes() {
    const standardTypes = ["String", "Boolean", "Function", "Date", "Object", "Array"];
    standardTypes.forEach(type => {
        types[type] = standardTypeCheckFunction(type);
        buildOrNullFunction(types, type);
    });
}

addStandardTypes();

export { types, createType };
