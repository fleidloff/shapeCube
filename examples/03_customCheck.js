const ts = require("../" + require("../package.json").main);

function check(a) {
    ts.check({Check: (a >=0 && a < 10)});
    return a*10;
}
check(1); // === 10;
