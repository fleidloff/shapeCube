const ts = require("./ts");
const assert = console.log;

ts.config({
    throwError: true
});

function foo({a, b, c, d, e=4, f}) {
    ts.check({Number: a, message: "a must be Number"}, {Number: b}, {Number: c}, {Any: d}, {Boolean: f});
    return a + b + c + d + e;
}
assert(foo({a: 0, b: 1, c: 2, d: 3, f: true}) === 10);


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
    var e = ts.check({newType: a, message: "new type is not built correctly"});
    return a.a + a.b;
}
assert(checkType({a: 1, b: 2}) === 3);


function checkArray(a) {
    ts.check({Array: a});
    return a.join("-");
}
assert(checkArray([1, 2, 3]) === "1-2-3");

function checkTypedArray(a) {
    ts.check({TypedArray: a, type: ts.types.Number});
    return a.join("-");
}
assert(checkTypedArray([1, 2, 3]) === "1-2-3");
