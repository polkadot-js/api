[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/chain/bestNumber"](_packages_api_derive_src_chain_bestnumber_.md)

# Module: "packages/api-derive/src/chain/bestNumber"

## Index

### Functions

* [bestNumber](_packages_api_derive_src_chain_bestnumber_.md#bestnumber)

## Functions

###  bestNumber

▸ **bestNumber**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/chain/bestNumber.ts:24](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/chain/bestNumber.ts#L24)*

**`name`** bestNumber

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumber((blockNumber) => {
  console.log(`the current best block is #${blockNumber}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

The latest block number.

▸ (): *Observable‹BlockNumber›*
