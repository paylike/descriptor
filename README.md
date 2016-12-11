# Descriptor

Everything you need to know about the descriptor property in Paylike

- [Install](#install)
- [Use](#use)
- [What is it?](#what-is-it)
- [How is it validated?](#how-is-it-validated)
- [Where is it used in Paylike?](#where-is-it-used-in-paylike)

## Install

```
npm install --save @paylike/descriptor
```

## Use

```js
var descriptor = require('@paylike/descriptor');

descriptor.isValid('paylike.io'); // true
descriptor.isValid('£'); // false

descriptor.errorMessage
descriptor.maxLength
descriptor.regex
```

```js
var descriptor = require('@paylike/descriptor');

var $input = document.querySelector('input.descriptor');

$input.pattern = descriptor.regex.source;
$input.maxLength = descriptor.maxLength;
```

## What is it?

The descriptor is shown on a credit card bill, a bank statement or in an
online banking account as the text accompanying the charged amount.

## How is it validated?

- It can only have a length of 22 or less
- It can only contain ASCII printable characters

	```
	a-z
	A-Z
	0-9
	! # $ % &
	( ) * + ,
	- . / : ;
	< = > ? @
	[ ] ^ _ `
	{ | } ~
	```

## Where is it used in Paylike?

A descriptor is set in the following places:

1. On your merchant account
2. On a transaction for the reservation
3. On each capture of a transaction

The descriptor on the account (1) acts as a default if you do not supply a
descriptor for the transaction (2).

If you omit the descriptor for a capture (3) it will default to that on the
transaction (2).

As such, only the merchant account's descriptor is mandatory.
