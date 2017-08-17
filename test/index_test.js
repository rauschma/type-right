import test from 'ava';
import * as tr from '../esm/index.js';

test('instanceof', t => {
    t.true('abc' instanceof tr.PrimitiveString);
    t.true(null instanceof tr.PrimitiveNull);
});
test('tr.check()', t => {
    t.true(tr.check('abc', tr.PrimitiveString));
    t.false(tr.check(undefined, tr.PrimitiveString));
    t.true(tr.check('abc', tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)));
    t.true(tr.check(undefined, tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)));
});
test('tr.force()', t => {
    t.notThrows(() => tr.force('abc', tr.PrimitiveString));
    t.throws(() => tr.force(undefined, tr.PrimitiveString));
    t.notThrows(() => tr.force('abc', tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)));
    t.notThrows(() => tr.force(undefined, tr.union(tr.PrimitiveString, tr.PrimitiveUndefined)));
});
test('tr.toTypeName()', t => {
    t.is(tr.toTypeName(tr.union(tr.PrimitiveNumber, tr.PrimitiveNull)), 'PrimitiveNumber | PrimitiveNull');
});
