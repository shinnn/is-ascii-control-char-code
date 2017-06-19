# is-ascii-control-char-code

[![NPM version](https://img.shields.io/npm/v/is-ascii-control-char-code.svg)](https://www.npmjs.com/package/is-ascii-control-char-code)
[![Bower version](https://img.shields.io/bower/v/is-ascii-control-char-code.svg)](https://github.com/shinnn/is-ascii-control-char-code/releases)
[![Build Status](https://travis-ci.org/shinnn/is-ascii-control-char-code.svg?branch=master)](https://travis-ci.org/shinnn/is-ascii-control-char-code)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-ascii-control-char-code.svg)](https://coveralls.io/r/shinnn/is-ascii-control-char-code)

Check if a given value is one of the ASCII control character codes

```javascript
import isAsciiControlCharCode from 'is-ascii-control-char-code';

isAsciiControlCharCode(10); //=> true
isAsciiControlCharCode(100); //=> false
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install is-ascii-control-char-code
```

### [Bower](https://bower.io/)

```
bower install is-ascii-control-char-code
```

## API

```javascript
import isAsciiControlCharCode from 'is-ascii-control-char-code';
```

### isAsciiControlCharCode(*charCode*)

*charCode*: `Number`  
Return: `Boolean`

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

## Related project

[is-ascii-control-char](https://github.com/shinnn/is-ascii-control-char) - Check a character instead of a character code

## License

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
