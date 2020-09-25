**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/codec/Compact"](../modules/_packages_types_src_codec_compact_.md) / Compact

# Class: Compact\<**T**>

**`name`** Compact

**`description`** 
A compact length-encoding codec wrapper. It performs the same function as Length, however
differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
a number and making the compact representation thereof

## Type parameters

* T

## Hierarchy

* **Compact**

## Implements

* [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)\<T>

## Index

### Constructors

* [constructor](_packages_types_src_codec_compact_.compact.md#constructor)

### Properties

* [registry](_packages_types_src_codec_compact_.compact.md#registry)
* [addLengthPrefix](_packages_types_src_codec_compact_.compact.md#addlengthprefix)
* [decodeU8a](_packages_types_src_codec_compact_.compact.md#decodeu8a)
* [encodeU8a](_packages_types_src_codec_compact_.compact.md#encodeu8a)

### Accessors

* [encodedLength](_packages_types_src_codec_compact_.compact.md#encodedlength)
* [hash](_packages_types_src_codec_compact_.compact.md#hash)
* [isEmpty](_packages_types_src_codec_compact_.compact.md#isempty)

### Methods

* [bitLength](_packages_types_src_codec_compact_.compact.md#bitlength)
* [eq](_packages_types_src_codec_compact_.compact.md#eq)
* [toBigInt](_packages_types_src_codec_compact_.compact.md#tobigint)
* [toBn](_packages_types_src_codec_compact_.compact.md#tobn)
* [toHex](_packages_types_src_codec_compact_.compact.md#tohex)
* [toHuman](_packages_types_src_codec_compact_.compact.md#tohuman)
* [toJSON](_packages_types_src_codec_compact_.compact.md#tojson)
* [toNumber](_packages_types_src_codec_compact_.compact.md#tonumber)
* [toRawType](_packages_types_src_codec_compact_.compact.md#torawtype)
* [toString](_packages_types_src_codec_compact_.compact.md#tostring)
* [toU8a](_packages_types_src_codec_compact_.compact.md#tou8a)
* [unwrap](_packages_types_src_codec_compact_.compact.md#unwrap)
* [stripLengthPrefix](_packages_types_src_codec_compact_.compact.md#striplengthprefix)
* [with](_packages_types_src_codec_compact_.compact.md#with)

## Constructors

### constructor

\+ **new Compact**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md), `value`: [Compact](_packages_types_src_codec_compact_.compact.md)\<T> \| [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber)): [Compact](_packages_types_src_codec_compact_.compact.md)

*Defined in [packages/types/src/codec/Compact.ts:34](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) | - |
`value` | [Compact](_packages_types_src_codec_compact_.compact.md)\<T> \| [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |

**Returns:** [Compact](_packages_types_src_codec_compact_.compact.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md).[registry](../interfaces/_packages_types_src_types_interfaces_.icompact.md#registry)*

*Defined in [packages/types/src/codec/Compact.ts:30](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L30)*

___

### addLengthPrefix

▪ `Static` **addLengthPrefix**: compactAddLength = compactAddLength

*Defined in [packages/types/src/codec/Compact.ts:55](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L55)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### decodeU8a

▪ `Static` **decodeU8a**: compactFromU8a = compactFromU8a

*Defined in [packages/types/src/codec/Compact.ts:57](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L57)*

___

### encodeU8a

▪ `Static` **encodeU8a**: compactToU8a = compactToU8a

*Defined in [packages/types/src/codec/Compact.ts:59](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L59)*

## Accessors

### encodedLength

• get **encodedLength**(): number

*Defined in [packages/types/src/codec/Compact.ts:83](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L83)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### hash

• get **hash**(): H256

*Defined in [packages/types/src/codec/Compact.ts:90](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L90)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Defined in [packages/types/src/codec/Compact.ts:97](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L97)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

## Methods

### bitLength

▸ **bitLength**(): number

*Defined in [packages/types/src/codec/Compact.ts:104](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L104)*

**`description`** Returns the number of bits in the value

**Returns:** number

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:111](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L111)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toBigInt

▸ **toBigInt**(): BigInt

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:122](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L122)*

**`description`** Returns a BigInt representation of the number

**Returns:** BigInt

___

### toBn

▸ **toBn**(): BN

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:129](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L129)*

**`description`** Returns the BN representation of the number

**Returns:** BN

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:136](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L136)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:143](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L143)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:150](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L150)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toNumber

▸ **toNumber**(): number

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:157](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L157)*

**`description`** Returns the number representation for the value

**Returns:** number

___

### toRawType

▸ **toRawType**(): string

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:164](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L164)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:171](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L171)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/Compact.ts:180](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L180)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### unwrap

▸ **unwrap**(): T

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:187](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L187)*

**`description`** Returns the embedded [UInt](_packages_types_src_codec_uint_.uint.md) or [Moment](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#moment) value

**Returns:** T

___

### stripLengthPrefix

▸ `Static`**stripLengthPrefix**(`u8a`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength)): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/codec/Compact.ts:61](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L61)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`u8a` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) | - |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_BITLENGTH |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### with

▸ `Static`**with**\<T>(`Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Compact](_packages_types_src_codec_compact_.compact.md)\<T>>

*Defined in [packages/types/src/codec/Compact.ts:42](https://github.com/polkadot-js/api/blob/7fd45f63d/packages/types/src/codec/Compact.ts#L42)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [CompactEncodable](../interfaces/_packages_types_src_codec_compact_.compactencodable.md) |

#### Parameters:

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Compact](_packages_types_src_codec_compact_.compact.md)\<T>>
