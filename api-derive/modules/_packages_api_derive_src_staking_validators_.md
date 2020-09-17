[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/validators"](_packages_api_derive_src_staking_validators_.md)

# Module: "packages/api-derive/src/staking/validators"

## Index

### Functions

* [nextElected](_packages_api_derive_src_staking_validators_.md#nextelected)
* [validators](_packages_api_derive_src_staking_validators_.md#validators)

## Functions

###  nextElected

▸ **nextElected**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/validators.ts:14](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/validators.ts#L14)*

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

*Defined in [packages/api-derive/src/staking/validators.ts:30](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/validators.ts#L30)*

**`description`** Retrieve latest list of validators

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (): *Observable‹DeriveStakingValidators›*
