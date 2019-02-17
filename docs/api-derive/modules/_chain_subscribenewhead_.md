

# Type aliases

<a id="headerandvalidators"></a>

##  HeaderAndValidators

**Ƭ HeaderAndValidators**: *[`Header`, `Array`<`AccountId`>]*

*Defined in [chain/subscribeNewHead.ts:12](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api-derive/src/chain/subscribeNewHead.ts#L12)*

___

# Functions

<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/subscribeNewHead.ts:25](https://github.com/polkadot-js/api/blob/40a1ec9/packages/api-derive/src/chain/subscribeNewHead.ts#L25)*

*__description__*: Subscribe to block headers and extend it with the author

*__example__*:   

```javascript
api.derive.chain.subscribeNewHead(({ author, blockNumber }) => {
  console.log(`block #${blockNumber} was authored by ${author}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`

___

