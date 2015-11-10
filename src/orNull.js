function orNull(cb) {
    return (p, ...rest) => {
        if (p === null) {
            return;
        }
        return cb(p, ...rest);
    }
}

function buildOrNullFunction(types, key) {
    const OR_NULL = "OrNull";
    types[key + OR_NULL] = orNull(types[key]);
}

function addOrNullFunctions(types) {
    Object.keys(types).forEach(type => {
        buildOrNullFunction(types, type);
    });
}

module.exports = { orNull, buildOrNullFunction, addOrNullFunctions };
