const ts = require("./ts");

var newType = ts.type("newType", {a: ts.types.Number, b: ts.types.Number});

var foo = ts.def({a: ts.types.String, b: ts.types.Number}, p => {
    return p.a + p.b;
});

var lazyFoo = ts.lazyDef({a: ts.types.String, b: ts.types.Number}, p => {
    return p.a + p.b;
});

var bar = ts.def({a: ts.types.newType}, p => {
    return p.a.a + p.a.b;
});

var baz = ts.def({a: newType}, p => {
    return p.a.a + p.a.b;
});

console.log(foo({a: "foo", b: 3}));
console.log(lazyFoo("foo", 3));
console.log(bar({a: {a: 1, b: 2}}));
console.log(baz({a: {a: 2, b: 2}}));

