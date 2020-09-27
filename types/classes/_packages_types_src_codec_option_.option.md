**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/Option"](../modules/_packages_types_src_codec_option_.md) / Option

# Class: Option\<**T**>

**`name`** Option

**`description`** 
An Option is an optional field. Basically the first byte indicates that there is
is value to follow. If the byte is `1` there is an actual value. So the Option
implements that - decodes, checks for optionality and wraps the required structure
with a value if/as required/found.

## Type parameters

* T

## Hierarchy

* **Option**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_codec_option_.option.md#constructor)

### Properties

* [registry](_packages_types_src_codec_option_.option.md#registry)

### Accessors

* [encodedLength](_packages_types_src_codec_option_.option.md#encodedlength)
* [hash](_packages_types_src_codec_option_.option.md#hash)
* [isEmpty](_packages_types_src_codec_option_.option.md#isempty)
* [isNone](_packages_types_src_codec_option_.option.md#isnone)
* [isSome](_packages_types_src_codec_option_.option.md#issome)
* [value](_packages_types_src_codec_option_.option.md#value)

### Methods

* [eq](_packages_types_src_codec_option_.option.md#eq)
* [toHex](_packages_types_src_codec_option_.option.md#tohex)
* [toHuman](_packages_types_src_codec_option_.option.md#tohuman)
* [toJSON](_packages_types_src_codec_option_.option.md#tojson)
* [toRawType](_packages_types_src_codec_option_.option.md#torawtype)
* [toString](_packages_types_src_codec_option_.option.md#tostring)
* [toU8a](_packages_types_src_codec_option_.option.md#tou8a)
* [unwrap](_packages_types_src_codec_option_.option.md#unwrap)
* [unwrapOr](_packages_types_src_codec_option_.option.md#unwrapor)
* [unwrapOrDefault](_packages_types_src_codec_option_.option.md#unwrapordefault)
* [with](_packages_types_src_codec_option_.option.md#with)

## Constructors

### constructor

\+ **new Option**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `typeName`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `value?`: unknown): [Option](_packages_types_src_codec_option_.option.md)

*Defined in [packages/types/src/codec/Option.ts:56](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L56)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`typeName` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |
`value?` | unknown |

**Returns:** [Option](_packages_types_src_codec_option_.option.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/codec/Option.ts:52](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L52)*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/codec/Option.ts:75](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L75)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/codec/Option.ts:83](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L83)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/codec/Option.ts:90](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L90)*

**`description`** Checks if the Option has no value

**Returns:** boolean

___

### isNone

• get **isNone**(): boolean

*Defined in [packages/types/src/codec/Option.ts:97](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L97)*

**`description`** Checks if the Option has no value

**Returns:** boolean

___

### isSome

• get **isSome**(): boolean

*Defined in [packages/types/src/codec/Option.ts:104](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L104)*

**`description`** Checks if the Option has a value

**Returns:** boolean

___

### value

• get **value**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Defined in [packages/types/src/codec/Option.ts:111](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L111)*

**`description`** The actual value for the Option

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Option.ts:118](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L118)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(): string

*Defined in [packages/types/src/codec/Option.ts:129](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L129)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Option.ts:140](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L140)*

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

*Defined in [packages/types/src/codec/Option.ts:147](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L147)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(`isBare?`: undefined \| false \| true): string

*Defined in [packages/types/src/codec/Option.ts:154](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L154)*

**`description`** Returns the base runtime type name for this instance

#### Parameters:

Name | Type |
------ | ------ |
`isBare?` | undefined \| false \| true |

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Option.ts:165](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L165)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/Option.ts:173](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L173)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### unwrap

▸ **unwrap**(): T

*Defined in [packages/types/src/codec/Option.ts:191](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L191)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** T

___

### unwrapOr

▸ **unwrapOr**\<O>(`defaultValue`: O): T \| O

*Defined in [packages/types/src/codec/Option.ts:203](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L203)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

#### Type parameters:

Name |
------ |
`O` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | O | The value to return if the option isNone  |

**Returns:** T \| O

___

### unwrapOrDefault

▸ **unwrapOrDefault**(): T

*Defined in [packages/types/src/codec/Option.ts:213](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L213)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Returns:** T

___

### with

▸ `Static`**with**\<O>(`Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Option](_packages_types_src_codec_option_.option.md)\<O>>

*Defined in [packages/types/src/codec/Option.ts:64](https://github.com/polkadot-js/api/blob/8631f68ba/packages/types/src/codec/Option.ts#L64)*

#### Type parameters:

Name | Type |
------ | ------ |
`O` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) |

#### Parameters:

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<O> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Option](_packages_types_src_codec_option_.option.md)\<O>>
