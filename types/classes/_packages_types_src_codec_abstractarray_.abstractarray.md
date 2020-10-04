**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/codec/AbstractArray"](../modules/_packages_types_src_codec_abstractarray_.md) / AbstractArray

# Class: AbstractArray\<**T**>

**`name`** AbstractArray

**`description`** 
This manages codec arrays. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Type parameters

Name | Type |
------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

## Hierarchy

* [Array](_packages_types_src_codec_abstractarray_.abstractarray.md#array)\<T>

  ↳ **AbstractArray**

  ↳↳ [Tuple](_packages_types_src_codec_tuple_.tuple.md)

  ↳↳ [Vec](_packages_types_src_codec_vec_.vec.md)

  ↳↳ [VecFixed](_packages_types_src_codec_vecfixed_.vecfixed.md)

  ↳↳ [VecAny](_packages_types_src_codec_vecany_.vecany.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

▪ [n: number]: T

**`name`** AbstractArray

**`description`** 
This manages codec arrays. It is an extension to Array, providing
specific encoding/decoding on top of the base type.

## Index

### Properties

* [registry](_packages_types_src_codec_abstractarray_.abstractarray.md#registry)
* [Array](_packages_types_src_codec_abstractarray_.abstractarray.md#array)

### Accessors

* [encodedLength](_packages_types_src_codec_abstractarray_.abstractarray.md#encodedlength)
* [hash](_packages_types_src_codec_abstractarray_.abstractarray.md#hash)
* [isEmpty](_packages_types_src_codec_abstractarray_.abstractarray.md#isempty)
* [length](_packages_types_src_codec_abstractarray_.abstractarray.md#length)

### Methods

* [concat](_packages_types_src_codec_abstractarray_.abstractarray.md#concat)
* [eq](_packages_types_src_codec_abstractarray_.abstractarray.md#eq)
* [filter](_packages_types_src_codec_abstractarray_.abstractarray.md#filter)
* [includes](_packages_types_src_codec_abstractarray_.abstractarray.md#includes)
* [map](_packages_types_src_codec_abstractarray_.abstractarray.md#map)
* [toArray](_packages_types_src_codec_abstractarray_.abstractarray.md#toarray)
* [toHex](_packages_types_src_codec_abstractarray_.abstractarray.md#tohex)
* [toHuman](_packages_types_src_codec_abstractarray_.abstractarray.md#tohuman)
* [toJSON](_packages_types_src_codec_abstractarray_.abstractarray.md#tojson)
* [toRawType](_packages_types_src_codec_abstractarray_.abstractarray.md#torawtype)
* [toString](_packages_types_src_codec_abstractarray_.abstractarray.md#tostring)
* [toU8a](_packages_types_src_codec_abstractarray_.abstractarray.md#tou8a)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:21](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L21)*

___

### Array

▪ `Static` **Array**: ArrayConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:1403*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/codec/AbstractArray.ts:32](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L32)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### length

• get **length**(): number

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:55](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L55)*

**`description`** The length of the value

**Returns:** number

## Methods

### concat

▸ **concat**(`other`: T[]): T[]

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:140](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L140)*

**`description`** Concatenates two arrays

#### Parameters:

Name | Type |
------ | ------ |
`other` | T[] |

**Returns:** T[]

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### filter

▸ **filter**(`callbackfn`: (value: T,index: number,array: T[]) => boolean, `thisArg?`: unknown): T[]

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:147](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L147)*

**`description`** Filters the array with the callback

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: T,index: number,array: T[]) => boolean |
`thisArg?` | unknown |

**Returns:** T[]

___

### includes

▸ **includes**(`check`: unknown): boolean

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:161](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L161)*

**`description`** Checks if the array includes a specific value

#### Parameters:

Name | Type |
------ | ------ |
`check` | unknown |

**Returns:** boolean

___

### map

▸ **map**\<U>(`callbackfn`: (value: T,index: number,array: T[]) => U, `thisArg?`: unknown): U[]

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:154](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L154)*

**`description`** Maps the array with the callback

#### Type parameters:

Name |
------ |
`U` |

#### Parameters:

Name | Type |
------ | ------ |
`callbackfn` | (value: T,index: number,array: T[]) => U |
`thisArg?` | unknown |

**Returns:** U[]

___

### toArray

▸ **toArray**(): T[]

*Defined in [packages/types/src/codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** T[]

___

### toHex

▸ **toHex**(): string

*Defined in [packages/types/src/codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:84](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L84)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:93](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L93)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ `Abstract`**toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/AbstractArray.ts:102](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L102)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:107](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L107)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/AbstractArray.ts:120](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/AbstractArray.ts#L120)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)
