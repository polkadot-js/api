[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/erasExposure"](_packages_api_derive_src_staking_erasexposure_.md)

# Module: "packages/api-derive/src/staking/erasExposure"

## Index

### Functions

* [_eraExposure](_packages_api_derive_src_staking_erasexposure_.md#_eraexposure)
* [_erasExposure](_packages_api_derive_src_staking_erasexposure_.md#_erasexposure)
* [eraExposure](_packages_api_derive_src_staking_erasexposure_.md#eraexposure)
* [erasExposure](_packages_api_derive_src_staking_erasexposure_.md#erasexposure)

## Functions

###  _eraExposure

▸ **_eraExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:38](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/erasExposure.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex, `withActive`: boolean): *Observable‹DeriveEraExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |
`withActive` | boolean |

___

###  _erasExposure

▸ **_erasExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:65](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/erasExposure.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  eraExposure

▸ **eraExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:59](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/erasExposure.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasExposure

▸ **erasExposure**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:73](https://github.com/polkadot-js/api/blob/af074500b/packages/api-derive/src/staking/erasExposure.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
