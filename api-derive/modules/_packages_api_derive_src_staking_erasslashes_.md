[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/erasSlashes"](_packages_api_derive_src_staking_erasslashes_.md)

# Module: "packages/api-derive/src/staking/erasSlashes"

## Index

### Functions

* [_eraSlashes](_packages_api_derive_src_staking_erasslashes_.md#_eraslashes)
* [_erasSlashes](_packages_api_derive_src_staking_erasslashes_.md#_erasslashes)
* [eraSlashes](_packages_api_derive_src_staking_erasslashes_.md#eraslashes)
* [erasSlashes](_packages_api_derive_src_staking_erasslashes_.md#erasslashes)

## Functions

###  _eraSlashes

▸ **_eraSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:32](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/erasSlashes.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex, `withActive`: boolean): *Observable‹DeriveEraSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |
`withActive` | boolean |

___

###  _erasSlashes

▸ **_erasSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:62](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/erasSlashes.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  eraSlashes

▸ **eraSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:56](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/erasSlashes.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasSlashes

▸ **erasSlashes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:72](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-derive/src/staking/erasSlashes.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
