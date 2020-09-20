[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/stakerSlashes"](_packages_api_derive_src_staking_stakerslashes_.md)

# Module: "packages/api-derive/src/staking/stakerSlashes"

## Index

### Functions

* [_stakerSlashes](_packages_api_derive_src_staking_stakerslashes_.md#_stakerslashes)
* [stakerSlashes](_packages_api_derive_src_staking_stakerslashes_.md#stakerslashes)

## Functions

###  _stakerSlashes

▸ **_stakerSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerSlashes.ts:13](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/stakerSlashes.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerSlashes

▸ **stakerSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerSlashes.ts:28](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/stakerSlashes.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
