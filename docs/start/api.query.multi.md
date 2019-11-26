# Multi queries

In a number of applications, it is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The `api.query` interfaces allows this via the `.multi` subscription call.

## Multi queries, same type

Where possible, the use of multi queries are encouraged since it tracks a number of state entries over a single RPC call, instead of making a call for each single item. In addition it allows you to have a single callback to track changes. For queries of the same type we can use `.multi`, for example to retrieve the balances of a number of accounts at once -

```js
...

// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)
const unsub = await api.query.balances.freeBalance.multi([ADDR1, ADDR2], (balances) => {
  const [balance1, balance2] = balances;

  console.log(`The balances are ${balance1} and ${balance2}`);
});
```

A couple of items to note in the example above: we don't call `freeBalance` directly, but rather `freeBalance.multi`. We pass the addresses we want to query as an array, and the length thereof would depend on the number of addresses we want to query. As an extended example, we can track the balances of a list of validators,

```js
...

// Retrieve a snapshot of the validators
const validators = await api.query.session.validators();

// Subscribe to the balances for these accounts
const unsub = await api.query.balances.freeBalance.multi(validators, (balances) => {
  console.log(`The balances are: ${balances}`);
});
```

The above example does not subscribe to the validators explicitly, but only gets a snapshot and uses this into the future. It should be trivially extendable to subscribe to the validators, track which one have entered or left and then subscribe to balances as they change through the next blocks.

## Multi queries, distinct types

The previous `.multi` examples assumes that we do queries for the same types, i.e. we retrieve the balances for a number of accounts. However, there is also a need to retrieve various distinct types, as an example we would like to track the block timestamp in addition to the nonce and balance of a specific account. To cater for this, the api has a specific `api.queryMulti` interface that can be used to perform this query -

```js
...

// Subscribe to the timestamp, our index and balance
const unsub = await api.queryMulti([
  api.query.timestamp.now,
  [api.query.system.accountNonce, ADDR],
  [api.query.balances.freeBalance, ADDR]
], ([now, nonce, balance]) => {
  console.log(`${now}: balance of ${balance} and a nonce of ${nonce}`);
});
```

The above example certainly does not quite look as ergonomic and clean, but the API needs to understand (a) which are all the calls we need to make and (b) the calls and their params (if required). So breaking it down -

- `api.query.timestamp.now` - the timestamp is passed naked without any params. Also note that we do not call it while passing, but rather only provides a reference to the function, i.e. we do not have the expected `()` at the end. (This could also be of the form `[api.query.timestamp.now]`, aligning with subsequent entries)
- `[api.query.system.accountNonce, ADDR]` - the nonce query is passed as an array containing the function (once again naked), followed by the parameters that apply.

## Rounding out queries

To round out our query introduction, there are a [number of other utilities and calls available](api.query.other.md) that allows the `api.query` user to perform certain tasks, such as querying state at a specific block. These are covered in the next section.
