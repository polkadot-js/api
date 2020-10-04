**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/codec/Result"](../modules/_packages_types_src_codec_result_.md) / Result

# Class: Result\<**O, E**>

**`name`** Result

**`description`** 
A Result maps to the Rust Result type, that can either wrap a success or error value

## Type parameters

Name | Type |
------ | ------ |
`O` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`E` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

## Hierarchy

* [Enum](_packages_types_src_codec_enum_.enum.md)

  ↳ **Result**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_result_.result.md#constructor)

### Properties

* [registry](_packages_types_src_codec_result_.result.md#registry)

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
* [with](_packages_types_src_codec_result_.result.md#with)

## Constructors

### constructor

\+ **new Result**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Ok`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `Error`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<E> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `value?`: unknown): [Result](_packages_types_src_codec_result_.result.md)

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[constructor](_packages_types_src_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/codec/Result.ts:15](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Ok` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`Error` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<E> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`value?` | unknown |

**Returns:** [Result](_packages_types_src_codec_result_.result.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[registry](_packages_types_src_codec_enum_.enum.md#registry)*

*Defined in [packages/types/src/codec/Enum.ts:118](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L118)*

## Accessors

### asError

• get **asError**(): E

*Defined in [packages/types/src/codec/Result.ts:33](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L33)*

**`description`** Returns the wrapper Error value (if isError)

**Returns:** E

___

### asOk

• get **asOk**(): O

*Defined in [packages/types/src/codec/Result.ts:42](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L42)*

**`description`** Returns the wrapper Ok value (if isOk)

**Returns:** O

___

### defEntries

• get **defEntries**(): string[]

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defEntries](_packages_types_src_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L230)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### defKeys

• get **defKeys**(): string[]

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defKeys](_packages_types_src_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L237)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/codec/Enum.ts:181](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[hash](_packages_types_src_codec_enum_.enum.md#hash)*

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L188)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### index

• get **index**(): number

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[index](_packages_types_src_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L195)*

**`description`** The index of the metadata value

**Returns:** number

___

### isBasic

• get **isBasic**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isBasic](_packages_types_src_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L202)*

**`description`** true if this is a basic enum (no values)

**Returns:** boolean

___

### isEmpty

• get **isEmpty**(): boolean

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)*

*Defined in [packages/types/src/codec/Result.ts:51](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L51)*

**`description`** Checks if the Result has no value

**Returns:** boolean

___

### isError

• get **isError**(): boolean

*Defined in [packages/types/src/codec/Result.ts:58](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L58)*

**`description`** Checks if the Result wraps an Error value

**Returns:** boolean

___

### isNone

• get **isNone**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNone](_packages_types_src_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L216)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type

**Returns:** boolean

___

### isNull

• get **isNull**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNull](_packages_types_src_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:223](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L223)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** boolean

___

### isOk

• get **isOk**(): boolean

*Defined in [packages/types/src/codec/Result.ts:65](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L65)*

**`description`** Checks if the Result wraps an Ok value

**Returns:** boolean

___

### type

• get **type**(): string

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[type](_packages_types_src_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:244](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L244)*

**`description`** The name of the type this enum value represents

**Returns:** string

___

### value

• get **value**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[value](_packages_types_src_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:251](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L251)*

**`description`** The value of the enum

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[eq](_packages_types_src_codec_enum_.enum.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:258](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L258)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(): string

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHex](_packages_types_src_codec_enum_.enum.md#tohex)*

*Defined in [packages/types/src/codec/Enum.ts:281](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L281)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHuman](_packages_types_src_codec_enum_.enum.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:288](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L288)*

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

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toJSON](_packages_types_src_codec_enum_.enum.md#tojson)*

*Defined in [packages/types/src/codec/Enum.ts:297](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L297)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toNumber

▸ **toNumber**(): number

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toNumber](_packages_types_src_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:306](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L306)*

**`description`** Returns the number representation for the value

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Result.ts:72](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L72)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toString](_packages_types_src_codec_enum_.enum.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:329](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L329)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/codec/Enum.ts:339](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L339)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**\<O, E>(`Types`: { Error: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<E> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) ; Ok: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)  }): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Result](_packages_types_src_codec_result_.result.md)\<O, E>>

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[with](_packages_types_src_codec_enum_.enum.md#with)*

*Defined in [packages/types/src/codec/Result.ts:22](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Result.ts#L22)*

#### Type parameters:

Name | Type |
------ | ------ |
`O` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |
`E` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

#### Parameters:

Name | Type |
------ | ------ |
`Types` | { Error: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<E> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) ; Ok: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)  } |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Result](_packages_types_src_codec_result_.result.md)\<O, E>>
