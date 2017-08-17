# TypeRight: minimal dynamic typing library

To see its functionality demonstrated, take a look at [the tests](https://github.com/rauschma/type-right/blob/master/test/index_test.js).

## Using `instanceof` for primitive values

```js
console.log('abc' instanceof tr.PrimitiveString); // true
console.log(null instanceof tr.PrimitiveNull); // true
```

## Enforcing the types of parameters

```js
tr.force('abc', tr.PrimitiveString); // ok
tr.force(undefined, tr.PrimitiveString); // TypeError
```

If parameters can be missing or `undefined`:

```js
tr.force('abc', tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)); // ok
tr.force(undefined, tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)); // ok
```
