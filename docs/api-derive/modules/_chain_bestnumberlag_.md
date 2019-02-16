

# Functions

<a id="bestnumberlag"></a>

##  bestNumberLag

▸ **bestNumberLag**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/bestNumberLag.ts:25](https://github.com/polkadot-js/api/blob/eb5e2f7/packages/api-derive/src/chain/bestNumberLag.ts#L25)*

*__description__*: Calculates the lag between finalised head and best head

*__example__*:   

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalised is ${lag} blocks behind head`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`

___

