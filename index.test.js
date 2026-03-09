import {test} from 'node:test';
import {foo} from './index.js';
import assert from 'node:assert';

test('foo', () => {
  assert.equal(foo(), 2);
});
