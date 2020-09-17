[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/account"](_packages_api_derive_src_staking_account_.md)

# Module: "packages/api-derive/src/staking/account"

## Index

### Functions

* [account](_packages_api_derive_src_staking_account_.md#account)
* [accounts](_packages_api_derive_src_staking_account_.md#accounts)

## Functions

###  account

▸ **account**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:79](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/account.ts#L79)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DeriveStakingAccount›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |

___

###  accounts

▸ **accounts**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:61](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/account.ts#L61)*

**`description`** From a list of stashes, fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: (Uint8Array | string)[]): *Observable‹DeriveStakingAccount[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | (Uint8Array &#124; string)[] |
