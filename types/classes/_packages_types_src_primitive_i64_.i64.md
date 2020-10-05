**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/primitive/I64"](../modules/_packages_types_src_primitive_i64_.md) / I64

# Class: I64

**`name`** I64

**`description`** 
A 64-bit signed integer

## Hierarchy

* [Int](_packages_types_src_codec_int_.int.md)

  ↳ **I64**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_primitive_i64_.i64.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_primitive_i64_.i64.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_primitive_i64_.i64.md#endianness)
* [IPrimeName](_packages_types_src_primitive_i64_.i64.md#iprimename)

### Constructors

* [constructor](_packages_types_src_primitive_i64_.i64.md#constructor)

### Methods

* [with](_packages_types_src_primitive_i64_.i64.md#with)

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

\+ **new I64**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): [I64](_packages_types_src_primitive_i64_.i64.md)

*Inherited from [Int](_packages_types_src_codec_int_.int.md).[constructor](_packages_types_src_codec_int_.int.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/Int.ts:18](https://github.com/polkadot-js/api/blob/cc926596e/packages/types/src/codec/Int.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | true |

**Returns:** [I64](_packages_types_src_primitive_i64_.i64.md)

## Methods

### with

▸ `Static`**with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Int](_packages_types_src_codec_int_.int.md)>

*Inherited from [Int](_packages_types_src_codec_int_.int.md).[with](_packages_types_src_codec_int_.int.md#with)*

*Defined in [packages/types/src/codec/Int.ts:23](https://github.com/polkadot-js/api/blob/cc926596e/packages/types/src/codec/Int.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Int](_packages_types_src_codec_int_.int.md)>
