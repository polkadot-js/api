[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/chain/bestNumberLag"](_packages_api_derive_src_chain_bestnumberlag_.md)

# Module: "packages/api-derive/src/chain/bestNumberLag"

## Index

### Functions

* [bestNumberLag](_packages_api_derive_src_chain_bestnumberlag_.md#bestnumberlag)

## Functions

###  bestNumberLag

▸ **bestNumberLag**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/bestNumberLag.ts:26](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/chain/bestNumberLag.ts#L26)*

**`name`** bestNumberLag

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

A number of blocks

▸ (): *Observable‹BlockNumber›*
