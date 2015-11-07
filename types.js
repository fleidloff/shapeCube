var preconditions = require("preconditions").singleton();

var types = {
    String(p, key) {
        preconditions.shouldBeString(p, `Variable ${key} must be String`);
    },
    Number(p, key) {
        preconditions.shouldBeNumber(p, `Variable ${key} must be String`);
    },
    Any(p, key) {
        preconditions.shouldBeDefined(p, `Variable ${key} must be String`);
    },
    Check(checkFunction, m) {
        return (p, key) => {
            preconditions.checkArgument(checkFunction(p), m || `Variable ${key} is Illegal Argument`);
        }
    }
};

module.exports = types;
