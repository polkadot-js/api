# Constants & Queries

Constant queries will introduce you to the concepts behind the types and the inteaction of the API with those types. The same concepts are implemented in the remainder of the API - the runtime constants is just the simplest starting point.

for soime background on constants - there are values that are coded as part of the runtime (they can be changed as part of an upgrade), that defines certain values. Let's show some examples -

```js
// initialize the API as per pevious sections
...

// the length of an epoch (session) in Babe
console.log(api.consts.babe.epochDuration.toNumber());

// the amount required to create a new account
console.log(api.consts.balances.creationFee.toNumber());

// the amount required pef byte on an extrinsic
console.log(api.consts.balances.transactionByteFee.toNumber());
```

Since these are constants and defined by the metadata, it is not a call, but rather the values are immediate available - as you'll see in subsequent sections, there is no need for `await` on these, it immediately returns the type.

## The API and types

There is some magic the is applied by the API, for instance the `createFee` comes back as `Balance` type, however the API knows this type and makes a `Balance` object available, hence the `toNumber`. This is consistent is retrieving constants, making queries or event making transactions -

- when values are passed to the API, the API will convert whatever is provided into the correct type as required by the call
- when a value is retrieved, the API will provide an object of the correct type that wraps this value

From the last point, this means that a `Balance` will be returned as a number object (all numbers are defined as objects extending [bn.js](https://github.com/indutny/bn.js/)).

## Exploring types

In the next section we will take an initial dive into [types and their shared properties](types.basics.md), providing a backdrop of what to expect in expanding use of the API.
