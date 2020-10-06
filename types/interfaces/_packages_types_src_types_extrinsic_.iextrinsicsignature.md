**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / IExtrinsicSignature

# Interface: IExtrinsicSignature

## Hierarchy

* ExtrinsicSignatureBase

* [Codec](_packages_types_src_types_codec_.codec.md)

  ↳ **IExtrinsicSignature**

## Implemented by

* [ExtrinsicSignatureV4](../classes/_packages_types_src_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)

## Index

### Properties

* [encodedLength](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#encodedlength)
* [era](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#era)
* [hash](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#hash)
* [isEmpty](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#isempty)
* [isSigned](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#issigned)
* [nonce](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#nonce)
* [registry](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#registry)
* [signature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signature)
* [signer](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signer)
* [tip](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tip)

### Methods

* [addSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#addsignature)
* [eq](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#eq)
* [sign](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#sign)
* [signFake](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signfake)
* [toHex](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tohex)
* [toHuman](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tohuman)
* [toJSON](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tojson)
* [toRawType](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#torawtype)
* [toString](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tostring)
* [toU8a](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tou8a)

## Properties

### encodedLength

• `Readonly` **encodedLength**: number

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### era

• `Readonly` **era**: [IExtrinsicEra](_packages_types_src_types_extrinsic_.iextrinsicera.md)

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[era](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#era)*

*Defined in [packages/types/src/types/extrinsic.ts:164](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L164)*

___

### hash

• `Readonly` **hash**: H256

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/codec.ts:28](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L28)*

**`description`** Returns a hash of the value

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### isSigned

• `Readonly` **isSigned**: boolean

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[isSigned](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:163](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L163)*

___

### nonce

• `Readonly` **nonce**: [ICompact](_packages_types_src_types_interfaces_.icompact.md)\<Index>

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[nonce](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:165](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L165)*

___

### registry

• `Readonly` **registry**: [Registry](_packages_types_src_types_registry_.registry.md)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

___

### signature

• `Readonly` **signature**: EcdsaSignature \| Ed25519Signature \| Sr25519Signature

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signature)*

*Defined in [packages/types/src/types/extrinsic.ts:166](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L166)*

___

### signer

• `Readonly` **signer**: Address

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signer](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signer)*

*Defined in [packages/types/src/types/extrinsic.ts:167](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L167)*

___

### tip

• `Readonly` **tip**: [ICompact](_packages_types_src_types_interfaces_.icompact.md)\<Balance>

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[tip](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tip)*

*Defined in [packages/types/src/types/extrinsic.ts:168](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L168)*

## Methods

### addSignature

▸ **addSignature**(`signer`: Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `signature`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `payload`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string): [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Defined in [packages/types/src/types/extrinsic.ts:183](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L183)*

#### Parameters:

Name | Type |
------ | ------ |
`signer` | Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`signature` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`payload` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |

**Returns:** [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Defined in [packages/types/src/types/extrinsic.ts:184](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L184)*

#### Parameters:

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### signFake

▸ **signFake**(`method`: Call, `address`: Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Defined in [packages/types/src/types/extrinsic.ts:185](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L185)*

#### Parameters:

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L48)*

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

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L53)*

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

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)
