**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / "packages/api-derive/src/chain/getBlock"

# Module: "packages/api-derive/src/chain/getBlock"

## Index

### Functions

* [getHeader](_packages_api_derive_src_chain_getblock_.md#getheader)

## Functions

### getHeader

▸ **getHeader**(`instanceId`: string, `api`: ApiInterfaceRx): function

*Defined in [packages/api-derive/src/chain/getBlock.ts:25](https://github.com/polkadot-js/api/blob/014fa123b/packages/api-derive/src/chain/getBlock.ts#L25)*

**`name`** getBlock

**`description`** Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author

**`example`** 
<BR>

```javascript
const { author, number } = await api.derive.chain.getHeader('0x123...456');

console.log(`block #${number} was authored by ${author}`);
```

#### Parameters:

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** function
