# RPC queries

The RPC calls provide the backbone for the transmission of data to and from the node. This means that all API endpoints such as `api.query`, `api.tx` or `api.derive` just wrap RPC calls, providing information in the encoded format as expected by the node.

Since you are already familiar with the `api.query` interface, the `api.rpc` interface follows the same format, for instance -

```js
...

// Retrieve the chain name
const chain = await api.rpc.system.chain();

// Retrieve the latest header
const lastHeader = await api.rpc.chain.getHeader();

// Log the information
console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
```

In this example, you will see the same pattern as with queries: each result is a promise and a simple `await` makes the query and resolves with the result.

## Subscriptions

The RPCs lend themselves to using subscriptions, for instance in the above case you would assume that once connected, the chain won't change, however new blocks will come in at intervals and we probably want to keep track of those. We can adapt the previous example to start using subscriptions -

```js
...

// Subscribe to the new headers
await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
});
```

Since we are dealing with a subscription, we now pass a callback into the `subscribeNewHeads` function, and this will be triggered on each header, as they are imported. The same pattern would apply to each of the `api.rpc.subscribe*` functions - as a last parameter a callback is to be provided that streams the latest data, as it becomes available.

In general, whenever we create a subscription, we would like to cleanup after ourselves and unsubscribe, so assuming we only want to log the first 10 headers, the above example can be adjusted in the following manner -

```js
...
let count = 0;

// Subscribe to the new headers
const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);

  if (++count === 10) {
    unsubHeads();
  }
});
```

Unlike single-shot queries, for subscriptions we are `await`-ing a function, taking no parameters (that also returns nothing) that can be used to unsubscribe for the subscription and clear the underlying RPC connection. So in the above example we set `unsubHeads` and then call it when we wish to cancel the subscription.

## Detour into derives

The `api.derive` interfaces will be covered in a follow-up section, but since the above example deals with new head subscriptions, a quick detour is warranted. The derives are just helpers that define certain functions and combine results from multiple sources. For new headers, the following information is useful in certain scenarios -

```js
...
const unsub = await api.derive.chain.subscribeNewHeads((lastHeader) => {
  console.log(`#${lastHeader.number} was authored by ${lastHeader.author}`);
});
```

In the above case the `subscribeNewHeads` derive augments the header retrieved with an `.author` getter. This is done by parsing the actual header and logs received and filling in the author from the `api.query.session.validators` call.

## Extended Queries

As a next step, now that we have understood subscription and RPC basics, we will circle back to the `api.query` interface, [extending our queries with subscriptions](api.query.subs.md).
