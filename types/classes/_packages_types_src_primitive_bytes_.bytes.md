[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/Bytes"](../modules/_packages_types_src_primitive_bytes_.md) › [Bytes](_packages_types_src_primitive_bytes_.bytes.md)

# Class: Bytes

**`name`** Bytes

**`description`** 
A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
as what is found in [Text](_packages_types_src_primitive_text_.text.md) and [Vec](_packages_types_src_codec_vec_.vec.md))

## Hierarchy

  ↳ [Raw](_packages_types_src_codec_raw_.raw.md)

  ↳ **Bytes**

  ↳ [StorageKey](_packages_types_src_primitive_storagekey_.storagekey.md)

## Implements

* [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)

## Indexable

* \[ **index**: *number*\]: number

**`name`** Bytes

**`description`** 
A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
as what is found in [Text](_packages_types_src_primitive_text_.text.md) and [Vec](_packages_types_src_codec_vec_.vec.md))

## Index

### Constructors

* [constructor](_packages_types_src_primitive_bytes_.bytes.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_bytes_.bytes.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_primitive_bytes_.bytes.md#encodedlength)
* [hash](_packages_types_src_primitive_bytes_.bytes.md#hash)
* [isAscii](_packages_types_src_primitive_bytes_.bytes.md#isascii)
* [isEmpty](_packages_types_src_primitive_bytes_.bytes.md#isempty)
* [isUtf8](_packages_types_src_primitive_bytes_.bytes.md#isutf8)
* [length](_packages_types_src_primitive_bytes_.bytes.md#length)

### Methods

* [bitLength](_packages_types_src_primitive_bytes_.bytes.md#bitlength)
* [eq](_packages_types_src_primitive_bytes_.bytes.md#eq)
* [subarray](_packages_types_src_primitive_bytes_.bytes.md#subarray)
* [toHex](_packages_types_src_primitive_bytes_.bytes.md#tohex)
* [toHuman](_packages_types_src_primitive_bytes_.bytes.md#tohuman)
* [toJSON](_packages_types_src_primitive_bytes_.bytes.md#tojson)
* [toRawType](_packages_types_src_primitive_bytes_.bytes.md#torawtype)
* [toString](_packages_types_src_primitive_bytes_.bytes.md#tostring)
* [toU8a](_packages_types_src_primitive_bytes_.bytes.md#tou8a)
* [toUtf8](_packages_types_src_primitive_bytes_.bytes.md#toutf8)

## Constructors

###  constructor

\+ **new Bytes**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a)): *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[constructor](_packages_types_src_codec_raw_.raw.md#constructor)*

*Defined in [packages/types/src/primitive/Bytes.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) |

**Returns:** *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[registry](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#readonly-registry)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[registry](_packages_types_src_codec_raw_.raw.md#readonly-registry)*

*Defined in [packages/types/src/codec/Raw.ts:29](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L29)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[encodedLength](_packages_types_src_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/primitive/Bytes.ts:55](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L55)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[hash](_packages_types_src_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L47)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isAscii

• **get isAscii**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isAscii](_packages_types_src_codec_raw_.raw.md#isascii)*

*Defined in [packages/types/src/codec/Raw.ts:54](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L54)*

**`description`** Returns true if the wrapped value contains only ASCII printable characters

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isEmpty](_packages_types_src_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:61](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L61)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** *boolean*

___

###  isUtf8

• **get isUtf8**(): *boolean*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isUtf8](_packages_types_src_codec_raw_.raw.md#isutf8)*

*Defined in [packages/types/src/codec/Raw.ts:68](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L68)*

**`description`** Returns true if the wrapped value contains only utf8 characters

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[length](_packages_types_src_codec_raw_.raw.md#length)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[length](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#readonly-length)*

*Defined in [packages/types/src/codec/Raw.ts:75](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L75)*

**`description`** The length of the value

**Returns:** *number*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[bitLength](_packages_types_src_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:83](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L83)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[eq](_packages_types_src_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:90](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L90)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  subarray

▸ **subarray**(`begin`: number, `end?`: undefined | number): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[subarray](_packages_types_src_codec_raw_.raw.md#subarray)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[subarray](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:104](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L104)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined &#124; number | The position to end at  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toHex](_packages_types_src_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:111](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L111)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toHuman](_packages_types_src_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/codec/Raw.ts:118](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L118)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toJSON](_packages_types_src_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:127](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L127)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[toRawType](_packages_types_src_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/primitive/Bytes.ts:62](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L62)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toString](_packages_types_src_codec_raw_.raw.md#tostring)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[toString](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:141](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L141)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[toU8a](_packages_types_src_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/primitive/Bytes.ts:70](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Bytes.ts#L70)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  toUtf8

▸ **toUtf8**(): *string*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toUtf8](_packages_types_src_codec_raw_.raw.md#toutf8)*

*Defined in [packages/types/src/codec/Raw.ts:157](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Raw.ts#L157)*

**`description`** Returns the wrapped data as a UTF-8 string

**Returns:** *string*
