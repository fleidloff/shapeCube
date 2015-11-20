import {createType, types} from "./types";
const options = {
    throwError: true
};

function config(newOptions) {
    options.throwError = newOptions.throwError
}

function check(...params) {
    const errors = [];
    params.forEach(param => {
        for (let key in param) {
            if (typeof types[key] !== "function") {
                return;
            }
            if (!types[key](param[key], param.message, param.type)) {
                // todo: better message here
                const e = new TypeError("type error" + types[key] + key + param[key]);
                if (options.throwError) {
                    throw e;
                }
                errors.push(e);
            }
        };
    });
    return errors.length > 0 ? errors : null;
}

export {
    check,
    createType,
    types,
    config
};
