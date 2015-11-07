const ts = require("./ts");
const assert = console.log;

ts.config({
    throwError: true
});

function foo({a, b, c, d, e=4}) {
    ts.check({Number: a}, {Number: b}, {Number: c}, {Any: d});
    return a + b + c + d + e;
}
assert(foo({a: 0, b: 1, c: 2, d: 3}) === 10);


function bar(a, b) {
    var err = ts.check({String: a, message: "a must be text"}, {String: b});
    if (err) console.log(err);
    return a + b;
}
assert(bar("1", "2") === "12");


function checkCheck(a) {
    ts.check({Check: (a >=0 && a < 10)});
    return a*10;
}
assert(checkCheck(1) === 10);

var newType = ts.type("newType", {a: ts.types.Number, b: ts.types.Number});
function checkType(a) {
    ts.check({newType: a, message: "new type is not built correctly"});
    return a.a + a.b;
}
assert(checkType({a: 1, b: 2}) === 3);
