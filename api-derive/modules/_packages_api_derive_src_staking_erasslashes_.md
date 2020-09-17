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

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:33](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/erasSlashes.ts#L33)*

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

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:63](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/erasSlashes.ts#L63)*

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

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:57](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/erasSlashes.ts#L57)*

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

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:73](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/erasSlashes.ts#L73)*

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
