# Runtime Constants

Constant queries will introduce you to the concepts behind the types and the interaction of the API with those types. The same concepts are implemented in the remainder of the API - the runtime constants is just the simplest starting point.

For some background: constants are values that are defined in the runtime and used as part of chain operations. These constants can be changed as part of an upgrade.

```js
// Initialize the API as per previous sections
...

// The length of an epoch (session) in Babe
console.log(api.consts.babe.epochDuration.toNumber());

// The amount required to create a new account
console.log(api.consts.balances.creationFee.toNumber());

// The amount required per byte on an extrinsic
console.log(api.consts.balances.transactionByteFee.toNumber());
```

Since these are constants and defined by the metadata, it is not a call, but rather the values immediately available - as you'll see in subsequent sections, there is no need for `await` on these, it immediately returns the type and value for you to work with.

## The API and types

There is some magic applied by the API. For instance as the `createFee` result is returned, the API knows the expected type and makes a `Balance` object available, hence the `toNumber`. This result mapping is consistent in retrieving constants, making queries or even sending transactions:

- when values are passed to the API, the API will convert whatever is provided into the correct type as required by the call
- when a value is retrieved, the API will provide an object of the correct type that wraps this value

From the last point, this means that a `Balance` will be returned as a number object extending [bn.js](https://github.com/indutny/bn.js/). In a later section we will go through a breakdown of all the commonly-used types and all [the basics available on types](types.basics.md).

## Making queries

In the next section we will take an initial dive into [chain state and state queries](api.query.md), allowing the use of the API to retrieve information contained in the chain state.
