

# Type aliases

<a id="headerandvalidators"></a>

##  HeaderAndValidators

**Ƭ HeaderAndValidators**: *[`Header`, `Array`<`AccountId`>]*

*Defined in [chain/subscribeNewHead.ts:13](https://github.com/polkadot-js/api/blob/ead67ec/packages/api-derive/src/chain/subscribeNewHead.ts#L13)*

___

# Functions

<a id="subscribenewhead"></a>

##  subscribeNewHead

▸ **subscribeNewHead**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/subscribeNewHead.ts:26](https://github.com/polkadot-js/api/blob/ead67ec/packages/api-derive/src/chain/subscribeNewHead.ts#L26)*

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

