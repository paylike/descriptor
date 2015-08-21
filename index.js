'use strict';

module.exports = {
	maxLenght: 22,

	isValid: function( descriptor ){
		if (typeof descriptor !== 'string')
			return false;

		return !!/^[\x20-\x7E]{0,22}$/.exec(descriptor);
	},
}
