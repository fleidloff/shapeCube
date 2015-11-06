var preconditions = require("preconditions").singleton();

var types = {
    String(p) {
        preconditions.shouldBeString(p);
    },
    Number(p) {
        preconditions.shouldBeNumber(p);
    },
    Any(p) {
        preconditions.shouldBeDefined(p);
    }
};

module.exports = types;
