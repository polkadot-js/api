[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/create/sanitize"](_packages_types_src_create_sanitize_.md)

# Module: "packages/types/src/create/sanitize"

## Index

### Functions

* [alias](_packages_types_src_create_sanitize_.md#alias)
* [cleanupCompact](_packages_types_src_create_sanitize_.md#cleanupcompact)
* [findClosing](_packages_types_src_create_sanitize_.md#findclosing)
* [flattenSingleTuple](_packages_types_src_create_sanitize_.md#flattensingletuple)
* [removeColons](_packages_types_src_create_sanitize_.md#removecolons)
* [removeGenerics](_packages_types_src_create_sanitize_.md#removegenerics)
* [removePairOf](_packages_types_src_create_sanitize_.md#removepairof)
* [removeTraits](_packages_types_src_create_sanitize_.md#removetraits)
* [removeWrap](_packages_types_src_create_sanitize_.md#removewrap)
* [sanitize](_packages_types_src_create_sanitize_.md#sanitize)

## Functions

###  alias

▸ **alias**(`src`: string[], `dest`: string, `withChecks`: boolean): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:63](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`src` | string[] | - |
`dest` | string | - |
`withChecks` | boolean | true |

**Returns:** *Mapper*

___

###  cleanupCompact

▸ **cleanupCompact**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:78](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L78)*

**Returns:** *Mapper*

___

###  findClosing

▸ **findClosing**(`value`: string, `start`: number): *number*

*Defined in [packages/types/src/create/sanitize.ts:45](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`start` | number |

**Returns:** *number*

___

###  flattenSingleTuple

▸ **flattenSingleTuple**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:96](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L96)*

**Returns:** *Mapper*

___

###  removeColons

▸ **removeColons**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:102](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L102)*

**Returns:** *Mapper*

___

###  removeGenerics

▸ **removeGenerics**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:130](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L130)*

**Returns:** *Mapper*

___

###  removePairOf

▸ **removePairOf**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:158](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L158)*

**Returns:** *Mapper*

___

###  removeTraits

▸ **removeTraits**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:175](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L175)*

**Returns:** *Mapper*

___

###  removeWrap

▸ **removeWrap**(`_check`: string): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:194](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`_check` | string |

**Returns:** *Mapper*

___

###  sanitize

▸ **sanitize**(`value`: string, `options?`: SanitizeOptions): *string*

*Defined in [packages/types/src/create/sanitize.ts:215](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/create/sanitize.ts#L215)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`options?` | SanitizeOptions |

**Returns:** *string*
