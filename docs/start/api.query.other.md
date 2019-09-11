# Query extras

In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the `api.query` interfaces.

## State at a specific block

Quite often is is useful (taking pruning into account, more on this later) to retrieve the state at a specific block. For instance we may wish to retrieve the current balance as well as the balance at a previous block for a specific account -

```js
...

// retrieve the current block header
const lastHdr = await api.rpc.chain.getHeader();

// retrieve the balance at both the current and the parent hashes
const [balanceNow, balancePrev] = await Promise.all([
  api.query.balances.freeBalance.at(lastHdr.hash, ADDR),
  api.query.balances.freeBalance.at(lastHdr.parentHash, ADDR)
]);

// display the difference
console.log(`The delta was ${balanceNow.sub(balancePrev)}`);
```

In the above example, we introduce the `.at(<hash>[, ...params])` query. For all `.at` queries, the first parameter is always the block hash at which we want to make the query, in our example we use both the last retrieved block and the parent thereof. The params are optional as per the type of query made, for instance to retrieve the timestamp for a previous block, it would be -

```js
...

// retrieve the timestampt for the  previous block
const momentPrev = await api.query.timestamp.now.at(lastHdr.parentHash);
```

The `.at` queries are all single-shot, i.e. there are no subscription option to these, since the state for a previous block should be static. (This is true to a certain extent, i.e. when blocks have been finalized).

An additional point to take care of (briefly mentioned above), is state pruning. By default a Substrate node will only keep state for the last 256 blocks, unless it is explicitly run in archive mode. This means that querying state further back than the pruning period will result in an error returned from the Node. (Generaly most public RPC nodes only run with default settings, which includes agressive state pruning)

## State entries

In addition to using `api.query` to make actual on-chain queries, it can also be used to retrieve some information on the state entries. For instance to retrieve both the hash and size of an existing entry, we can make the following calls -

```js
...

// retrieve the hash & size of the entry as stored on-chain
const [entryHash, entrySize] = await Promise.all([
  api.query.freeBalance.hash(ADDR),
  api.query.freeBalance.size(ADDR)
]);

// output the info
console.log(`The current size is ${entrySize} bytes with a hash of ${entryHash}`);
```

As per the previous examples, the params here apply explicitly to the actual needed values to identify an entry. As with `.at` queries, there are no subscription versions for these queries, rather they are seen as one-shot values at a specific point in time.

## Entry metadata

It has been explained that the `api.query` interfaces are decorated from the metadata. This also means that there is some information that we can gather from the entry, as decorated -

```js
// extract the info
const { meta, method, section } = api.query.balances.freeBalance;

// display some info on a specific entry
console.log(`${section}.${method}: ${meta.documentation.join(' ')}`);
console.log(`query key: ${api.query.balances.freeBalance.key(ADDR)}`);
```

The `section` & `method` is an indication of where it is exposed on the API. In addition the `meta` holds an array with the metadata documentation for the entry.

The `key` endpoint requires some explanation. In the chain state, the key values (identified by the module, method & params) are hashed and this is used as a lookup. So underlying a single-shot query would utilize the `api.rpc.state.getStorage` entry, passing the output of `key` (which is a hashed representation of the values). Apart from the hashing, the API also takes care of type formatting, handling optional values and merging results accross multiple subscriptions.

## Let's transact already!

At this point you are already burning to actually make some transactions. Making queries is cool, but just how do [you actually submit transactions on-chain](api.tx.md).
