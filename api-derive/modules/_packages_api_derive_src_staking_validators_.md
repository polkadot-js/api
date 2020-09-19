[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/validators"](_packages_api_derive_src_staking_validators_.md)

# Module: "packages/api-derive/src/staking/validators"

## Index

### Functions

* [nextElected](_packages_api_derive_src_staking_validators_.md#nextelected)
* [validators](_packages_api_derive_src_staking_validators_.md#validators)

## Functions

###  nextElected

▸ **nextElected**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/validators.ts:13](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api-derive/src/staking/validators.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (): *Observable‹AccountId[]›*

___

###  validators

▸ **validators**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/validators.ts:29](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api-derive/src/staking/validators.ts#L29)*

**`description`** Retrieve latest list of validators

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (): *Observable‹DeriveStakingValidators›*
