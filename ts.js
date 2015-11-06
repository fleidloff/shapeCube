var types = require("./types");

function checkFactory(types) {
    return function check(params) {
        params = params || {};
        Object
            .keys(types)
            .forEach(key => {
                types[key](params[key]);
            });

    };
}

const ts = {
    def(types, func) {
        var check = checkFactory(types);
        return (params, ...rest) => {
            check(params);
            return func(params, ...rest);
        };
    },
    lazyDef(types, func) {
        var func = this.def(types, func);
        return function(...params) {
            var map = {};
            var lastIndex = 0;
            Object.keys(types).forEach((value, index) => {
                map[value] = params[index];
                lastIndex = index;
            });
            return func(map, ...(params.splice(lastIndex + 1)));
        };
    },
    type(name, types) {
        var check = checkFactory(types);
        this.types[name] = p => {
            check(p);
        };
        return this.types[name];
    },

    types
};

module.exports = ts;
