[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/elections/info"](_packages_api_derive_src_elections_info_.md)

# Module: "packages/api-derive/src/elections/info"

## Index

### Functions

* [info](_packages_api_derive_src_elections_info_.md#info)

## Functions

###  info

▸ **info**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/elections/info.ts:57](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/api-derive/src/elections/info.ts#L57)*

**`name`** info

**`example`** 
<BR>

```javascript
api.derive.elections.info(({ members, candidates }) => {
  console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the combined results of the storage queries for
all relevant election module properties.

▸ (): *Observable‹DeriveElectionsInfo›*
