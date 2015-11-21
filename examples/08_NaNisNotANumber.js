const ts = require("../src/ts");

function foo(a) {
    ts.check({Number: a});
    return a;
}
foo(1);
// foo(NaN) throws error
