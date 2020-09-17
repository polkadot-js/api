[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/extrinsic/SignerPayload"](../modules/_packages_types_src_extrinsic_signerpayload_.md) › [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md)

# Interface: SignerPayloadType

## Hierarchy

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **SignerPayloadType**

  ↳ [SignerPayload](../classes/_packages_types_src_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)
* [era](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)
* [isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)
* [method](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)
* [runtimeVersion](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)
* [signedExtensions](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#signedextensions)
* [tip](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tip)
* [version](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#version)

### Methods

* [eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)
* [toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)
* [toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)
* [toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)
* [toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)
* [toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

###  blockHash

• **blockHash**: *Hash*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:24](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L24)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L21)*

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

###  method

• **method**: *Call*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

###  nonce

• **nonce**: *[Compact](../classes/_packages_types_src_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

### `Readonly` registry

• **registry**: *[Registry](_packages_types_src_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/codec.ts#L39)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L24)*

___

###  signedExtensions

• **signedExtensions**: *[Vec](../classes/_packages_types_src_codec_vec_.vec.md)‹[Text](../classes/_packages_types_src_primitive_text_.text.md)›*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:25](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L25)*

___

###  tip

• **tip**: *[Compact](../classes/_packages_types_src_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:26](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L26)*

___

###  version

• **version**: *[u8](_packages_types_src_augment_registry_._registry_.interfacetypes.md#u8)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:27](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/SignerPayload.ts#L27)*

## Methods

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
