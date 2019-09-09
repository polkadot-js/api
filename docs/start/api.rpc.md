# Making RPC queries

The RPC calls provide the backbone for the transmission of data to and from the node. Thie means that all API endpoints such as `api.query`, `api.tx` or `api.derive` just wraps RPC calls, providing information in the correctly encoded format.

Since you are already familiar with the `api.query` interface, the `api.rpc` interface follows the same format, for instance -

```js
...

// retrieve the chain name
const chain = await api.rpc.system.chain();

// retrieve the latest header
const lastHeader = await api.rpc.chain.getHeader();

// log the information
console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
```

In this example, you will see the same pattern as with queries: each result is a promise and a simple `await` makes the query and resolves with the result.

## Subscriptions

The RPCs lend themselves to using subscriptions, for instance in the above case you would assume that once connected, the chain won't change, however new blocks will come in at intervals and we probably want to keep track of those. We can adapt the previous example to start using subscriptions -

```js
...

// subscribe to the new headers
await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
});
```

Since we are dealing with a subscription, we now pass a callback into the `subscribeNewHeads` function, and this will  be trigerred on each header, as they are imported. the same pattern would apply to each of the `api.rpc.subscribe*` functions, as a last parameter a callback is to be provided that streams the latest data.

In general, whenever we create a subsciption, we would like to cleanup after ourselves and unsubscribe, so assuming we only want to log the first 10 headers, the above example can be adjusted in the following manner -

```js
...
let count = 0;

// subscribe to the new headers
const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);

  if (++count === 10) {
    unsubHeads();
  }
});
```

Unlike single-shot queries, the value we are using `await` for on subscriptions is a function, taking no parameters (that also returns nothing) that can be used to unsubscribe for the  subscription. So in the above example we set `ubsubHeads` and then call it when we wish to cancel the subscription.

## Extended Queries

As a next step, we will circle back to the `api.query` interface, [extending our use with subscriptions](api.query.subs.md), to stream values from the chain as they change.
