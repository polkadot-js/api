[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/chain/getBlock"](_packages_api_derive_src_chain_getblock_.md)

# Module: "packages/api-derive/src/chain/getBlock"

## Index

### Functions

* [getHeader](_packages_api_derive_src_chain_getblock_.md#getheader)

## Functions

###  getHeader

▸ **getHeader**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/getBlock.ts:26](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/chain/getBlock.ts#L26)*

**`name`** getBlock

**`description`** Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author

**`example`** 
<BR>

```javascript
const { author, number } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${number} was authored by ${author}`);
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`hash`: Uint8Array | string): *Observable‹SignedBlockExtended | undefined›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | Uint8Array &#124; string | A block hash as U8 array or string. |
