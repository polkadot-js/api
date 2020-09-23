[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/stakerPrefs"](_packages_api_derive_src_staking_stakerprefs_.md)

# Module: "packages/api-derive/src/staking/stakerPrefs"

## Index

### Functions

* [_stakerPrefs](_packages_api_derive_src_staking_stakerprefs_.md#_stakerprefs)
* [stakerPrefs](_packages_api_derive_src_staking_stakerprefs_.md#stakerprefs)

## Functions

###  _stakerPrefs

▸ **_stakerPrefs**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPrefs.ts:13](https://github.com/polkadot-js/api/blob/0c99064b1/packages/api-derive/src/staking/stakerPrefs.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerPrefs[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerPrefs

▸ **stakerPrefs**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerPrefs.ts:27](https://github.com/polkadot-js/api/blob/0c99064b1/packages/api-derive/src/staking/stakerPrefs.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerPrefs[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |
