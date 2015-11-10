var preconditions = require("preconditions").singleton();
// Function #1: 34ms
// Function #2: 10398ms
// Function #3: 11016ms


const ts = require("./src/ts");

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

console.time('Function #3');
for(var i = 0; i < iterations; i++ ){
    three(i);
};
console.timeEnd('Function #3');

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

function three(i) {
    var a = add2(3, i);
}

function add3(a, b) {
    preconditions.shouldBeNumber(a);
    preconditions.shouldBeNumber(b);
    return a + b;
}
