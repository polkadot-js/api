# Query extras

In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the `api.query` interfaces.

## State at a specific block

Quite often is is useful (taking pruning into account, more on this later) to retrieve the state at a specific block. For instance we may wish to retrieve the current balance as well as the balance at a previous block for a specific account -

```js
...

// Retrieve the current block header
const lastHdr = await api.rpc.chain.getHeader();

// Retrieve the balance at both the current and the parent hashes
const [{ data: balanceNow }, { data: balancePrev }] = await Promise.all([
  api.query.system.account.at(lastHdr.hash, ADDR),
  api.query.system.account.at(lastHdr.parentHash, ADDR)
]);

// Display the difference
console.log(`The delta was ${balanceNow.free.sub(balancePrev.free)}`);
```

In the above example, we introduce the `.at(<hash>[, ...params]): Type` query. For all `.at` queries, the first parameter is always the block hash at which we want to make the query, in our example we use both the last retrieved block and the parent thereof. The params are optional as per the type of query made, for instance to retrieve the timestamp for a previous block, it would be -

```js
...

// Retrieve the timestamp for the previous block
const momentPrev = await api.query.timestamp.now.at(lastHdr.parentHash);
```

The `.at` queries are all single-shot, i.e. there are no subscription option to these, since the state for a previous block should be static. (This is true to a certain extent, i.e. when blocks have been finalized).

An additional point to take care of (briefly mentioned above), is state pruning. By default a Polkadot/Substrate node will only keep state for the last 256 blocks, unless it is explicitly run in archive mode. This means that querying state further back than the pruning period will result in an error returned from the Node. (Generally most public RPC nodes only run with default settings, which includes aggressive state pruning)

## State for a range of blocks

In addition to the `.at` queries, you can also query state starting at a specific historic block and up to either a specified or the latest blocks. This is done via the `.range([from, to?], <...opt params>): [Hash, Type][]` query. As an example -

```js
...
// Retrieve the current block header
const lastHdr = await api.rpc.chain.getHeader();
const startHdr = await api.rpc.chain.getBlockHash(lastHdr.number.unwrap().subn(500));

// retrieve the range of changes
const changes = await api.query.system.account.range([startHdr]);

changes.forEach(([hash, value]) => {
  console.log(hash.toHex(), value.toHuman());
});
```

## Map keys & entries

When working maps and double-maps, it is possible to retrieve a list of all the keys and entries for the map. For this we can use the `.entries(<args>): [StorageKey, Type][]` queries. For example we may want to know the current list of validator exposures at a current era in the staking module -

```js
...
// Retrieve the active era
const activeEra = await api.query.staking.activeEra();

// retrieve all exposures for the active era
const exposures = await api.query.staking.erasStakers.entries(activeEra.index);

exposures.forEach(([key, exposure]) => {
  console.log('key arguments:', key.args.map((k) => k.toHuman()));
  console.log('     exposure:', exposure.toHuman());
});
```

To understand the usage of the `key.args`, you need to understand that map/doublemap keys are stored alongside their lookups. This means that the raw key has hashed parts as well as the raw data. The API will decode the keys and provide the raw key arguments in args. This would mean -

- if we are querying `api.query.staking.validators(validatorId: AccountId)` via `entries`, the `key.args` would be `[AccountId]`
- if we are querying `api.query.staking.erasStakers(era: EraIndex, validatorId: AccountId)` via `entries`, the `key.args` would be `[EraIndex, AccountId]`

the same applies to `.keys()` - here the list of keys also have the decoded args, as specified. You can think of `.args` as a tuple with the same types as the types required to retrieve a single entry in the map.

In the first example we are querying a double-map, so we supply 1 argument. No arguments on double-maps will be very costly, retrieving all the eras and associated entries. In the same way as above we can simply do `.keys(activeEra.index): StorageKey[]` to retrieve all the keys here, including the individual keys args (available on maps with decodable hashing functions) -

```js
// retrieve all the nominator keys
const keys = await api.query.staking.nominators.keys();

// extract the first key argument [AccountId] as string
const nominatorIds = keys.map(({ args: [nominatorId] }) => nominatorId);

console.log('all nominators:', nominatorIds.join(', '));
```

## State entries

In addition to using `api.query` to make actual on-chain queries, it can also be used to retrieve some information on the state entries. For instance to retrieve both the hash and size of an existing entry, we can make the following calls -

```js
...

// Retrieve the hash & size of the entry as stored on-chain
const [entryHash, entrySize] = await Promise.all([
  api.query.system.account.hash(ADDR),
  api.query.system.account.size(ADDR)
]);

// Output the info
console.log(`The current size is ${entrySize} bytes with a hash of ${entryHash}`);
```

As per the previous examples, the params here apply explicitly to the actual needed values to identify an entry. As with `.at` queries, there are no subscription versions for these queries, rather they are seen as one-shot values at a specific point in time.

## Entry metadata

It has been explained that the `api.query` interfaces are decorated from the metadata. This also means that there is some information that we can gather from the entry, as decorated -

```js
// Extract the info
const { meta, method, section } = api.query.system.account;

// Display some info on a specific entry
console.log(`${section}.${method}: ${meta.documentation.join(' ')}`);
console.log(`query key: ${api.query.system.account.key(ADDR)}`);
```

The `section` & `method` is an indication of where it is exposed on the API. In addition the `meta` holds an array with the metadata documentation for the entry.

The `key` endpoint requires some explanation. In the chain state, the key values (identified by the module, method & params) are hashed and this is used as a lookup. So underlying a single-shot query would utilize the `api.rpc.state.getStorage` entry, passing the output of `key` (which is a hashed representation of the values). Apart from the hashing, the API also takes care of type formatting, handling optional values and merging results across multiple subscriptions.

## Let's transact already!

At this point you are already burning to actually make some transactions. Making queries is cool, but just how do [you actually submit transactions on-chain](api.tx.md).
