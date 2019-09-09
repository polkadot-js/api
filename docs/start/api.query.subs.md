# Streaming queries

Previously we explained the concepts between `api.query`. In this section we will expand on that knowledge to introduce subscriptions (akin to what we found in `api.rpc`) as well as introducing the ability to perform multiple queries at once over a single RPC call.

## Subcriptions

As in the case with `api.rpc` subscriptions, query subscriptions follow exactly the same form - an actual call is augmented with a callback to return the current state value, update as it changes.  As an example extending on what we had previously -

```js
...

// retrieve the current timestamp via subscription
const unsub = await api.query.timestamp.now((moment) => {
  console.log(`The last block has a timestamp of ${moment}`);
});
```

The form is exactly the same as the subscriptions we have seen previously, instead of the `await` returning the actual once-off value, it returns a subscription. The supplied callback will contain the value as it changes, streamed from the node.

## Subscriptions with params

If we had a query with parameters, i.e. the case where we retrieve the balance, the form is exactly the same - the last parameter contains the actual callback, after all parameters. For examplke to retrieve the balances for an account as it changes -

```js
...

// subscribe to balance changes for our account
const unsub = await api.query.balances.freeBalance(ADDR, (balance) => {
  console.log(`Your account balance is ${balance}`);
});
```

As in the case of the `api.rpc` calls, the subscription call returns a function (`unsub()` in these cases), that can be used unsubscribe and free up resources.

## Multiple queries

In most non-trivial applications, it is useful [to perform multiple queries at once, over the same RPC call](api.query.multi.md) in the next section we will dive into this usecase.
