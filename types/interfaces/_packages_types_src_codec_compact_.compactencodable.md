[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/Compact"](../modules/_packages_types_src_codec_compact_.md) › [CompactEncodable](_packages_types_src_codec_compact_.compactencodable.md)

# Interface: CompactEncodable

## Hierarchy

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **CompactEncodable**

## Index

### Properties

* [encodedLength](_packages_types_src_codec_compact_.compactencodable.md#readonly-encodedlength)
* [hash](_packages_types_src_codec_compact_.compactencodable.md#readonly-hash)
* [isEmpty](_packages_types_src_codec_compact_.compactencodable.md#readonly-isempty)
* [registry](_packages_types_src_codec_compact_.compactencodable.md#readonly-registry)

### Methods

* [bitLength](_packages_types_src_codec_compact_.compactencodable.md#bitlength)
* [eq](_packages_types_src_codec_compact_.compactencodable.md#eq)
* [toBn](_packages_types_src_codec_compact_.compactencodable.md#tobn)
* [toHex](_packages_types_src_codec_compact_.compactencodable.md#tohex)
* [toHuman](_packages_types_src_codec_compact_.compactencodable.md#tohuman)
* [toJSON](_packages_types_src_codec_compact_.compactencodable.md#tojson)
* [toNumber](_packages_types_src_codec_compact_.compactencodable.md#tonumber)
* [toRawType](_packages_types_src_codec_compact_.compactencodable.md#torawtype)
* [toString](_packages_types_src_codec_compact_.compactencodable.md#tostring)
* [toU8a](_packages_types_src_codec_compact_.compactencodable.md#tou8a)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:24](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:29](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L29)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:34](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L34)*

**`description`** Checks if the value is an empty value

___

### `Readonly` registry

• **registry**: *[Registry](_packages_types_src_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L39)*

**`description`** The registry associated with this object

## Methods

###  bitLength

▸ **bitLength**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:17](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L17)*

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:44](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L44)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/codec/Compact.ts:18](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L18)*

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:49](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L49)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:54](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L54)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:59](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L59)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/codec/Compact.ts:19](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Compact.ts#L19)*

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:64](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L64)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:69](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L69)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L75)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*
