**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / "packages/types/src/codec/utils/mapToTypeMap"

# Module: "packages/types/src/codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_packages_types_src_codec_utils_maptotypemap_.md#maptotypemap)

## Functions

### mapToTypeMap

▸ **mapToTypeMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `input`: Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>): Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:11](https://github.com/polkadot-js/api/blob/f778bf32e/packages/types/src/codec/utils/mapToTypeMap.ts#L11)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`input` | Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> |

**Returns:** Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>
