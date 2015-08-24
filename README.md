# Descriptor

Everything you need to know about the descriptor property in Paylike

- [What is it?](#what-is-it)
- [How is it validated?](#how-is-it-validated)
- [Where is it used?](#where-is-it-used)


## What is it?

The descriptor is used as output on the bank statement.

## How is it validated?

The descriptor is validated against the following criteria:

- It can only have a length of 22 or less
- It can only contain ASCII printable characters (see [charaters](#characters))

### Characters

```
a-z
0-9
! # $ % &
( ) * + ,
- . / : ;
< = > ? @
[ ] ^ _ `
{ | } ~
```

## Where is it used?

A descriptor is set in the following places:

1. On your merchant account
2. On a transaction for the reservation
3. On each capture of a transaction

The descriptor on the account (1) acts as a default if you do not supply a
descriptor for the transaction (2).

If you omit the descriptor for a capture (3) it will default to that on the
transaction (2).

As such, only the merchant account's descriptor is mandatory.
