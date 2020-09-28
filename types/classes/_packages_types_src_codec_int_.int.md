**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/Int"](../modules/_packages_types_src_codec_int_.md) / Int

# Class: Int

**`name`** Int

**`description`** 
A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
this handles the encoding and decoding of those numbers. Upon construction
the bitLength is provided and any additional use keeps the number to this
length. This extends `BN`, so all methods available on a normal `BN` object
is available here.

## Hierarchy

* AbstractInt

  ↳ **Int**

  ↳↳ [I8](_packages_types_src_primitive_i8_.i8.md)

  ↳↳ [I16](_packages_types_src_primitive_i16_.i16.md)

  ↳↳ [I32](_packages_types_src_primitive_i32_.i32.md)

  ↳↳ [I64](_packages_types_src_primitive_i64_.i64.md)

  ↳↳ [I128](_packages_types_src_primitive_i128_.i128.md)

  ↳↳ [I256](_packages_types_src_primitive_i256_.i256.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_codec_int_.int.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_codec_int_.int.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_codec_int_.int.md#endianness)
* [IPrimeName](_packages_types_src_codec_int_.int.md#iprimename)

### Constructors

* [constructor](_packages_types_src_codec_int_.int.md#constructor)

### Methods

* [with](_packages_types_src_codec_int_.int.md#with)

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

\+ **new Int**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): [Int](_packages_types_src_codec_int_.int.md)

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:18](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/Int.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** [Int](_packages_types_src_codec_int_.int.md)

## Methods

### with

▸ `Static`**with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Int](_packages_types_src_codec_int_.int.md)>

*Defined in [packages/types/src/codec/Int.ts:23](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/Int.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Int](_packages_types_src_codec_int_.int.md)>
