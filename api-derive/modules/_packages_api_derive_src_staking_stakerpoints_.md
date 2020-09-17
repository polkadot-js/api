[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/stakerPoints"](_packages_api_derive_src_staking_stakerpoints_.md)

# Module: "packages/api-derive/src/staking/stakerPoints"

## Index

### Functions

* [_stakerPoints](_packages_api_derive_src_staking_stakerpoints_.md#_stakerpoints)
* [stakerPoints](_packages_api_derive_src_staking_stakerpoints_.md#stakerpoints)

## Functions

###  _stakerPoints

▸ **_stakerPoints**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPoints.ts:13](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/stakerPoints.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerPoints

▸ **stakerPoints**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPoints.ts:29](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/stakerPoints.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerPoints[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
