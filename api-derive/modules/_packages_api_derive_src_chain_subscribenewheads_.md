[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/chain/subscribeNewHeads"](_packages_api_derive_src_chain_subscribenewheads_.md)

# Module: "packages/api-derive/src/chain/subscribeNewHeads"

## Index

### Functions

* [subscribeNewHeads](_packages_api_derive_src_chain_subscribenewheads_.md#subscribenewheads)

## Functions

###  subscribeNewHeads

▸ **subscribeNewHeads**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/subscribeNewHeads.ts:26](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/chain/subscribeNewHeads.ts#L26)*

**`name`** subscribeNewHeads

**`description`** An observable of the current block header and it's author

**`example`** 
<BR>

```javascript
api.derive.chain.subscribeNewHeads((header) => {
  console.log(`block #${header.number} was authored by ${header.author}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

An array containing the block header and the block author

▸ (): *Observable‹[HeaderExtended](../classes/_packages_api_derive_src_type_headerextended_.headerextended.md)›*
