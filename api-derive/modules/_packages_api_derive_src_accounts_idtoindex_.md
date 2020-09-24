[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/accounts/idToIndex"](_packages_api_derive_src_accounts_idtoindex_.md)

# Module: "packages/api-derive/src/accounts/idToIndex"

## Index

### Functions

* [idToIndex](_packages_api_derive_src_accounts_idtoindex_.md#idtoindex)

## Functions

###  idToIndex

▸ **idToIndex**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/accounts/idToIndex.ts:27](https://github.com/polkadot-js/api/blob/6faea13a2/packages/api-derive/src/accounts/idToIndex.ts#L27)*

**`name`** idToIndex

**`example`** 
<BR>

```javascript
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
  console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

Returns the corresponding AccountIndex.

▸ (`accountId`: AccountId | string): *Observable‹AccountIndex | undefined›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`accountId` | AccountId &#124; string | An accounts Id in different formats. |
