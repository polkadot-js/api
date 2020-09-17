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

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:18](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/ownSlashes.ts#L18)*

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

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:53](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/ownSlashes.ts#L53)*

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

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/ownSlashes.ts#L47)*

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

*Defined in [packages/api-derive/src/staking/ownSlashes.ts:63](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/ownSlashes.ts#L63)*

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
