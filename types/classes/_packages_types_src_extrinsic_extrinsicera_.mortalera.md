**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/ExtrinsicEra"](../modules/_packages_types_src_extrinsic_extrinsicera_.md) / MortalEra

# Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

* [Tuple](_packages_types_src_codec_tuple_.tuple.md)

  ↳ **MortalEra**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

▪ [n: number]: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#registry)

### Accessors

* [Types](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#types)
* [encodedLength](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#encodedlength)
* [hash](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#hash)
* [isEmpty](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#isempty)
* [length](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#length)
* [period](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#period)
* [phase](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#phase)

### Methods

* [birth](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#birth)
* [concat](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#concat)
* [death](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#death)
* [eq](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#eq)
* [filter](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#filter)
* [includes](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#includes)
* [map](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#map)
* [toArray](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#toarray)
* [toHex](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#tohex)
* [toHuman](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#tojson)
* [toRawType](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#torawtype)
* [toString](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#tostring)
* [toU8a](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#tou8a)
* [with](_packages_types_src_extrinsic_extrinsicera_.mortalera.md#with)

## Constructors

### constructor

\+ **new MortalEra**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: MortalMethod \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| number[] \| string): [MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)

*Overrides [Tuple](_packages_types_src_codec_tuple_.tuple.md).[constructor](_packages_types_src_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:60](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L60)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | MortalMethod \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| number[] \| string |

**Returns:** [MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[registry](_packages_types_src_codec_abstractarray_.abstractarray.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:21](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L21)*

## Accessors

### Types

• get **Types**(): string[]

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[Types](_packages_types_src_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:89](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Tuple.ts#L89)*

**`description`** The types definition of the tuple

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Overrides [Tuple](_packages_types_src_codec_tuple_.tuple.md).[encodedLength](_packages_types_src_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:120](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L120)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[hash](_packages_types_src_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[isEmpty](_packages_types_src_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### length

• get **length**(): number

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[length](_packages_types_src_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:55](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L55)*

**`description`** The length of the value

**Returns:** number

___

### period

• get **period**(): [U64](_packages_types_src_primitive_u64_.u64.md)

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:127](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L127)*

**`description`** The period of this Mortal wraps as a [U64](_packages_types_src_primitive_u64_.u64.md)

**Returns:** [U64](_packages_types_src_primitive_u64_.u64.md)

___

### phase

• get **phase**(): [U64](_packages_types_src_primitive_u64_.u64.md)

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:134](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L134)*

**`description`** The phase of this Mortal wraps as a [U64](_packages_types_src_primitive_u64_.u64.md)

**Returns:** [U64](_packages_types_src_primitive_u64_.u64.md)

## Methods

### birth

▸ **birth**(`current`: BN \| number): number

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:181](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L181)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

#### Parameters:

Name | Type |
------ | ------ |
`current` | BN \| number |

**Returns:** number

___

### concat

▸ **concat**(`other`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[concat](_packages_types_src_codec_abstractarray_.abstractarray.md#concat)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:140](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L140)*

**`description`** Concatenates two arrays

#### Parameters:

Name | Type |
------ | ------ |
`other` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

___

### death

▸ **death**(`current`: BN \| number): number

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:193](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L193)*

**`description`** Get the block number of the first block at which the era has ended.

#### Parameters:

Name | Type |
------ | ------ |
`current` | BN \| number |

**Returns:** number

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[eq](_packages_types_src_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### filter

▸ **filter**(`callbackfn`: (value: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md),index: number,array: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]) => boolean, `thisArg?`: unknown): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[filter](_packages_types_src_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:147](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L147)*

**`description`** Filters the array with the callback

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md),index: number,array: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]) => boolean |
`thisArg?` | unknown |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

___

### includes

▸ **includes**(`check`: unknown): boolean

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[includes](_packages_types_src_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:161](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L161)*

**`description`** Checks if the array includes a specific value

#### Parameters:

Name | Type |
------ | ------ |
`check` | unknown |

**Returns:** boolean

___

### map

▸ **map**\<U>(`callbackfn`: (value: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md),index: number,array: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]) => U, `thisArg?`: unknown): U[]

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[map](_packages_types_src_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:154](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L154)*

**`description`** Maps the array with the callback

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md),index: number,array: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]) => U |
`thisArg?` | unknown |

**Returns:** U[]

___

### toArray

▸ **toArray**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toArray](_packages_types_src_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

___

### toHex

▸ **toHex**(): string

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHex](_packages_types_src_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(): any

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHuman](_packages_types_src_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:141](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L141)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** any

___

### toJSON

▸ **toJSON**(): any

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toJSON](_packages_types_src_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:151](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L151)*

**`description`** Returns a JSON representation of the actual value

**Returns:** any

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toRawType](_packages_types_src_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toRawType](_packages_types_src_codec_abstractarray_.abstractarray.md#torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:98](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Tuple.ts#L98)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toString](_packages_types_src_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toString](_packages_types_src_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:113](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Tuple.ts#L113)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Overrides [Tuple](_packages_types_src_codec_tuple_.tuple.md).[toU8a](_packages_types_src_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:166](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/ExtrinsicEra.ts#L166)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**(`Types`: TupleTypes): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Tuple](_packages_types_src_codec_tuple_.tuple.md)>

*Inherited from [Tuple](_packages_types_src_codec_tuple_.tuple.md).[with](_packages_types_src_codec_tuple_.tuple.md#with)*

*Defined in [packages/types/src/codec/Tuple.ts:67](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Tuple.ts#L67)*

#### Parameters:

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Tuple](_packages_types_src_codec_tuple_.tuple.md)>
