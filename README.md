# shapecube
add type checks to your javascript functions.

---

## try it out!
[shapecube on tonicdev](https://tonicdev.com/npm/shapecube)

---

## how to build and test
`npm test` runs all tests. The tests are also a good starting point to look for examples.

`npm run build` transpiles the es6 files to es5 and runs eslint.

---

## how to use it
First run `npm install shapecube` and then include shapecube in your project:
```javascript
import shapecube from "shapecube";

function add(a, b) {
    shapecube.check({Number: a}, {Number: b});

    return a + b;
}
```

---

## more examples

---

### basic usage

```javascript
shapecube.check({Number: 1});

// throws an error
shapecube.check({Number: "1"}); 

 // throws an error with a custom error message
shapecube.check({Number: "1", message: "custom error message"});
```

---

### error handler

```javascript
shapecube.config({
    errorHandler(err) {
        console.log(err);
    }
});

// logs error to console instead of throwing it
shapecube.check({Number: "1"}); 

```

---

### custom types

```javascript
var newType = shapecube.createType("newType", {
    a: shapecube.types.Number, 
    b: shapecube.types.Number
}, "newType consists of only numbers");

// throws "newType consists of only numbers"
shapecube.check({
    newType: {
        a: 1, 
        b: "2"
    }
}); 
```

---

```javascript
shapecube.createType("complexType", {
    a: "Number",
    b: {
        c: "String",
        t: "Array"
    }
});

shapecube.check({
    complexType: {
        a: 1,
        b: {
            c:"2",
            t:["2"]
        }
    }
});
```

---

## supported types
[ 'Any',
  'AnyOrNull',
  'Array',
  'ArrayOrNull',
  'Boolean',
  'BooleanOrNull',
  'Check',
  'CheckOrNull',
  'Date',
  'DateOrNull',
  'Function',
  'FunctionOrNull',
  'NonEmptyArray',
  'NonEmptyArrayOrNull',
  'Number',
  'NumberOrNull',
  'Object',
  'ObjectOrNull',
  'String',
  'StringOrNull' ]
