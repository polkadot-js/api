[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/erasPoints"](_packages_api_derive_src_staking_eraspoints_.md)

# Module: "packages/api-derive/src/staking/erasPoints"

## Index

### Functions

* [_erasPoints](_packages_api_derive_src_staking_eraspoints_.md#_eraspoints)
* [erasPoints](_packages_api_derive_src_staking_eraspoints_.md#eraspoints)

## Functions

###  _erasPoints

▸ **_erasPoints**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPoints.ts:34](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/api-derive/src/staking/erasPoints.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  erasPoints

▸ **erasPoints**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPoints.ts:64](https://github.com/polkadot-js/api/blob/820dd3d0f/packages/api-derive/src/staking/erasPoints.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
