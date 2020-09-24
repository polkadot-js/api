**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/create/sanitize"

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

### alias

▸ **alias**(`src`: string[], `dest`: string, `withChecks`: boolean): Mapper

*Defined in [packages/types/src/create/sanitize.ts:62](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L62)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`src` | string[] | - |
`dest` | string | - |
`withChecks` | boolean | true |

**Returns:** Mapper

___

### cleanupCompact

▸ **cleanupCompact**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:77](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L77)*

**Returns:** Mapper

___

### findClosing

▸ **findClosing**(`value`: string, `start`: number): number

*Defined in [packages/types/src/create/sanitize.ts:44](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L44)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |
`start` | number |

**Returns:** number

___

### flattenSingleTuple

▸ **flattenSingleTuple**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:95](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L95)*

**Returns:** Mapper

___

### removeColons

▸ **removeColons**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:101](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L101)*

**Returns:** Mapper

___

### removeGenerics

▸ **removeGenerics**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:129](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L129)*

**Returns:** Mapper

___

### removePairOf

▸ **removePairOf**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:157](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L157)*

**Returns:** Mapper

___

### removeTraits

▸ **removeTraits**(): Mapper

*Defined in [packages/types/src/create/sanitize.ts:174](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L174)*

**Returns:** Mapper

___

### removeWrap

▸ **removeWrap**(`_check`: string): Mapper

*Defined in [packages/types/src/create/sanitize.ts:193](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L193)*

#### Parameters:

Name | Type |
------ | ------ |
`_check` | string |

**Returns:** Mapper

___

### sanitize

▸ **sanitize**(`value`: string, `options?`: SanitizeOptions): string

*Defined in [packages/types/src/create/sanitize.ts:214](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/sanitize.ts#L214)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |
`options?` | SanitizeOptions |

**Returns:** string
