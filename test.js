'use strict';

const isAsciiControllCharCode = require('.');
const test = require('tape');

const asciiControlCharCodes = [...Array.from({length: 32}, (v, i) => i), 127];

test('isAsciiControllCharCode', t => {
  t.deepEqual(
    asciiControlCharCodes.filter(code => isAsciiControllCharCode(code) === true),
    asciiControlCharCodes,
    'should return true when it takes a code of ASCII control character.'
  );

  t.strictEqual(
    isAsciiControllCharCode('1'),
    false,
    'should return false when it takes a non-number value.'
  );

  t.strictEqual(
    isAsciiControllCharCode(-1),
    false,
    'should return false when it takes a negative number.'
  );

  t.strictEqual(
    isAsciiControllCharCode(32),
    false,
    'should return false when it takes a number more than 31 but not 127.'
  );

  t.strictEqual(
    isAsciiControllCharCode(10.5),
    false,
    'should return false when it takes a non-integer number.'
  );

  t.strictEqual(
    isAsciiControllCharCode(Infinity),
    false,
    'should return false when it takes a infinite number.'
  );

  t.strictEqual(
    isAsciiControllCharCode(NaN),
    false,
    'should return false when it takes NaN.'
  );

  t.strictEqual(
    isAsciiControllCharCode(),
    false,
    'should return false when it takes no arguments.'
  );

  t.end();
});
