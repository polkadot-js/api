**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/codec/Enum"](../modules/_packages_types_src_codec_enum_.md) / Enum

# Class: Enum

**`name`** Enum

**`description`** 
This implements an enum, that based on the value wraps a different type. It is effectively
an extension to enum where the value type is determined by the actual index.

## Hierarchy

* **Enum**

  ↳ [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

  ↳ [Result](_packages_types_src_codec_result_.result.md)

  ↳ [Data](_packages_types_src_primitive_data_.data.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_enum_.enum.md#constructor)

### Properties

* [registry](_packages_types_src_codec_enum_.enum.md#registry)

### Accessors

* [defEntries](_packages_types_src_codec_enum_.enum.md#defentries)
* [defKeys](_packages_types_src_codec_enum_.enum.md#defkeys)
* [encodedLength](_packages_types_src_codec_enum_.enum.md#encodedlength)
* [hash](_packages_types_src_codec_enum_.enum.md#hash)
* [index](_packages_types_src_codec_enum_.enum.md#index)
* [isBasic](_packages_types_src_codec_enum_.enum.md#isbasic)
* [isEmpty](_packages_types_src_codec_enum_.enum.md#isempty)
* [isNone](_packages_types_src_codec_enum_.enum.md#isnone)
* [isNull](_packages_types_src_codec_enum_.enum.md#isnull)
* [type](_packages_types_src_codec_enum_.enum.md#type)
* [value](_packages_types_src_codec_enum_.enum.md#value)

### Methods

* [eq](_packages_types_src_codec_enum_.enum.md#eq)
* [toHex](_packages_types_src_codec_enum_.enum.md#tohex)
* [toHuman](_packages_types_src_codec_enum_.enum.md#tohuman)
* [toJSON](_packages_types_src_codec_enum_.enum.md#tojson)
* [toNumber](_packages_types_src_codec_enum_.enum.md#tonumber)
* [toRawType](_packages_types_src_codec_enum_.enum.md#torawtype)
* [toString](_packages_types_src_codec_enum_.enum.md#tostring)
* [toU8a](_packages_types_src_codec_enum_.enum.md#tou8a)
* [with](_packages_types_src_codec_enum_.enum.md#with)

## Constructors

### constructor

\+ **new Enum**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `def`: Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[], `value?`: unknown, `index?`: undefined \| number): [Enum](_packages_types_src_codec_enum_.enum.md)

*Defined in [packages/types/src/codec/Enum.ts:128](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L128)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`def` | Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[] |
`value?` | unknown |
`index?` | undefined \| number |

**Returns:** [Enum](_packages_types_src_codec_enum_.enum.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Enum.ts:118](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L118)*

## Accessors

### defEntries

• get **defEntries**(): string[]

*Defined in [packages/types/src/codec/Enum.ts:230](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L230)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### defKeys

• get **defKeys**(): string[]

*Defined in [packages/types/src/codec/Enum.ts:237](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L237)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/codec/Enum.ts:181](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/codec/Enum.ts:188](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L188)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### index

• get **index**(): number

*Defined in [packages/types/src/codec/Enum.ts:195](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L195)*

**`description`** The index of the metadata value

**Returns:** number

___

### isBasic

• get **isBasic**(): boolean

*Defined in [packages/types/src/codec/Enum.ts:202](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L202)*

**`description`** true if this is a basic enum (no values)

**Returns:** boolean

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/codec/Enum.ts:209](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L209)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### isNone

• get **isNone**(): boolean

*Defined in [packages/types/src/codec/Enum.ts:216](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L216)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type

**Returns:** boolean

___

### isNull

• get **isNull**(): boolean

*Defined in [packages/types/src/codec/Enum.ts:223](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L223)*

**`description`** Checks if the Enum points to a [Null](_packages_types_src_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** boolean

___

### type

• get **type**(): string

*Defined in [packages/types/src/codec/Enum.ts:244](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L244)*

**`description`** The name of the type this enum value represents

**Returns:** string

___

### value

• get **value**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Defined in [packages/types/src/codec/Enum.ts:251](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L251)*

**`description`** The value of the enum

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

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

*Defined in [packages/types/src/codec/Enum.ts:281](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L281)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

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

*Defined in [packages/types/src/codec/Enum.ts:297](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L297)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toNumber

▸ **toNumber**(): number

*Defined in [packages/types/src/codec/Enum.ts:306](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L306)*

**`description`** Returns the number representation for the value

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Enum.ts:322](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L322)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Enum.ts:329](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L329)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/Enum.ts:339](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L339)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**(`Types`: Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[]): [EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)\<[Enum](_packages_types_src_codec_enum_.enum.md)>

*Defined in [packages/types/src/codec/Enum.ts:142](https://github.com/polkadot-js/api/blob/95c4f03bc/packages/types/src/codec/Enum.ts#L142)*

#### Parameters:

Name | Type |
------ | ------ |
`Types` | Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) \| [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> \| string[] |

**Returns:** [EnumConstructor](../interfaces/_packages_types_src_codec_enum_.enumconstructor.md)\<[Enum](_packages_types_src_codec_enum_.enum.md)>
