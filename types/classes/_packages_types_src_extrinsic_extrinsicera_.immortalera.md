**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/ExtrinsicEra"](../modules/_packages_types_src_extrinsic_extrinsicera_.md) / ImmortalEra

# Class: ImmortalEra

**`name`** ImmortalEra

**`description`** 
The ImmortalEra for an extrinsic

## Hierarchy

* [Raw](_packages_types_src_codec_raw_.raw.md)

  ↳ **ImmortalEra**

## Implements

* [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)

## Indexable

▪ [index: number]: number

**`name`** ImmortalEra

**`description`** 
The ImmortalEra for an extrinsic

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#registry)

### Accessors

* [encodedLength](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#encodedlength)
* [hash](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#hash)
* [isAscii](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#isascii)
* [isEmpty](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#isempty)
* [isUtf8](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#isutf8)
* [length](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#length)

### Methods

* [bitLength](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#bitlength)
* [eq](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#eq)
* [subarray](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#subarray)
* [toHex](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#tohex)
* [toHuman](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#tojson)
* [toRawType](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#torawtype)
* [toString](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#tostring)
* [toU8a](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#tou8a)
* [toUtf8](_packages_types_src_extrinsic_extrinsicera_.immortalera.md#toutf8)

## Constructors

### constructor

\+ **new ImmortalEra**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a)): [ImmortalEra](_packages_types_src_extrinsic_extrinsicera_.immortalera.md)

*Overrides [Raw](_packages_types_src_codec_raw_.raw.md).[constructor](_packages_types_src_codec_raw_.raw.md#constructor)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:46](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/extrinsic/ExtrinsicEra.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) |

**Returns:** [ImmortalEra](_packages_types_src_extrinsic_extrinsicera_.immortalera.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[registry](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#registry)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[registry](_packages_types_src_codec_raw_.raw.md#registry)*

*Defined in [packages/types/src/codec/Raw.ts:28](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L28)*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[encodedLength](_packages_types_src_codec_raw_.raw.md#encodedlength)*

*Defined in [packages/types/src/codec/Raw.ts:39](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[hash](_packages_types_src_codec_raw_.raw.md#hash)*

*Defined in [packages/types/src/codec/Raw.ts:46](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isAscii

• get **isAscii**(): boolean

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isAscii](_packages_types_src_codec_raw_.raw.md#isascii)*

*Defined in [packages/types/src/codec/Raw.ts:53](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L53)*

**`description`** Returns true if the wrapped value contains only ASCII printable characters

**Returns:** boolean

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isEmpty](_packages_types_src_codec_raw_.raw.md#isempty)*

*Defined in [packages/types/src/codec/Raw.ts:60](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L60)*

**`description`** Returns true if the type wraps an empty/default all-0 value

**Returns:** boolean

___

### isUtf8

• get **isUtf8**(): boolean

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[isUtf8](_packages_types_src_codec_raw_.raw.md#isutf8)*

*Defined in [packages/types/src/codec/Raw.ts:67](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L67)*

**`description`** Returns true if the wrapped value contains only utf8 characters

**Returns:** boolean

___

### length

• get **length**(): number

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[length](_packages_types_src_codec_raw_.raw.md#length)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[length](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#length)*

*Defined in [packages/types/src/codec/Raw.ts:74](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L74)*

**`description`** The length of the value

**Returns:** number

## Methods

### bitLength

▸ **bitLength**(): number

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[bitLength](_packages_types_src_codec_raw_.raw.md#bitlength)*

*Defined in [packages/types/src/codec/Raw.ts:82](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L82)*

**`description`** Returns the number of bits in the value

**Returns:** number

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[eq](_packages_types_src_codec_raw_.raw.md#eq)*

*Defined in [packages/types/src/codec/Raw.ts:89](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L89)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### subarray

▸ **subarray**(`begin`: number, `end?`: undefined \| number): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[subarray](_packages_types_src_codec_raw_.raw.md#subarray)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[subarray](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#subarray)*

*Defined in [packages/types/src/codec/Raw.ts:103](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L103)*

**`description`** Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`begin` | number | The position to start at |
`end?` | undefined \| number | The position to end at  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### toHex

▸ **toHex**(): string

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toHex](_packages_types_src_codec_raw_.raw.md#tohex)*

*Defined in [packages/types/src/codec/Raw.ts:110](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L110)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toHuman](_packages_types_src_codec_raw_.raw.md#tohuman)*

*Defined in [packages/types/src/codec/Raw.ts:117](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L117)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): string

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toJSON](_packages_types_src_codec_raw_.raw.md#tojson)*

*Defined in [packages/types/src/codec/Raw.ts:126](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L126)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** string

___

### toRawType

▸ **toRawType**(): string

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toRawType](_packages_types_src_codec_raw_.raw.md#torawtype)*

*Defined in [packages/types/src/codec/Raw.ts:133](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L133)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md)*

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toString](_packages_types_src_codec_raw_.raw.md#tostring)*

*Overrides [IU8a](../interfaces/_packages_types_src_types_interfaces_.iu8a.md).[toString](../interfaces/_packages_types_src_types_interfaces_.iu8a.md#tostring)*

*Defined in [packages/types/src/codec/Raw.ts:140](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L140)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toU8a](_packages_types_src_codec_raw_.raw.md#tou8a)*

*Defined in [packages/types/src/codec/Raw.ts:149](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L149)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### toUtf8

▸ **toUtf8**(): string

*Inherited from [Raw](_packages_types_src_codec_raw_.raw.md).[toUtf8](_packages_types_src_codec_raw_.raw.md#toutf8)*

*Defined in [packages/types/src/codec/Raw.ts:156](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/codec/Raw.ts#L156)*

**`description`** Returns the wrapped data as a UTF-8 string

**Returns:** string
