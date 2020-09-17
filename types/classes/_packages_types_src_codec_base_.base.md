[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Base"](../modules/_packages_types_src_codec_base_.md) › [Base](_packages_types_src_codec_base_.base.md)

# Class: Base ‹**T**›

**`name`** Base

**`description`** A type extends the Base class, when it holds a value

## Type parameters

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

## Hierarchy

* **Base**

  ↳ [LookupSource](_packages_types_src_ethereum_lookupsource_.lookupsource.md)

  ↳ [ExtrinsicPayload](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md)

  ↳ [LookupSource](_packages_types_src_generic_lookupsource_.lookupsource.md)

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Properties

* [registry](_packages_types_src_codec_base_.base.md#readonly-registry)

### Accessors

* [encodedLength](_packages_types_src_codec_base_.base.md#encodedlength)
* [hash](_packages_types_src_codec_base_.base.md#hash)
* [isEmpty](_packages_types_src_codec_base_.base.md#isempty)

### Methods

* [eq](_packages_types_src_codec_base_.base.md#eq)
* [toHex](_packages_types_src_codec_base_.base.md#tohex)
* [toHuman](_packages_types_src_codec_base_.base.md#tohuman)
* [toJSON](_packages_types_src_codec_base_.base.md#tojson)
* [toRawType](_packages_types_src_codec_base_.base.md#torawtype)
* [toString](_packages_types_src_codec_base_.base.md#tostring)
* [toU8a](_packages_types_src_codec_base_.base.md#tou8a)

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:15](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L15)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [packages/types/src/codec/Base.ts:27](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L27)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Defined in [packages/types/src/codec/Base.ts:34](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L34)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Defined in [packages/types/src/codec/Base.ts:41](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L41)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:48](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L48)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:55](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L55)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:62](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L62)*

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

*Defined in [packages/types/src/codec/Base.ts:69](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L69)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:91](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L91)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:76](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L76)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Base.ts:84](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/codec/Base.ts#L84)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
