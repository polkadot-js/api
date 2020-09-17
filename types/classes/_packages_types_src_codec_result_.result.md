[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Result"](../modules/_packages_types_src_codec_result_.md) › [Result](_packages_types_src_codec_result_.result.md)

# Class: Result ‹**O, E**›

**`name`** Result

**`description`** 
A Result maps to the Rust Result type, that can either wrap a success or error value

## Type parameters

▪ **O**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **E**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

* [Enum](_packages_types_src_codec_enum_.enum.md)

  ↳ **Result**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_result_.result.md#constructor)

### Properties

* [registry](_packages_types_src_codec_result_.result.md#readonly-registry)

### Accessors

* [asError](_packages_types_src_codec_result_.result.md#aserror)
* [asOk](_packages_types_src_codec_result_.result.md#asok)
* [defEntries](_packages_types_src_codec_result_.result.md#defentries)
* [defKeys](_packages_types_src_codec_result_.result.md#defkeys)
* [encodedLength](_packages_types_src_codec_result_.result.md#encodedlength)
* [hash](_packages_types_src_codec_result_.result.md#hash)
* [index](_packages_types_src_codec_result_.result.md#index)
* [isBasic](_packages_types_src_codec_result_.result.md#isbasic)
* [isEmpty](_packages_types_src_codec_result_.result.md#isempty)
* [isError](_packages_types_src_codec_result_.result.md#iserror)
* [isNone](_packages_types_src_codec_result_.result.md#isnone)
* [isNull](_packages_types_src_codec_result_.result.md#isnull)
* [isOk](_packages_types_src_codec_result_.result.md#isok)
* [type](_packages_types_src_codec_result_.result.md#type)
* [value](_packages_types_src_codec_result_.result.md#value)

### Methods

* [eq](_packages_types_src_codec_result_.result.md#eq)
* [toHex](_packages_types_src_codec_result_.result.md#tohex)
* [toHuman](_packages_types_src_codec_result_.result.md#tohuman)
* [toJSON](_packages_types_src_codec_result_.result.md#tojson)
* [toNumber](_packages_types_src_codec_result_.result.md#tonumber)
* [toRawType](_packages_types_src_codec_result_.result.md#torawtype)
* [toString](_packages_types_src_codec_result_.result.md#tostring)
* [toU8a](_packages_types_src_codec_result_.result.md#tou8a)
* [with](_packages_types_src_codec_result_.result.md#static-with)

## Constructors

###  constructor

\+ **new Result**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Ok`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹O› | keyof InterfaceTypes, `Error`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹E› | keyof InterfaceTypes, `value?`: unknown): *[Result](_packages_types_src_codec_result_.result.md)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[constructor](_packages_types_src_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Result.ts:16](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Ok` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |
`Error` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹E› &#124; keyof InterfaceTypes |
`value?` | unknown |

**Returns:** *[Result](_packages_types_src_codec_result_.result.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[registry](_packages_types_src_codec_enum_.enum.md#readonly-registry)*

*Defined in [packages/types/src/codec/Enum.ts:119](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L119)*

## Accessors

###  asError

• **get asError**(): *E*

*Defined in [packages/types/src/codec/Result.ts:34](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L34)*

**`description`** Returns the wrapper Error value (if isError)

**Returns:** *E*

___

###  asOk

• **get asOk**(): *O*

*Defined in [packages/types/src/codec/Result.ts:43](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L43)*

**`description`** Returns the wrapper Ok value (if isOk)

**Returns:** *O*

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

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:182](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L182)*

**`description`** The length of the value when encoded as a Uint8Array

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

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)*

*Defined in [packages/types/src/codec/Result.ts:52](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L52)*

**`description`** Checks if the Result has no value

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [packages/types/src/codec/Result.ts:59](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L59)*

**`description`** Checks if the Result wraps an Error value

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

###  isOk

• **get isOk**(): *boolean*

*Defined in [packages/types/src/codec/Result.ts:66](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L66)*

**`description`** Checks if the Result wraps an Ok value

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

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Result.ts:73](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L73)*

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

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:340](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Enum.ts#L340)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**‹**O**, **E**›(`Types`: object): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Result](_packages_types_src_codec_result_.result.md)‹O, E››*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[with](_packages_types_src_codec_enum_.enum.md#static-with)*

*Defined in [packages/types/src/codec/Result.ts:23](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Result.ts#L23)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **E**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

**Parameters:**

▪ **Types**: *object*

Name | Type |
------ | ------ |
`Error` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹E› &#124; keyof InterfaceTypes |
`Ok` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Result](_packages_types_src_codec_result_.result.md)‹O, E››*
