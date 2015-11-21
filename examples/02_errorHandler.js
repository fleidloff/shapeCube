const ts = require("../src/ts");

ts.config({
    errorHandler: e => {
        console.error(e);
    }
});

function bar(a, b) {
    ts.check({String: a, message: "a must be text"}, {String: b});

    return a + b;
}
bar("1", "2"); // === "12"
