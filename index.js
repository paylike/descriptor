'use strict';

var regex = /^[\x20-\x7E]{0,22}$/;

module.exports = {
	maxLenght: 22,
	errorMessage: 'Invalid descriptor (see https://github.com/paylike/descriptor)',
	regex: regex,

	isValid: function( descriptor ){
		if (typeof descriptor !== 'string')
			throw new Error('Descriptor must be a string');

		return !!regex.exec(descriptor);
	},
}
