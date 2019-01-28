

# Functions

<a id="getheader"></a>

##  getHeader

▸ **getHeader**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/getHeader.ts:25](https://github.com/polkadot-js/api/blob/e798df9/packages/api-derive/src/chain/getHeader.ts#L25)*

*__description__*: Get the a specific block header and extend it with the author

*__example__*:   

```javascript
const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${blockNumber} was authored by ${author}`);
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`

___

