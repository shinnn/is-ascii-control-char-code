# is-ascii-control-char-code

[![npm version](https://img.shields.io/npm/v/is-ascii-control-char-code.svg)](https://www.npmjs.com/package/is-ascii-control-char-code)
[![Build Status](https://travis-ci.com/shinnn/is-ascii-control-char-code.svg?branch=master)](https://travis-ci.com/shinnn/is-ascii-control-char-code)
[![codecov](https://codecov.io/gh/shinnn/is-ascii-control-char-code/branch/master/graph/badge.svg)](https://codecov.io/gh/shinnn/is-ascii-control-char-code)

Check if a given value is one of the ASCII control character codes

```javascript
import isAsciiControlCharCode from 'is-ascii-control-char-code';

isAsciiControlCharCode(10); //=> true
isAsciiControlCharCode(100); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-ascii-control-char-code
```

## API

```javascript
import isAsciiControlCharCode from 'is-ascii-control-char-code';
```

### isAsciiControlCharCode(*charCode*)

*charCode*: `number`  
Return: `boolean`

It returns `true` if the argument is a whole number no fewer than `0` and no greater than `31`, or `127`. Otherwise, it returns `false`.

```javascript
// Returns `true`
isAsciiControlCharCode(0);
isAsciiControlCharCode(31);
isAsciiControlCharCode(127);

// Returns `false`
isAsciiControlCharCode(-1);
isAsciiControlCharCode(32);
isAsciiControlCharCode(0.5);
isAsciiControlCharCode(NaN);
isAsciiControlCharCode(Infinity);
isAsciiControlCharCode('non-number argument');
isAsciiControlCharCode();
```

## Related

* [is-ascii-control-char](https://github.com/shinnn/is-ascii-control-char) - Check a character instead of a character code

## License

[BSD Zero Clause License](./LICENSE) © 2019 Shinnosuke Watanabe
