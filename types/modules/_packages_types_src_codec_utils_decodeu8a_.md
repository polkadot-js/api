**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/codec/utils/decodeU8a"

# Module: "packages/types/src/codec/utils/decodeU8a"

## Index

### Functions

* [decodeU8a](_packages_types_src_codec_utils_decodeu8a_.md#decodeu8a)

## Functions

### decodeU8a

▸ **decodeU8a**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `u8a`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array), `_types`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[] \| { [index:string]: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md);  }): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Defined in [packages/types/src/codec/utils/decodeU8a.ts:13](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/utils/decodeU8a.ts#L13)*

Given an u8a, and an array of Type constructors, decode the u8a against the
types, and return an array of decoded values.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`u8a` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) | The u8a to decode. |
`_types` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[] \| { [index:string]: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md);  } | - |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]
