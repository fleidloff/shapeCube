const ts = require("../src/ts");

ts.config({
    throwError: false
});

function bar(a, b) {
    var err = ts.check({String: a, message: "a must be text"}, {String: b});
    if (err) {
        console.log(err);
    };
    return a + b;
}
bar("1", "2"); // === "12"
