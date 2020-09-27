**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api-derive/src/chain/bestNumberFinalized"

# Module: "packages/api-derive/src/chain/bestNumberFinalized"

## Index

### Functions

* [bestNumberFinalized](_packages_api_derive_src_chain_bestnumberfinalized_.md#bestnumberfinalized)

## Functions

### bestNumberFinalized

▸ **bestNumberFinalized**(`instanceId`: string, `api`: ApiInterfaceRx): function

*Defined in [packages/api-derive/src/chain/bestNumberFinalized.ts:25](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-derive/src/chain/bestNumberFinalized.ts#L25)*

**`name`** bestNumberFinalized

**`description`** Get the latest finalized block number.

**`example`** 
<BR>

```javascript
api.derive.chain.bestNumberFinalized((blockNumber) => {
  console.log(`the current finalized block is #${blockNumber}`);
});
```

#### Parameters:

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** function
