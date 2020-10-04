**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/primitive/U256"](../modules/_packages_types_src_primitive_u256_.md) / U256

# Class: U256

**`name`** U256

**`description`** 
A 256-bit unsigned integer

## Hierarchy

* [UInt](_packages_types_src_codec_uint_.uint.md)

  ↳ **U256**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_primitive_u256_.u256.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_primitive_u256_.u256.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_primitive_u256_.u256.md#endianness)
* [IPrimeName](_packages_types_src_primitive_u256_.u256.md#iprimename)

### Constructors

* [constructor](_packages_types_src_primitive_u256_.u256.md#constructor)

### Methods

* [with](_packages_types_src_primitive_u256_.u256.md#with)

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

\+ **new U256**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): [U256](_packages_types_src_primitive_u256_.u256.md)

*Inherited from [UInt](_packages_types_src_codec_uint_.uint.md).[constructor](_packages_types_src_codec_uint_.uint.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:18](https://github.com/polkadot-js/api/blob/f778bf32e/packages/types/src/codec/UInt.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** [U256](_packages_types_src_primitive_u256_.u256.md)

## Methods

### with

▸ `Static`**with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>

*Inherited from [UInt](_packages_types_src_codec_uint_.uint.md).[with](_packages_types_src_codec_uint_.uint.md#with)*

*Defined in [packages/types/src/codec/UInt.ts:23](https://github.com/polkadot-js/api/blob/f778bf32e/packages/types/src/codec/UInt.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>
