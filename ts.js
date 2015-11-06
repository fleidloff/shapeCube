var preconditions = require("preconditions").singleton();

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
        return params => {
            check(params);
            return func(params);
        };
    },
    lazyDef(types, func) {
        var func = this.def(types, func);
        return function(/*...params*/) { // cannot use anonymous function here until spread is supported
            var params = Array.prototype.slice.call(arguments);
            var map = {};
            Object.keys(types).forEach((value, index) => {
                map[value] = params[index];
            });
            return func(map);
        };
    },
    type(name, types) {
        var check = checkFactory(types);
        this.types[name] = p => {
            check(p);
        };
        return this.types[name];
    },

    types: {
        String(p) {
            preconditions.shouldBeString(p);
        },
        Number(p) {
            preconditions.shouldBeNumber(p);
        }
    }
};

module.exports = ts;
