**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/UInt"](../modules/_packages_types_src_codec_uint_.md) / UInt

# Class: UInt

**`name`** UInt

**`description`** 
A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* AbstractInt

  ↳ **UInt**

  ↳↳ [U32](_packages_types_src_primitive_u32_.u32.md)

  ↳↳ [U64](_packages_types_src_primitive_u64_.u64.md)

  ↳↳ [U8](_packages_types_src_primitive_u8_.u8.md)

  ↳↳ [U16](_packages_types_src_primitive_u16_.u16.md)

  ↳↳ [U128](_packages_types_src_primitive_u128_.u128.md)

  ↳↳ [U256](_packages_types_src_primitive_u256_.u256.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_codec_uint_.uint.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_codec_uint_.uint.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_codec_uint_.uint.md#endianness)
* [IPrimeName](_packages_types_src_codec_uint_.uint.md#iprimename)

### Constructors

* [constructor](_packages_types_src_codec_uint_.uint.md#constructor)

### Methods

* [with](_packages_types_src_codec_uint_.uint.md#with)

## Type aliases

### Endianness

Ƭ `Static` **Endianness**: \"le\" \| \"be\"

*Defined in node_modules/@types/bn.js/index.d.ts:11*

___

### IPrimeName

Ƭ `Static` **IPrimeName**: \"k256\" \| \"p224\" \| \"p192\" \| \"p25519\"

*Defined in node_modules/@types/bn.js/index.d.ts:12*

## Constructors

### constructor

\+ **new UInt**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): [UInt](_packages_types_src_codec_uint_.uint.md)

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:18](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/UInt.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** [UInt](_packages_types_src_codec_uint_.uint.md)

## Methods

### with

▸ `Static`**with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>

*Defined in [packages/types/src/codec/UInt.ts:23](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/codec/UInt.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>
