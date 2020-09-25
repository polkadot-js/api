**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / IExtrinsic

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable\<[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)>

* ExtrinsicSignatureBase

* [IMethod](_packages_types_src_types_interfaces_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_packages_types_src_types_extrinsic_.iextrinsic.md#args)
* [argsDef](_packages_types_src_types_extrinsic_.iextrinsic.md#argsdef)
* [callIndex](_packages_types_src_types_extrinsic_.iextrinsic.md#callindex)
* [data](_packages_types_src_types_extrinsic_.iextrinsic.md#data)
* [encodedLength](_packages_types_src_types_extrinsic_.iextrinsic.md#encodedlength)
* [era](_packages_types_src_types_extrinsic_.iextrinsic.md#era)
* [hasOrigin](_packages_types_src_types_extrinsic_.iextrinsic.md#hasorigin)
* [hash](_packages_types_src_types_extrinsic_.iextrinsic.md#hash)
* [isEmpty](_packages_types_src_types_extrinsic_.iextrinsic.md#isempty)
* [isSigned](_packages_types_src_types_extrinsic_.iextrinsic.md#issigned)
* [length](_packages_types_src_types_extrinsic_.iextrinsic.md#length)
* [meta](_packages_types_src_types_extrinsic_.iextrinsic.md#meta)
* [method](_packages_types_src_types_extrinsic_.iextrinsic.md#method)
* [nonce](_packages_types_src_types_extrinsic_.iextrinsic.md#nonce)
* [registry](_packages_types_src_types_extrinsic_.iextrinsic.md#registry)
* [signature](_packages_types_src_types_extrinsic_.iextrinsic.md#signature)
* [signer](_packages_types_src_types_extrinsic_.iextrinsic.md#signer)
* [tip](_packages_types_src_types_extrinsic_.iextrinsic.md#tip)
* [type](_packages_types_src_types_extrinsic_.iextrinsic.md#type)
* [version](_packages_types_src_types_extrinsic_.iextrinsic.md#version)

### Methods

* [addSignature](_packages_types_src_types_extrinsic_.iextrinsic.md#addsignature)
* [eq](_packages_types_src_types_extrinsic_.iextrinsic.md#eq)
* [sign](_packages_types_src_types_extrinsic_.iextrinsic.md#sign)
* [signFake](_packages_types_src_types_extrinsic_.iextrinsic.md#signfake)
* [toHex](_packages_types_src_types_extrinsic_.iextrinsic.md#tohex)
* [toHuman](_packages_types_src_types_extrinsic_.iextrinsic.md#tohuman)
* [toJSON](_packages_types_src_types_extrinsic_.iextrinsic.md#tojson)
* [toRawType](_packages_types_src_types_extrinsic_.iextrinsic.md#torawtype)
* [toString](_packages_types_src_types_extrinsic_.iextrinsic.md#tostring)
* [toU8a](_packages_types_src_types_extrinsic_.iextrinsic.md#tou8a)

## Properties

### args

• `Readonly` **args**: [Codec](_packages_types_src_types_codec_.codec.md)[]

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[args](_packages_types_src_types_interfaces_.imethod.md#args)*

*Defined in [packages/types/src/types/interfaces.ts:25](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L25)*

___

### argsDef

• `Readonly` **argsDef**: [ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[argsDef](_packages_types_src_types_interfaces_.imethod.md#argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:26](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L26)*

___

### callIndex

• `Readonly` **callIndex**: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[callIndex](_packages_types_src_types_interfaces_.imethod.md#callindex)*

*Defined in [packages/types/src/types/interfaces.ts:27](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L27)*

___

### data

• `Readonly` **data**: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[data](_packages_types_src_types_interfaces_.imethod.md#data)*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L28)*

___

### encodedLength

• `Readonly` **encodedLength**: number

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### era

• `Readonly` **era**: [IExtrinsicEra](_packages_types_src_types_extrinsic_.iextrinsicera.md)

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[era](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#era)*

*Defined in [packages/types/src/types/extrinsic.ts:164](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L164)*

___

### hasOrigin

• `Readonly` **hasOrigin**: boolean

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[hasOrigin](_packages_types_src_types_interfaces_.imethod.md#hasorigin)*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L30)*

___

### hash

• `Readonly` **hash**: Hash

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[hash](_packages_types_src_types_interfaces_.imethod.md#hash)*

*Overrides [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L29)*

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### isSigned

• `Readonly` **isSigned**: boolean

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[isSigned](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:163](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L163)*

___

### length

• `Readonly` **length**: number

*Defined in [packages/types/src/types/extrinsic.ts:201](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L201)*

___

### meta

• `Readonly` **meta**: FunctionMetadataLatest

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[meta](_packages_types_src_types_interfaces_.imethod.md#meta)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/interfaces.ts#L31)*

___

### method

• `Readonly` **method**: Call

*Defined in [packages/types/src/types/extrinsic.ts:202](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L202)*

___

### nonce

• `Readonly` **nonce**: [ICompact](_packages_types_src_types_interfaces_.icompact.md)\<Index>

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[nonce](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:165](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L165)*

___

### registry

• `Readonly` **registry**: [Registry](_packages_types_src_types_registry_.registry.md)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

___

### signature

• `Readonly` **signature**: EcdsaSignature \| Ed25519Signature \| Sr25519Signature

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signature)*

*Defined in [packages/types/src/types/extrinsic.ts:166](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L166)*

___

### signer

• `Readonly` **signer**: Address

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signer](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#signer)*

*Defined in [packages/types/src/types/extrinsic.ts:167](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L167)*

___

### tip

• `Readonly` **tip**: [ICompact](_packages_types_src_types_interfaces_.icompact.md)\<Balance>

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[tip](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#tip)*

*Defined in [packages/types/src/types/extrinsic.ts:168](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L168)*

___

### type

• `Readonly` **type**: number

*Defined in [packages/types/src/types/extrinsic.ts:203](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L203)*

___

### version

• `Readonly` **version**: number

*Defined in [packages/types/src/types/extrinsic.ts:204](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L204)*

## Methods

### addSignature

▸ **addSignature**(`signer`: Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `signature`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `payload`: [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string): [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[addSignature](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:189](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L189)*

#### Parameters:

Name | Type |
------ | ------ |
`signer` | Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`signature` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`payload` | [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |

**Returns:** [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### sign

▸ **sign**(`account`: [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[sign](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:190](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L190)*

#### Parameters:

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

___

### signFake

▸ **signFake**(`address`: Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[signFake](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:191](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/extrinsic.ts#L191)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | Address \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L48)*

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

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L53)*

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

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/7af915185/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)
