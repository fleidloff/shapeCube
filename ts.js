const types = require("./types");
let options = {
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
            try {
                types[key](param[key], param.message, param.type);
            } catch (e) {
                if (options.throwError) {
                    throw e;
                }
                errors.push(e);
            }
        };
    });
    return errors.length > 0 ? errors : null;
}

function type(name, checks) {
    types[name] = (params = {}, m, t) => {
        for (let key in checks) {
            checks[key](params[key], m, t);
        };
    };
    return types[name];
}

const ts = {
    check, type, types, config
};

module.exports = ts;
