[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/ownSlashes"](_packages_api_derive_src_staking_ownslashes_.md)

# Module: "packages/api-derive/src/staking/ownSlashes"

## Index

### Functions

* [_ownSlash](_packages_api_derive_src_staking_ownslashes_.md#_ownslash)
* [_ownSlashes](_packages_api_derive_src_staking_ownslashes_.md#_ownslashes)
* [ownSlash](_packages_api_derive_src_staking_ownslashes_.md#ownslash)
* [ownSlashes](_packages_api_derive_src_staking_ownslashes_.md#ownslashes)

## Functions

###  _ownSlash

▸ **_ownSlash**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:17](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/staking/ownSlashes.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `era`: EraIndex, `withActive`: boolean): *Observable‹DeriveStakerSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`era` | EraIndex |
`withActive` | boolean |

___

###  _ownSlashes

▸ **_ownSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:52](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/staking/ownSlashes.ts#L52)*

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

###  ownSlash

▸ **ownSlash**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:46](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/staking/ownSlashes.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `era`: EraIndex): *Observable‹DeriveStakerSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`era` | EraIndex |

___

###  ownSlashes

▸ **ownSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:62](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/staking/ownSlashes.ts#L62)*

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
