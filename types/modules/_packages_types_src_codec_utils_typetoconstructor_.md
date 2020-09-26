**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/codec/utils/typeToConstructor"

# Module: "packages/types/src/codec/utils/typeToConstructor"

## Index

### Functions

* [typeToConstructor](_packages_types_src_codec_utils_typetoconstructor_.md#typetoconstructor)

## Functions

### typeToConstructor

▸ **typeToConstructor**\<T>(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

*Defined in [packages/types/src/codec/utils/typeToConstructor.ts:8](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/codec/utils/typeToConstructor.ts#L8)*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>
