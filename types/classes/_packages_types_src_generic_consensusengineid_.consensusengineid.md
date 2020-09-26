**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/generic/ConsensusEngineId"](../modules/_packages_types_src_generic_consensusengineid_.md) / ConsensusEngineId

# Class: ConsensusEngineId

**`name`** ConsensusEngineId

**`description`** 
A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']

## Hierarchy

* [U32](_packages_types_src_primitive_u32_.u32.md)

  ↳ **ConsensusEngineId**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Interfaces

* [MPrime](../interfaces/_packages_types_src_generic_consensusengineid_.consensusengineid.mprime.md)
* [ReductionContext](../interfaces/_packages_types_src_generic_consensusengineid_.consensusengineid.reductioncontext.md)

### Type aliases

* [Endianness](_packages_types_src_generic_consensusengineid_.consensusengineid.md#endianness)
* [IPrimeName](_packages_types_src_generic_consensusengineid_.consensusengineid.md#iprimename)

### Constructors

* [constructor](_packages_types_src_generic_consensusengineid_.consensusengineid.md#constructor)

### Accessors

* [isAura](_packages_types_src_generic_consensusengineid_.consensusengineid.md#isaura)
* [isBabe](_packages_types_src_generic_consensusengineid_.consensusengineid.md#isbabe)
* [isGrandpa](_packages_types_src_generic_consensusengineid_.consensusengineid.md#isgrandpa)
* [isPow](_packages_types_src_generic_consensusengineid_.consensusengineid.md#ispow)

### Methods

* [extractAuthor](_packages_types_src_generic_consensusengineid_.consensusengineid.md#extractauthor)
* [toString](_packages_types_src_generic_consensusengineid_.consensusengineid.md#tostring)
* [idToString](_packages_types_src_generic_consensusengineid_.consensusengineid.md#idtostring)
* [stringToId](_packages_types_src_generic_consensusengineid_.consensusengineid.md#stringtoid)
* [with](_packages_types_src_generic_consensusengineid_.consensusengineid.md#with)

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

\+ **new ConsensusEngineId**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `isHexJson`: boolean): [ConsensusEngineId](_packages_types_src_generic_consensusengineid_.consensusengineid.md)

*Inherited from [UInt](_packages_types_src_codec_uint_.uint.md).[constructor](_packages_types_src_codec_uint_.uint.md#constructor)*

*Overrides void*

*Defined in [packages/types/src/codec/UInt.ts:18](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/codec/UInt.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_UINT_BITS |
`isHexJson` | boolean | false |

**Returns:** [ConsensusEngineId](_packages_types_src_generic_consensusengineid_.consensusengineid.md)

## Accessors

### isAura

• get **isAura**(): boolean

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:44](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L44)*

**`description`** `true` if the engine matches aura

**Returns:** boolean

___

### isBabe

• get **isBabe**(): boolean

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:51](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L51)*

**`description`** `true` is the engine matches babe

**Returns:** boolean

___

### isGrandpa

• get **isGrandpa**(): boolean

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:58](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L58)*

**`description`** `true` is the engine matches grandpa

**Returns:** boolean

___

### isPow

• get **isPow**(): boolean

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:65](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L65)*

**`description`** `true` is the engine matches pow

**Returns:** boolean

## Methods

### extractAuthor

▸ **extractAuthor**(`bytes`: [Bytes](_packages_types_src_primitive_bytes_.bytes.md), `sessionValidators`: AccountId[]): AccountId \| undefined

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:93](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L93)*

**`description`** From the input bytes, decode into an author

#### Parameters:

Name | Type |
------ | ------ |
`bytes` | [Bytes](_packages_types_src_primitive_bytes_.bytes.md) |
`sessionValidators` | AccountId[] |

**Returns:** AccountId \| undefined

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:112](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L112)*

**`description`** Override the default toString to return a 4-byte string

**Returns:** string

___

### idToString

▸ `Static`**idToString**(`input`: number \| BN): string

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:27](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | number \| BN |

**Returns:** string

___

### stringToId

▸ `Static`**stringToId**(`input`: string): number

*Defined in [packages/types/src/generic/ConsensusEngineId.ts:34](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/generic/ConsensusEngineId.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | string |

**Returns:** number

___

### with

▸ `Static`**with**(`bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength), `typeName?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>

*Inherited from [UInt](_packages_types_src_codec_uint_.uint.md).[with](_packages_types_src_codec_uint_.uint.md#with)*

*Defined in [packages/types/src/codec/UInt.ts:23](https://github.com/polkadot-js/api/blob/c27e41be3/packages/types/src/codec/UInt.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) |
`typeName?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[UInt](_packages_types_src_codec_uint_.uint.md)>
