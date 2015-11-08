const ts = require("../" + require("../package.json").main);

function foo({a, b, c, d, e=4, f}) {
    ts.check({Number: a}, {Number: b, message: "b must be Number"}, {Number: c}, {Any: d}, {Boolean: f});
    return a + b + c + d + e;
}
foo({a: 0, b: 1, c: 2, d: 3, f: true}); // === 10
