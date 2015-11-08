var preconditions = require("preconditions").singleton();

var types = {
    Any(p, m) {
        preconditions.shouldBeDefined(p, m);
    },
    Check(a, m) {
        preconditions.checkArgument(a, m);
    },
    TypedArray(p, m, type) {
        preconditions.shouldBeArray(p, m);
        preconditions.shouldBeFunction(type, "TypeArray requires a type param.");
        p.forEach(it => {
            type(it);
        });
    }
};

const standardTypes = ["String", "Number", "Boolean", "Function", "Date", "Object", "Array"];
standardTypes.forEach(type => {
    types[type] = (p, m) => {
        preconditions[`shouldBe${type}`](p, m);
    }
});

module.exports = types;
