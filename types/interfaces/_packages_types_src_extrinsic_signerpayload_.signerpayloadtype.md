**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/SignerPayload"](../modules/_packages_types_src_extrinsic_signerpayload_.md) / SignerPayloadType

# Interface: SignerPayloadType

## Hierarchy

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **SignerPayloadType**

  ↳↳ [SignerPayload](../classes/_packages_types_src_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)
* [era](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)
* [isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)
* [method](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)
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

### address

•  **address**: Address

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L16)*

___

### blockHash

•  **blockHash**: Hash

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

### blockNumber

•  **blockNumber**: BlockNumber

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

### encodedLength

• `Readonly` **encodedLength**: number

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### era

•  **era**: ExtrinsicEra

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

### genesisHash

•  **genesisHash**: Hash

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

### hash

• `Readonly` **hash**: H256

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/codec.ts:28](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L28)*

**`description`** Returns a hash of the value

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### method

•  **method**: Call

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L21)*

___

### nonce

•  **nonce**: [Compact](../classes/_packages_types_src_codec_compact_.compact.md)\<Index>

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

### registry

• `Readonly` **registry**: [Registry](_packages_types_src_types_registry_.registry.md)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

___

### runtimeVersion

•  **runtimeVersion**: RuntimeVersion

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

### signedExtensions

•  **signedExtensions**: [Vec](../classes/_packages_types_src_codec_vec_.vec.md)\<[Text](../classes/_packages_types_src_primitive_text_.text.md)>

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L24)*

___

### tip

•  **tip**: [Compact](../classes/_packages_types_src_codec_compact_.compact.md)\<Balance>

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:25](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L25)*

___

### version

•  **version**: [u8](_packages_types_src_augment_registry_._registry_.interfacetypes.md#u8)

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:26](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/extrinsic/SignerPayload.ts#L26)*

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L53)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)
