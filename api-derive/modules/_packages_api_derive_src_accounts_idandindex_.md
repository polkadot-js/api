**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api-derive/src/accounts/idAndIndex"

# Module: "packages/api-derive/src/accounts/idAndIndex"

## Index

### Functions

* [idAndIndex](_packages_api_derive_src_accounts_idandindex_.md#idandindex)

## Functions

### idAndIndex

▸ **idAndIndex**(`instanceId`: string, `api`: ApiInterfaceRx): function

*Defined in [packages/api-derive/src/accounts/idAndIndex.ts:53](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/api-derive/src/accounts/idAndIndex.ts#L53)*

**`name`** idAndIndex

**`description`** An array containing the [[AccountId]] and [[AccountIndex]] as optional values.

**`example`** 
<BR>

```javascript
api.derive.accounts.idAndIndex('F7Hs', ([id, ix]) => {
  console.log(`AccountId #${id} with corresponding AccountIndex ${ix}`);
});
```

#### Parameters:

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** function
