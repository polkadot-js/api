[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/balances/account"](_packages_api_derive_src_balances_account_.md)

# Module: "packages/api-derive/src/balances/account"

## Index

### Functions

* [account](_packages_api_derive_src_balances_account_.md#account)

## Functions

###  account

▸ **account**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/balances/account.ts:83](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/balances/account.ts#L83)*

**`name`** account

**`example`** 
<BR>

```javascript
const ALICE = 'F7Hs';

api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
  console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

An object containing the results of various balance queries

▸ (`address`: AccountIndex | AccountId | Address | string): *Observable‹DeriveBalancesAccount›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | AccountIndex &#124; AccountId &#124; Address &#124; string | An accounts Id in different formats. |
