var preconditions = require("preconditions").singleton();

var types = {
    String(p, m) {
        preconditions.shouldBeString(p, m);
    },
    Number(p, m) {
        preconditions.shouldBeNumber(p, m);
    },
    Any(p, m) {
        preconditions.shouldBeDefined(p, m);
    },
    Check(a, m) {
        preconditions.checkArgument(a, m);
    }
};

module.exports = types;
