[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/utils/mapToTypeMap"](_packages_types_src_codec_utils_maptotypemap_.md)

# Module: "packages/types/src/codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_packages_types_src_codec_utils_maptotypemap_.md#maptotypemap)

## Functions

###  mapToTypeMap

▸ **mapToTypeMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `input`: Record‹string, keyof InterfaceTypes | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)›): *Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:11](https://github.com/polkadot-js/api/blob/b4cae1483/packages/types/src/codec/utils/mapToTypeMap.ts#L11)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`input` | Record‹string, keyof InterfaceTypes &#124; [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› |

**Returns:** *Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)›*
