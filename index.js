'use strict';

module.exports = function isControllCharCode(code) {
	if (typeof code !== 'number') {
		return false;
	}

	if (code === 127) {
		return true;
	}

	if (code < 0) {
		return false;
	}

	if (code > 31) {
		return false;
	}

	return Math.floor(code) === code;
}
