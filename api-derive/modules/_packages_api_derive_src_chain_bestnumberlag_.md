**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api-derive/src/chain/bestNumberLag"

# Module: "packages/api-derive/src/chain/bestNumberLag"

## Index

### Functions

* [bestNumberLag](_packages_api_derive_src_chain_bestnumberlag_.md#bestnumberlag)

## Functions

### bestNumberLag

▸ **bestNumberLag**(`instanceId`: string, `api`: ApiInterfaceRx): function

*Defined in [packages/api-derive/src/chain/bestNumberLag.ts:25](https://github.com/polkadot-js/api/blob/e055438c5/packages/api-derive/src/chain/bestNumberLag.ts#L25)*

**`name`** bestNumberLag

**`description`** Calculates the lag between finalized head and best head

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberLag((lag) => {
  console.log(`finalized is ${lag} blocks behind head`);
});
```

#### Parameters:

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** function

A number of blocks
