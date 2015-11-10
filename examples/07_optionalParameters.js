const ts = require("../" + require("../package.json").main);

function foo(a, b, c) {
    ts.check({Number: a}, {Number: b}, {NumberOrNull: c});
    return a + b + (c || 0);
}
foo(1, 2, 3); // 6
