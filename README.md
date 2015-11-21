# ts
some type safety experiments with JavaScript

* v0: initial implementation
* v1: new syntax + speedtest (15ms - 13s)
* v2: alternative typeof implementation + speedtest (15ms 60s)
* v3: add orNull
* v4: remove preconditions and replace with lodash only (15ms 9.6s)

transpile to es5 first with ```grunt``` and then run an example with ```$ EXAMPLE=01 npm start```
