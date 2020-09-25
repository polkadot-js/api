**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/primitive/Bool"](../modules/_packages_types_src_primitive_bool_.md) / Bool

# Class: Bool

**`name`** Bool

**`description`** 
Representation for a boolean value in the system. It extends the base JS `Boolean` class

## Hierarchy

* [Boolean](_packages_types_src_primitive_bool_.bool.md#boolean)

  ↳ **Bool**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_primitive_bool_.bool.md#constructor)

### Properties

* [registry](_packages_types_src_primitive_bool_.bool.md#registry)
* [Boolean](_packages_types_src_primitive_bool_.bool.md#boolean)

### Accessors

* [encodedLength](_packages_types_src_primitive_bool_.bool.md#encodedlength)
* [hash](_packages_types_src_primitive_bool_.bool.md#hash)
* [isEmpty](_packages_types_src_primitive_bool_.bool.md#isempty)
* [isFalse](_packages_types_src_primitive_bool_.bool.md#isfalse)
* [isTrue](_packages_types_src_primitive_bool_.bool.md#istrue)

### Methods

* [eq](_packages_types_src_primitive_bool_.bool.md#eq)
* [toHex](_packages_types_src_primitive_bool_.bool.md#tohex)
* [toHuman](_packages_types_src_primitive_bool_.bool.md#tohuman)
* [toJSON](_packages_types_src_primitive_bool_.bool.md#tojson)
* [toRawType](_packages_types_src_primitive_bool_.bool.md#torawtype)
* [toString](_packages_types_src_primitive_bool_.bool.md#tostring)
* [toU8a](_packages_types_src_primitive_bool_.bool.md#tou8a)

## Constructors

### constructor

\+ **new Bool**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [Bool](_packages_types_src_primitive_bool_.bool.md) \| [Boolean](_packages_types_src_primitive_bool_.bool.md#boolean) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| boolean \| number): [Bool](_packages_types_src_primitive_bool_.bool.md)

*Defined in [packages/types/src/primitive/Bool.ts:27](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L27)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [Bool](_packages_types_src_primitive_bool_.bool.md) \| [Boolean](_packages_types_src_primitive_bool_.bool.md#boolean) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| boolean \| number | false |

**Returns:** [Bool](_packages_types_src_primitive_bool_.bool.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Defined in [packages/types/src/primitive/Bool.ts:27](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L27)*

___

### Boolean

▪ `Static` **Boolean**: BooleanConstructor

*Defined in node_modules/typescript/lib/lib.es5.d.ts:540*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/primitive/Bool.ts:39](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L39)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/primitive/Bool.ts:46](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L46)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/primitive/Bool.ts:53](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L53)*

**`description`** Checks if the value is an empty value (true when it wraps false/default)

**Returns:** boolean

___

### isFalse

• get **isFalse**(): boolean

*Defined in [packages/types/src/primitive/Bool.ts:60](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L60)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** boolean

___

### isTrue

• get **isTrue**(): boolean

*Defined in [packages/types/src/primitive/Bool.ts:67](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L67)*

**`description`** Checks if the value is an empty value (always false)

**Returns:** boolean

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:74](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L74)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(): string

*Defined in [packages/types/src/primitive/Bool.ts:85](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L85)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(): boolean

*Defined in [packages/types/src/primitive/Bool.ts:92](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L92)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** boolean

___

### toJSON

▸ **toJSON**(): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:99](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L99)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** boolean

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:106](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L106)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/primitive/Bool.ts:113](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L113)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/primitive/Bool.ts:122](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/primitive/Bool.ts#L122)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)
