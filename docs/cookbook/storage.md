# Storage

Here you will find snippets for working with storage.

## How do I check for storage existence?

In the metadata, for each storage item a fallback is provided. This means that when an entry does not exist, the fallback (which is the default value for the type) will be provided. This means, that querying for a non-existent key (unless an option), will yield a value -

```js
// retrieve Option<StakingLedger>
const ledger = await api.query.staking.ledger('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');
// retrieve ValidatorPrefs (will yield the default value)
const prefs = await api.query.staking.validators('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');

console.log(ledger.isNone, ledger.isSome); // true, false
console.log(JSON.stringify(prefs.toHuman())); // {"commission":"0"}
```

In the second case, the non-existent prefs returns the default/fallback value for the storage item. So in this case we don't know if the value is set to 0 or unset. Existence can be checked by using the storage size, which would be zero if nothing is stored.

```js
// exists
const sizeY = await api.query.staking.validators.size('DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4');
// non existent
const sizeN = await api.query.staking.validators.size('EoukLS2Rzh6dZvMQSkqFy4zGvqeo14ron28Ue3yopVc8e3Q');

console.log(sizeY.isZero(), sizeY.toNumber()); // false 4
console.log(sizeN.isZero(), sizeY.toNumber()); // true 0
```

## How do I use .entries()/.keys() on double maps?

As [explained elsewhere](../start/api.query.other.md#map-keys-entries) each map-type storage entry exposes the entries/keys helpers to retrieve the whole list. In the case of double maps, with the addition of a single argument, you can retrieve either all entries or a subset based on the first map key.

In both these cases, entries/keys operate the same way, `.entries()` retrieving `(StorageKey, Codec)[]` and `.keys()` retrieving `StorageKey[]`

```js
// Retrieves the entries for all slashes, in all eras (no arg)
const allEntries = await api.query.staking.nominatorSlashInEra.entries();

// nominatorSlashInEra(EraIndex, AccountId) for the types of the key args
allEntries.forEach(([{ args: [era, nominatorId] }, value]) => {
  console.log(`${era}: ${nominatorId} slashed ${value.toHuman()}`);
});
```

While we can retrieve only the keys for a specific era, using a argument for the first part of the doublemap (as defined here, an `EraIndex`) -

```js
// Retrieves the keys for the slashed validators in era 652
const slashedKeys = await api.query.staking.nominatorSlashInEra.keys(652);

// key args still contains [EraIndex, AccountId] decoded
console.log(`slashed: ${slashedKeys.map(({ args: [era, nominatorId] }) => nominatorId)`);
```
