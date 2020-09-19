[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Tuple"](../modules/_packages_types_src_codec_tuple_.md) › [Tuple](_packages_types_src_codec_tuple_.tuple.md)

# Class: Tuple

**`name`** Tuple

**`description`** 
A Tuple defines an anonymous fixed-length array, where each element has its
own type. It extends the base JS `Array` object.

## Hierarchy

  ↳ [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md)‹[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)›

  ↳ **Tuple**

  ↳ [MortalEra](_packages_types_src_extrinsic_extrinsicera_.mortalera.md)

  ↳ [EventData](_packages_types_src_generic_event_.eventdata.md)

  ↳ [LinkageResult](_packages_types_src_codec_linkage_.linkageresult.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

**`name`** Tuple

**`description`** 
A Tuple defines an anonymous fixed-length array, where each element has its
own type. It extends the base JS `Array` object.

## Index

### Constructors

* [constructor](_packages_types_src_codec_tuple_.tuple.md#constructor)

### Properties

* [registry](_packages_types_src_codec_tuple_.tuple.md#readonly-registry)

### Accessors

* [Types](_packages_types_src_codec_tuple_.tuple.md#types)
* [encodedLength](_packages_types_src_codec_tuple_.tuple.md#encodedlength)
* [hash](_packages_types_src_codec_tuple_.tuple.md#hash)
* [isEmpty](_packages_types_src_codec_tuple_.tuple.md#isempty)
* [length](_packages_types_src_codec_tuple_.tuple.md#length)

### Methods

* [concat](_packages_types_src_codec_tuple_.tuple.md#concat)
* [eq](_packages_types_src_codec_tuple_.tuple.md#eq)
* [filter](_packages_types_src_codec_tuple_.tuple.md#filter)
* [includes](_packages_types_src_codec_tuple_.tuple.md#includes)
* [map](_packages_types_src_codec_tuple_.tuple.md#map)
* [toArray](_packages_types_src_codec_tuple_.tuple.md#toarray)
* [toHex](_packages_types_src_codec_tuple_.tuple.md#tohex)
* [toHuman](_packages_types_src_codec_tuple_.tuple.md#tohuman)
* [toJSON](_packages_types_src_codec_tuple_.tuple.md#tojson)
* [toRawType](_packages_types_src_codec_tuple_.tuple.md#torawtype)
* [toString](_packages_types_src_codec_tuple_.tuple.md#tostring)
* [toU8a](_packages_types_src_codec_tuple_.tuple.md#tou8a)
* [with](_packages_types_src_codec_tuple_.tuple.md#static-with)

## Constructors

###  constructor

\+ **new Tuple**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: TupleTypes, `value?`: AnyTuple): *[Tuple](_packages_types_src_codec_tuple_.tuple.md)*

*Overrides void*

*Defined in [packages/types/src/codec/Tuple.ts:55](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | TupleTypes |
`value?` | AnyTuple |

**Returns:** *[Tuple](_packages_types_src_codec_tuple_.tuple.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[registry](_packages_types_src_codec_abstractarray_.abstractarray.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:21](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L21)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Defined in [packages/types/src/codec/Tuple.ts:89](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L89)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[encodedLength](_packages_types_src_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [packages/types/src/codec/Tuple.ts:78](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L78)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[hash](_packages_types_src_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:41](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L41)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[isEmpty](_packages_types_src_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:48](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L48)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[length](_packages_types_src_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:55](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L55)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  concat

▸ **concat**(`other`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[concat](_packages_types_src_codec_abstractarray_.abstractarray.md#concat)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:140](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L140)*

**`description`** Concatenates two arrays

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[eq](_packages_types_src_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:63](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L63)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: unknown): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[filter](_packages_types_src_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:147](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L147)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: unknown): *boolean*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[includes](_packages_types_src_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:161](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L161)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | unknown |

**Returns:** *boolean*

___

###  map

▸ **map**‹**U**›(`callbackfn`: function, `thisArg?`: unknown): *U[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[map](_packages_types_src_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:154](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L154)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *unknown*

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toArray](_packages_types_src_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:70](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L70)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHex](_packages_types_src_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:77](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L77)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toHuman](_packages_types_src_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/codec/AbstractArray.ts:84](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L84)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toJSON](_packages_types_src_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/codec/AbstractArray.ts:93](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/AbstractArray.ts#L93)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toRawType](_packages_types_src_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:98](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L98)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toString](_packages_types_src_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:113](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L113)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [AbstractArray](_packages_types_src_codec_abstractarray_.abstractarray.md).[toU8a](_packages_types_src_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [packages/types/src/codec/Tuple.ts:122](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Tuple](_packages_types_src_codec_tuple_.tuple.md)›*

*Defined in [packages/types/src/codec/Tuple.ts:67](https://github.com/polkadot-js/api/blob/375dadbe3/packages/types/src/codec/Tuple.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Tuple](_packages_types_src_codec_tuple_.tuple.md)›*
