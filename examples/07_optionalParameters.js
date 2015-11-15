const ts = require("../src/ts");

function foo(a, b, c) {
    ts.check({Number: a}, {Number: b}, {NumberOrNull: c});
    return a + b + (c || 0);
}
foo(1, 2, null); // 6
