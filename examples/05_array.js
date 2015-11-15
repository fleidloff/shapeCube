const ts = require("../src/ts");

function checkArray(a) {
    ts.check({Array: a});
    return a.join("-");
}
checkArray([1, 2, 3]); // === "1-2-3"
