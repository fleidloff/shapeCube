var shapecube = require("shapecube");

function add(a, b) {
    shapecube.check({Number: a}, {Number: b});

    return a + b;
}

add(1, "2");
