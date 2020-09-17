[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Compact"](../modules/_packages_types_src_codec_compact_.md) › [Compact](_packages_types_src_codec_compact_.compact.md)

# Class: Compact ‹**T**›

**`name`** Compact

**`description`** 
A compact length-encoding codec wrapper. It performs the same function as Length, however
differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
a number and making the compact representation thereof

## Type parameters

▪ **T**: *[CompactEncodable](../interfaces/_packages_types_src_codec_compact_.compactencodable.md)*

## Hierarchy

* **Compact**

## Implements

* [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)‹T›

## Index

### Constructors

* [constructor](_packages_types_src_codec_compact_.compact.md#constructor)

### Properties

* [registry](_packages_types_src_codec_compact_.compact.md#readonly-registry)
* [addLengthPrefix](_packages_types_src_codec_compact_.compact.md#static-addlengthprefix)
* [decodeU8a](_packages_types_src_codec_compact_.compact.md#static-decodeu8a)
* [encodeU8a](_packages_types_src_codec_compact_.compact.md#static-encodeu8a)

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
* [stripLengthPrefix](_packages_types_src_codec_compact_.compact.md#static-striplengthprefix)
* [with](_packages_types_src_codec_compact_.compact.md#static-with)

## Constructors

###  constructor

\+ **new Compact**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› | keyof InterfaceTypes, `value`: [Compact](_packages_types_src_codec_compact_.compact.md)‹T› | [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber)): *[Compact](_packages_types_src_codec_compact_.compact.md)*

*Defined in [packages/types/src/codec/Compact.ts:35](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› &#124; keyof InterfaceTypes | - |
`value` | [Compact](_packages_types_src_codec_compact_.compact.md)‹T› &#124; [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) | 0 |

**Returns:** *[Compact](_packages_types_src_codec_compact_.compact.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md).[registry](../interfaces/_packages_types_src_types_interfaces_.icompact.md#readonly-registry)*

*Defined in [packages/types/src/codec/Compact.ts:31](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L31)*

___

### `Static` addLengthPrefix

▪ **addLengthPrefix**: *compactAddLength* = compactAddLength

*Defined in [packages/types/src/codec/Compact.ts:56](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L56)*

Prepend a Uint8Array with its compact length.

**`param`** The Uint8Array to be prefixed

___

### `Static` decodeU8a

▪ **decodeU8a**: *compactFromU8a* = compactFromU8a

*Defined in [packages/types/src/codec/Compact.ts:58](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L58)*

___

### `Static` encodeU8a

▪ **encodeU8a**: *compactToU8a* = compactToU8a

*Defined in [packages/types/src/codec/Compact.ts:60](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L60)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:84](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L84)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Compact.ts:91](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L91)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Compact.ts:98](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L98)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:105](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L105)*

**`description`** Returns the number of bits in the value

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:112](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L112)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toBigInt

▸ **toBigInt**(): *BigInt*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:123](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L123)*

**`description`** Returns a BigInt representation of the number

**Returns:** *BigInt*

___

###  toBn

▸ **toBn**(): *BN*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:130](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L130)*

**`description`** Returns the BN representation of the number

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:137](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L137)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:144](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L144)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:151](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L151)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:158](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L158)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:165](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L165)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:172](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L172)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Compact.ts:181](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L181)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  unwrap

▸ **unwrap**(): *T*

*Implementation of [ICompact](../interfaces/_packages_types_src_types_interfaces_.icompact.md)*

*Defined in [packages/types/src/codec/Compact.ts:188](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L188)*

**`description`** Returns the embedded [UInt](_packages_types_src_codec_uint_.uint.md) or [Moment](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#moment) value

**Returns:** *T*

___

### `Static` stripLengthPrefix

▸ **stripLengthPrefix**(`u8a`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array), `bitLength`: [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/codec/Compact.ts:62](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`u8a` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | - |
`bitLength` | [UIntBitLength](../modules/_packages_types_src_codec_abstractint_.md#uintbitlength) | DEFAULT_BITLENGTH |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**‹**T**›(`Type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› | keyof InterfaceTypes): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Compact](_packages_types_src_codec_compact_.compact.md)‹T››*

*Defined in [packages/types/src/codec/Compact.ts:43](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L43)*

**Type parameters:**

▪ **T**: *[CompactEncodable](../interfaces/_packages_types_src_codec_compact_.compactencodable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹T› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Compact](_packages_types_src_codec_compact_.compact.md)‹T››*
