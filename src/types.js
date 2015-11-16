import _preconditions from "preconditions";
const preconditions = _preconditions.singleton();
import { orNull, addOrNullFunctions, buildOrNullFunction } from "./orNull";

const types = {
    Any(p, m) {
        preconditions.shouldBeDefined(p, m);
    },
    Check(a, m) {
        preconditions.checkArgument(a, m);
    },
    TypedArray(p, m, type) {
        preconditions.shouldBeArray(p, m);
        preconditions.shouldBeFunction(type, "TypeArray requires a type param.");
        p.forEach(it => {
            type(it);
        });
    }
};

addOrNullFunctions(types);

function createType(name, checks) {
    if (name === "message" || name === "type") {
        throw new Error(`type "${name}" cannot be created because the name is reserved.`);
    }
    types[name] = (params = {}, m, t) => {
        for (let key in checks) {
            checks[key](params[key], m, t);
        };
    };
    buildOrNullFunction(types, name);
    return types[name];
}

function addStandardTypes() {
    const standardTypes = ["String", "Number", "Boolean", "Function", "Date", "Object", "Array", "NonEmptyArray"];
    standardTypes.forEach(type => {
        types[type] = (p, m) => {
            preconditions[`shouldBe${type}`](p, m);
            buildOrNullFunction(types, type);
        }
    });
}

addStandardTypes();

export { types, createType };
