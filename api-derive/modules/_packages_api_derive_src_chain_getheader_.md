[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/chain/getHeader"](_packages_api_derive_src_chain_getheader_.md)

# Module: "packages/api-derive/src/chain/getHeader"

## Index

### Functions

* [getHeader](_packages_api_derive_src_chain_getheader_.md#getheader)

## Functions

###  getHeader

▸ **getHeader**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/getHeader.ts:26](https://github.com/polkadot-js/api/blob/0c99064b1/packages/api-derive/src/chain/getHeader.ts#L26)*

**`name`** getHeader

**`description`** Get a specific block header and extend it with the author

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

An array containing the block header and the block author

▸ (`hash`: Uint8Array | string): *Observable‹[HeaderExtended](../classes/_packages_api_derive_src_type_headerextended_.headerextended.md) | undefined›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | Uint8Array &#124; string | A block hash as U8 array or string. |
