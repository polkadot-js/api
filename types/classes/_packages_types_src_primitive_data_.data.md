[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/primitive/Data"](../modules/_packages_types_src_primitive_data_.md) › [Data](_packages_types_src_primitive_data_.data.md)

# Class: Data

**`name`** Data

**`description`** 
A [Data](_packages_types_src_primitive_data_.data.md) container with node, raw or hashed data

## Hierarchy

* [Enum](_packages_types_src_codec_enum_.enum.md)

  ↳ **Data**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_primitive_data_.data.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_data_.data.md#readonly-registry)

### Accessors

* [asRaw](_packages_types_src_primitive_data_.data.md#asraw)
* [asSha256](_packages_types_src_primitive_data_.data.md#assha256)
* [defEntries](_packages_types_src_primitive_data_.data.md#defentries)
* [defKeys](_packages_types_src_primitive_data_.data.md#defkeys)
* [encodedLength](_packages_types_src_primitive_data_.data.md#encodedlength)
* [hash](_packages_types_src_primitive_data_.data.md#hash)
* [index](_packages_types_src_primitive_data_.data.md#index)
* [isBasic](_packages_types_src_primitive_data_.data.md#isbasic)
* [isEmpty](_packages_types_src_primitive_data_.data.md#isempty)
* [isNone](_packages_types_src_primitive_data_.data.md#isnone)
* [isNull](_packages_types_src_primitive_data_.data.md#isnull)
* [isRaw](_packages_types_src_primitive_data_.data.md#israw)
* [isSha256](_packages_types_src_primitive_data_.data.md#issha256)
* [type](_packages_types_src_primitive_data_.data.md#type)
* [value](_packages_types_src_primitive_data_.data.md#value)

### Methods

* [eq](_packages_types_src_primitive_data_.data.md#eq)
* [toHex](_packages_types_src_primitive_data_.data.md#tohex)
* [toHuman](_packages_types_src_primitive_data_.data.md#tohuman)
* [toJSON](_packages_types_src_primitive_data_.data.md#tojson)
* [toNumber](_packages_types_src_primitive_data_.data.md#tonumber)
* [toRawType](_packages_types_src_primitive_data_.data.md#torawtype)
* [toString](_packages_types_src_primitive_data_.data.md#tostring)
* [toU8a](_packages_types_src_primitive_data_.data.md#tou8a)
* [with](_packages_types_src_primitive_data_.data.md#static-with)

## Constructors

###  constructor

\+ **new Data**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: Record‹string, any› | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | [Enum](_packages_types_src_codec_enum_.enum.md) | string): *[Data](_packages_types_src_primitive_data_.data.md)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[constructor](_packages_types_src_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Data.ts:55](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | Record‹string, any› &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; [Enum](_packages_types_src_codec_enum_.enum.md) &#124; string |

**Returns:** *[Data](_packages_types_src_primitive_data_.data.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[registry](_packages_types_src_codec_enum_.enum.md#readonly-registry)*

*Defined in [packages/types/src/codec/Enum.ts:119](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L119)*

## Accessors

###  asRaw

• **get asRaw**(): *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/primitive/Data.ts:69](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L69)*

**Returns:** *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

___

###  asSha256

• **get asSha256**(): *H256*

*Defined in [packages/types/src/primitive/Data.ts:73](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L73)*

**Returns:** *H256*

___

###  defEntries

• **get defEntries**(): *string[]*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defEntries](_packages_types_src_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:231](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L231)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defKeys](_packages_types_src_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:238](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L238)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Data.ts:88](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L88)*

**`description`** The encoded length

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[hash](_packages_types_src_codec_enum_.enum.md#hash)*

*Defined in [packages/types/src/codec/Enum.ts:189](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L189)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  index

• **get index**(): *number*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[index](_packages_types_src_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:196](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L196)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isBasic

• **get isBasic**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isBasic](_packages_types_src_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:203](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L203)*

**`description`** true if this is a basic enum (no values)

**Returns:** *boolean*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)*

*Defined in [packages/types/src/codec/Enum.ts:210](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L210)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNone](_packages_types_src_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:217](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L217)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

• **get isNull**(): *boolean*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNull](_packages_types_src_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:224](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L224)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isRaw

• **get isRaw**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:77](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L77)*

**Returns:** *boolean*

___

###  isSha256

• **get isSha256**(): *boolean*

*Defined in [packages/types/src/primitive/Data.ts:81](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L81)*

**Returns:** *boolean*

___

###  type

• **get type**(): *string*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[type](_packages_types_src_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:245](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L245)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

• **get value**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[value](_packages_types_src_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:252](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L252)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[eq](_packages_types_src_codec_enum_.enum.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:259](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L259)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHex](_packages_types_src_codec_enum_.enum.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:282](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L282)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHuman](_packages_types_src_codec_enum_.enum.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:289](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L289)*

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

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toJSON](_packages_types_src_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:298](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L298)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toNumber](_packages_types_src_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:307](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L307)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:323](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L323)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toString](_packages_types_src_codec_enum_.enum.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:330](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L330)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Data.ts:95](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/primitive/Data.ts#L95)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: Record‹string, keyof InterfaceTypes | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› | string[]): *[EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)‹[Enum](_packages_types_src_codec_enum_.enum.md)›*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[with](_packages_types_src_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Enum.ts:143](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | Record‹string, keyof InterfaceTypes &#124; [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› &#124; string[] |

**Returns:** *[EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)‹[Enum](_packages_types_src_codec_enum_.enum.md)›*
