# TypeRight: minimal dynamic typing library

To see its functionality demonstrated, take a look at [the tests](https://github.com/rauschma/type-right/blob/master/test/index_test.js).

Installation:

```text
npm install type-right
```

Importing:

```js
import * as tr from 'type-right';
```

## Using `instanceof` for primitive values

```js
console.log('abc' instanceof tr.PrimitiveString); // true
console.log(null instanceof tr.PrimitiveNull); // true
```

## Enforcing the types of values

```js
tr.force('abc', tr.PrimitiveString); // ok
tr.force(undefined, tr.PrimitiveString); // TypeError
```

If parameters can be missing or `undefined`:

```js
tr.force('abc', tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)); // ok
tr.force(undefined, tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)); // ok
```

### Enforcing the type of parameters

```js
function dist(x, y) {
    tr.force(x, tr.PrimitiveNumber, y, tr.PrimitiveNumber);
    return Math.hypot(x, y);
}
```

