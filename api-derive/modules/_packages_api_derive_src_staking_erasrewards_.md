[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/erasRewards"](_packages_api_derive_src_staking_erasrewards_.md)

# Module: "packages/api-derive/src/staking/erasRewards"

## Index

### Functions

* [_erasRewards](_packages_api_derive_src_staking_erasrewards_.md#_erasrewards)
* [erasRewards](_packages_api_derive_src_staking_erasrewards_.md#erasrewards)

## Functions

###  _erasRewards

▸ **_erasRewards**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasRewards.ts:23](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api-derive/src/staking/erasRewards.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraRewards[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  erasRewards

▸ **erasRewards**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasRewards.ts:55](https://github.com/polkadot-js/api/blob/375dadbe3/packages/api-derive/src/staking/erasRewards.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraRewards[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
