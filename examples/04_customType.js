const ts = require("../" + require("../package.json").main);

var newType = ts.type("newType", {a: ts.types.Number, b: ts.types.Number});
function checkType(a) {
    var e = ts.check({newType: a, message: "new type is not built correctly"});
    return a.a + a.b;
}
checkType({a: 1, b: 2}); // === 3
