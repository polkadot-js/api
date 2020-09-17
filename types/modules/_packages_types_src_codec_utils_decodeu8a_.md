[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/utils/decodeU8a"](_packages_types_src_codec_utils_decodeu8a_.md)

# Module: "packages/types/src/codec/utils/decodeU8a"

## Index

### Functions

* [decodeU8a](_packages_types_src_codec_utils_decodeu8a_.md#decodeu8a)

## Functions

###  decodeU8a

▸ **decodeU8a**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `u8a`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array), `_types`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[] | object): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Defined in [packages/types/src/codec/utils/decodeU8a.ts:14](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/utils/decodeU8a.ts#L14)*

Given an u8a, and an array of Type constructors, decode the u8a against the
types, and return an array of decoded values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`u8a` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | The u8a to decode. |
`_types` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)[] &#124; object | - |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*
