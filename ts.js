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
        Object
            .keys(param)
            .forEach(key => {
                if (typeof types[key] === "function") {
                    try {
                        types[key](param[key], param.message, param.type);
                    } catch (e) {
                        if (options.throwError) {
                            throw e;
                        } else {
                            errors.push(e);
                        }
                    }
                }
            });
    });
    return errors.length > 0 ? errors : null;
}

function buildChecker(checks) {
    return (params = {}, m) => {
        Object
            .keys(checks)
            .forEach(key => {
                checks[key](params[key], m);
            });
    };
}

function type(name, checks) {
    const checker = buildChecker(checks);
    types[name] = (p, m) => {
        checker(p, m);
    };
    return types[name];
}

const ts = {
    check, type, types, config
};

module.exports = ts;
