const {createType, types} = require("./types");
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

module.exports = {
    check,
    createType,
    types,
    config
};
