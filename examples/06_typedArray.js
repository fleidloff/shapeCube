const ts = require("../src/ts");

function checkTypedArray(a) {
    ts.check({TypedArray: a, type: ts.types.Number});
    return a.join("-");
}
checkTypedArray([1, 2, 3]); // === "1-2-3"
