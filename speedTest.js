// function two is slower by factor 1000!
// Function #1: 15ms
// Function #2: 13493ms


const ts = require("./ts");

var iterations = 10000000;
console.time('init');
console.timeEnd('init');

console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    one(i);
};
console.timeEnd('Function #1');

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    two(i);
};
console.timeEnd('Function #2');

function one(i) {
    var a = add(3, i);
}

function add(a, b) {
    return a + b;
}

function two(i) {
    var a = add2(3, i);
}

function add2(a, b) {
    ts.check({Number: a}, {Number: b});
    return a + b;
}
