**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/SignerPayload"](../modules/_packages_types_src_extrinsic_signerpayload_.md) / SignerPayload

# Class: SignerPayload

**`name`** SignerPayload

**`description`** 
A generic signer payload that can be used for serialization between API and signer

## Hierarchy

* [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

## Implements

* [ISignerPayload](../interfaces/_packages_types_src_types_extrinsic_.isignerpayload.md)

## Index

### Properties

* [address](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#address)
* [blockHash](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#blockhash)
* [blockNumber](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#blocknumber)
* [encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#encodedlength)
* [era](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#era)
* [genesisHash](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#genesishash)
* [hash](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#hash)
* [isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#isempty)
* [method](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#method)
* [nonce](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#nonce)
* [registry](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#registry)
* [runtimeVersion](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#runtimeversion)
* [signedExtensions](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#signedextensions)
* [tip](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tip)
* [version](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#version)

### Methods

* [eq](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#eq)
* [toHex](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tohex)
* [toHuman](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tojson)
* [toPayload](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#topayload)
* [toRaw](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#toraw)
* [toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#torawtype)
* [toString](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tostring)
* [toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayload.md#tou8a)

## Properties

### address

•  **address**: Address

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[address](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L16)*

___

### blockHash

•  **blockHash**: Hash

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

### blockNumber

•  **blockNumber**: BlockNumber

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

### encodedLength

• `Readonly` **encodedLength**: number

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### era

•  **era**: ExtrinsicEra

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

### genesisHash

•  **genesisHash**: Hash

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

### hash

• `Readonly` **hash**: H256

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/codec.ts:28](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L28)*

**`description`** Returns a hash of the value

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### method

•  **method**: Call

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L21)*

___

### nonce

•  **nonce**: [Compact](_packages_types_src_codec_compact_.compact.md)\<Index>

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

___

### runtimeVersion

•  **runtimeVersion**: RuntimeVersion

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

### signedExtensions

•  **signedExtensions**: [Vec](_packages_types_src_codec_vec_.vec.md)\<[Text](_packages_types_src_primitive_text_.text.md)>

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[signedExtensions](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#signedextensions)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L24)*

___

### tip

•  **tip**: [Compact](_packages_types_src_codec_compact_.compact.md)\<Balance>

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:25](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L25)*

___

### version

•  **version**: [u8](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u8)

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:26](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L26)*

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L53)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toPayload

▸ **toPayload**(): [SignerPayloadJSON](../interfaces/_packages_types_src_types_extrinsic_.signerpayloadjson.md)

*Implementation of [ISignerPayload](../interfaces/_packages_types_src_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:54](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L54)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** [SignerPayloadJSON](../interfaces/_packages_types_src_types_extrinsic_.signerpayloadjson.md)

___

### toRaw

▸ **toRaw**(): [SignerPayloadRaw](../interfaces/_packages_types_src_types_extrinsic_.signerpayloadraw.md)

*Implementation of [ISignerPayload](../interfaces/_packages_types_src_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:76](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/extrinsic/SignerPayload.ts#L76)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** [SignerPayloadRaw](../interfaces/_packages_types_src_types_extrinsic_.signerpayloadraw.md)

___

### toRawType

▸ **toRawType**(): string

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [SignerPayloadType](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](../interfaces/_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)
