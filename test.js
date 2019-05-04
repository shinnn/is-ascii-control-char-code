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

	t.equal(
		isAsciiControllCharCode(-0),
		true,
		'should not distinguish between a positive zero and a negative zero.'
	);

	t.equal(
		isAsciiControllCharCode('1'),
		false,
		'should return false when it takes a non-number value.'
	);

	t.equal(
		isAsciiControllCharCode(-1),
		false,
		'should return false when it takes a negative number.'
	);

	t.equal(
		isAsciiControllCharCode(32),
		false,
		'should return false when it takes a number more than 31 but not 127.'
	);

	t.equal(
		isAsciiControllCharCode(10.5),
		false,
		'should return false when it takes a non-integer number.'
	);

	t.equal(
		isAsciiControllCharCode(Infinity),
		false,
		'should return false when it takes a infinite number.'
	);

	t.equal(
		isAsciiControllCharCode(NaN),
		false,
		'should return false when it takes NaN.'
	);

	t.equal(
		isAsciiControllCharCode(),
		false,
		'should return false when it takes no arguments.'
	);

	t.end();
});
