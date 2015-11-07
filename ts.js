var types = require("./types");

function checkFactory(checks) {
    return params => {
        params = params || {};
        Object
            .keys(checks)
            .forEach(key => {
                checks[key](params[key], key);
            });
    };
}

function def(checks, cb) {
    var check = checkFactory(checks);
    return (...params) => {
        var map = {};
        var lastIndex = 0;
        Object.keys(checks).forEach((value, index) => {
            map[value] = params[index];
            lastIndex = index;
        });
        check(map);
        return cb(map, ...(params.splice(lastIndex + 1)));
    };
}

function type(name, checks) {
    var check = checkFactory(checks);
    types[name] = p => {
        check(p);
    };
    return types[name];
}

const ts = {
    def, type, types
};

module.exports = ts;
