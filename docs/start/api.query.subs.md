# Query subscriptions

Previously we explained the concepts between `api.query`. In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in `api.rpc`) to stream results from the state, as it changes between blocks.

## Subscriptions

As in the case with `api.rpc` subscriptions, query subscriptions follow exactly the same form - an actual call is augmented with a callback to return the current state value that is updated as the underlying value changes. As an example, we can extend on what we had previously -

```js
...

// Retrieve the current timestamp via subscription
const unsub = await api.query.timestamp.now((moment) => {
  console.log(`The last block has a timestamp of ${moment}`);
});
```

The form is exactly the same as the subscriptions we have seen previously, instead of the `await` returning the actual once-off value, it returns a subscription `unsub()` function that can be used to stop the subscription and clear up any underlying RPC connections. The supplied callback will contain the value as it changes, streamed from the node.

## Subscriptions with params

If we had a query with parameters, i.e. where we wish to perform a query for a specific account, the form is exactly the same - the last parameter contains the actual callback, after all other parameters. To retrieve the balances for an account as it changes, we could do the following -

```js
...

// Subscribe to balance changes for our account
const unsub = await api.query.system.account(ADDR, ({ nonce, data: balance }) => {
  console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);
});
```

By now this subscription form should be familiar to you, including the usage of `unsub`.

## Multiple queries

In most non-trivial applications, it is useful to optimize both our code in terms of callbacks as well as node resources, for instance by [performing multiple queries at once, over the same RPC call](api.query.multi.md).
