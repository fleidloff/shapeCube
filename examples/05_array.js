const ts = require("../" + require("../package.json").main);

function checkArray(a) {
    ts.check({Array: a});
    return a.join("-");
}
checkArray([1, 2, 3]); // === "1-2-3"
