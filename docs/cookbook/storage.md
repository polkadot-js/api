# Storage

Here you will find snippets for working with storage.

## How do I check for storage existence?

In the metadata, for each storage item a fallback is provided. This means that when an entry does not exist, the fallback (which is the default value for the type) will be provided. This means, that querying for a non-existent key (unless an option), will ield a value -

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
