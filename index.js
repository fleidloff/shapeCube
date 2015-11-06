const ts = require("./ts");

var newType = ts.type("newType", {a: ts.types.Number, b: ts.types.Number});

var foo = ts.def({a: ts.types.String, b: ts.types.Number, c: ts.types.Any},
    ({a, b, c}, d, e) => {
        return a + b + c + d + e;
    });

var lazyFoo = ts.lazyDef({a: ts.types.String, b: ts.types.Number},
  	({a, b}, c) => {
        return a + b + c;
    });

var bar = ts.def({a: ts.types.newType},
    ({a}) => {
        return a.a + a.b;
    });

var baz = ts.def({a: newType},
    ({a, b}) => {
        return a.a + a.b;
    });

var lazyBaz = ts.lazyDef({a: newType},
    ({a}) => {
        return a.a + a.b;
    });

console.log(foo({a: "foo", b: 3, c: "1"}, 4, 6));
console.log(lazyFoo("foo", 3, 4));
console.log(bar({a: {a: 1, b: 2}}));
console.log(baz({a: {a: 2, b: 2}}));
console.log(lazyBaz({a: 2, b: 2}));
