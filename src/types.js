import _ from "lodash";
import { orNull, addOrNullFunctions, buildOrNullFunction } from "./orNull";

const types = {
    Any(p, m) {
        return !_.isUndefined(p);
    },
    Check(a, m) {
        return !!a;
    },
    NonEmptyArray(p, m) {
        return _.isArray(p) && p.length > 0;
    },
    TypedArray(p, m, type) {
        if (!_.isArray(p)) {
            return false;
        }
        if (!_.isFunction(type)) {
            return false;
        }
        let result = true;
        p.forEach(it => {
            if (!type(it)) {
                result = false;
            }
        });

        return result;
    }
};

addOrNullFunctions(types);

function createType(name, checks) {
    if (name === "message" || name === "type") {
        throw new Error(`type "${name}" cannot be created because the name is reserved.`);
    }
    types[name] = (params = {}, m, t) => {
        for (let key in checks) {
            if (!checks[key](params[key], m, t)) {
                return false;
            }
        }
        return true;
    };
    buildOrNullFunction(types, name);
    return types[name];
}

function addStandardTypes() {
    const standardTypes = ["String", "Number", "Boolean", "Function", "Date", "Object", "Array"];
    standardTypes.forEach(type => {
        types[type] = (p, m) => {
            return _[`is${type}`](p);
        }
        buildOrNullFunction(types, type);
    });
}

addStandardTypes();

export { types, createType };
