const {def, type, types} = require("./ts");

var newType = type("newType", {a: types.Number, b: types.Number});

var foo = def({a: types.String, b: types.Number, c: types.Any},
    ({a, b, c}, d, e) => {
        return a + b + c + d + e;
    });
console.log(foo("foo", 3, "1", 4, 6));


var bar = def({a: types.newType},
    ({a}) => {
        return a.a + a.b;
    });
console.log(bar({a: 1, b: 2}));


var baz = def({a: newType},
    ({a, b}) => {
        return a.a + a.b;
    });
console.log(baz({a: 2, b: 2}));

function smiley() {
    return " =)";
}

function barFunction(a) {
    return "bar" + fooFunction(a);
}

var fooFunction = def({a: types.String},
    ({a}) => {
        return a + smiley();
    }
);

var obj = {smiley, bar: barFunction, fooFunction};

console.log(obj.bar("-tender"));

var check = def({a: types.Check(p => {return p >=0 && p < 10;}, "a must be between 0 and 9")},
    ({a}) => {
        return a*10;
    });
console.log(check(1));
