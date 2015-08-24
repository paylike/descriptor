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

You can enter a descriptor on your merchant account
