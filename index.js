'use strict';

module.exports = {
	maxLenght: 22,
	errorMessage: 'Invalid descriptor (see https://github.com/paylike/descriptor)',

	isValid: function( descriptor ){
		if (typeof descriptor !== 'string')
			return false;

		return !!/^[\x20-\x7E]{0,22}$/.exec(descriptor);
	},
}
