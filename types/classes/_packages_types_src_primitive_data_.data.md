**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/primitive/Data"](../modules/_packages_types_src_primitive_data_.md) / Data

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

* [registry](_packages_types_src_primitive_data_.data.md#registry)

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
* [with](_packages_types_src_primitive_data_.data.md#with)

## Constructors

### constructor

\+ **new Data**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: Record\<string, any> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| [Enum](_packages_types_src_codec_enum_.enum.md) \| string): [Data](_packages_types_src_primitive_data_.data.md)

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[constructor](_packages_types_src_codec_enum_.enum.md#constructor)*

*Defined in [packages/types/src/primitive/Data.ts:54](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L54)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | Record\<string, any> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| [Enum](_packages_types_src_codec_enum_.enum.md) \| string |

**Returns:** [Data](_packages_types_src_primitive_data_.data.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[registry](_packages_types_src_codec_enum_.enum.md#registry)*

*Defined in [packages/types/src/codec/Enum.ts:118](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L118)*

## Accessors

### asRaw

• get **asRaw**(): [Bytes](_packages_types_src_primitive_bytes_.bytes.md)

*Defined in [packages/types/src/primitive/Data.ts:68](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L68)*

**Returns:** [Bytes](_packages_types_src_primitive_bytes_.bytes.md)

___

### asSha256

• get **asSha256**(): H256

*Defined in [packages/types/src/primitive/Data.ts:72](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L72)*

**Returns:** H256

___

### defEntries

• get **defEntries**(): string[]

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defEntries](_packages_types_src_codec_enum_.enum.md#defentries)*

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L230)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### defKeys

• get **defKeys**(): string[]

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[defKeys](_packages_types_src_codec_enum_.enum.md#defkeys)*

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L237)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)*

*Defined in [packages/types/src/primitive/Data.ts:87](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L87)*

**`description`** The encoded length

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[hash](_packages_types_src_codec_enum_.enum.md#hash)*

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L188)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### index

• get **index**(): number

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[index](_packages_types_src_codec_enum_.enum.md#index)*

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L195)*

**`description`** The index of the metadata value

**Returns:** number

___

### isBasic

• get **isBasic**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isBasic](_packages_types_src_codec_enum_.enum.md#isbasic)*

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L202)*

**`description`** true if this is a basic enum (no values)

**Returns:** boolean

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)*

*Defined in [packages/types/src/codec/Enum.ts:209](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L209)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### isNone

• get **isNone**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNone](_packages_types_src_codec_enum_.enum.md#isnone)*

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L216)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type

**Returns:** boolean

___

### isNull

• get **isNull**(): boolean

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[isNull](_packages_types_src_codec_enum_.enum.md#isnull)*

*Defined in [packages/types/src/codec/Enum.ts:223](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L223)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** boolean

___

### isRaw

• get **isRaw**(): boolean

*Defined in [packages/types/src/primitive/Data.ts:76](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L76)*

**Returns:** boolean

___

### isSha256

• get **isSha256**(): boolean

*Defined in [packages/types/src/primitive/Data.ts:80](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L80)*

**Returns:** boolean

___

### type

• get **type**(): string

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[type](_packages_types_src_codec_enum_.enum.md#type)*

*Defined in [packages/types/src/codec/Enum.ts:244](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L244)*

**`description`** The name of the type this enum value represents

**Returns:** string

___

### value

• get **value**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[value](_packages_types_src_codec_enum_.enum.md#value)*

*Defined in [packages/types/src/codec/Enum.ts:251](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L251)*

**`description`** The value of the enum

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[eq](_packages_types_src_codec_enum_.enum.md#eq)*

*Defined in [packages/types/src/codec/Enum.ts:258](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L258)*

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

*Defined in [packages/types/src/codec/Enum.ts:281](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L281)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toHuman](_packages_types_src_codec_enum_.enum.md#tohuman)*

*Defined in [packages/types/src/codec/Enum.ts:288](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L288)*

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

*Defined in [packages/types/src/codec/Enum.ts:297](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L297)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toNumber

▸ **toNumber**(): number

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toNumber](_packages_types_src_codec_enum_.enum.md#tonumber)*

*Defined in [packages/types/src/codec/Enum.ts:306](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L306)*

**`description`** Returns the number representation for the value

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)*

*Defined in [packages/types/src/codec/Enum.ts:322](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L322)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[toString](_packages_types_src_codec_enum_.enum.md#tostring)*

*Defined in [packages/types/src/codec/Enum.ts:329](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L329)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Overrides [Enum](_packages_types_src_codec_enum_.enum.md).[toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)*

*Defined in [packages/types/src/primitive/Data.ts:94](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/primitive/Data.ts#L94)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**(`Types`: Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[]): [EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)\<[Enum](_packages_types_src_codec_enum_.enum.md)>

*Inherited from [Enum](_packages_types_src_codec_enum_.enum.md).[with](_packages_types_src_codec_enum_.enum.md#with)*

*Defined in [packages/types/src/codec/Enum.ts:142](https://github.com/polkadot-js/api/blob/d13e58fb3/packages/types/src/codec/Enum.ts#L142)*

#### Parameters:

Name | Type |
------ | ------ |
`Types` | Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[] |

**Returns:** [EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)\<[Enum](_packages_types_src_codec_enum_.enum.md)>
