[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) › [IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable‹[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)›

* ExtrinsicSignatureBase

  ↳ [IMethod](_packages_types_src_types_interfaces_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-args)
* [argsDef](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-argsdef)
* [callIndex](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-callindex)
* [data](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-data)
* [encodedLength](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-encodedlength)
* [era](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-era)
* [hasOrigin](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-hasorigin)
* [hash](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-hash)
* [isEmpty](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-isempty)
* [isSigned](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-issigned)
* [length](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-length)
* [meta](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-meta)
* [method](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-method)
* [nonce](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-nonce)
* [registry](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-registry)
* [signature](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-signature)
* [signer](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-signer)
* [tip](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-tip)
* [type](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-type)
* [version](_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-version)

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

### `Readonly` args

• **args**: *[Codec](_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[args](_packages_types_src_types_interfaces_.imethod.md#readonly-args)*

*Defined in [packages/types/src/types/interfaces.ts:25](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L25)*

___

### `Readonly` argsDef

• **argsDef**: *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[argsDef](_packages_types_src_types_interfaces_.imethod.md#readonly-argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:26](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L26)*

___

### `Readonly` callIndex

• **callIndex**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[callIndex](_packages_types_src_types_interfaces_.imethod.md#readonly-callindex)*

*Defined in [packages/types/src/types/interfaces.ts:27](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L27)*

___

### `Readonly` data

• **data**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[data](_packages_types_src_types_interfaces_.imethod.md#readonly-data)*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L28)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` era

• **era**: *[IExtrinsicEra](_packages_types_src_types_extrinsic_.iextrinsicera.md)*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[era](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-era)*

*Defined in [packages/types/src/types/extrinsic.ts:164](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L164)*

___

### `Readonly` hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[hasOrigin](_packages_types_src_types_interfaces_.imethod.md#readonly-hasorigin)*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L30)*

___

### `Readonly` hash

• **hash**: *Hash*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[hash](_packages_types_src_types_interfaces_.imethod.md#readonly-hash)*

*Overrides [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L29)*

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### `Readonly` isSigned

• **isSigned**: *boolean*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[isSigned](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:163](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L163)*

___

### `Readonly` length

• **length**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:201](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L201)*

___

### `Readonly` meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [IMethod](_packages_types_src_types_interfaces_.imethod.md).[meta](_packages_types_src_types_interfaces_.imethod.md#readonly-meta)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/interfaces.ts#L31)*

___

### `Readonly` method

• **method**: *Call*

*Defined in [packages/types/src/types/extrinsic.ts:202](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L202)*

___

### `Readonly` nonce

• **nonce**: *[ICompact](_packages_types_src_types_interfaces_.icompact.md)‹Index›*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[nonce](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:165](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L165)*

___

### `Readonly` registry

• **registry**: *[Registry](_packages_types_src_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

___

### `Readonly` signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-signature)*

*Defined in [packages/types/src/types/extrinsic.ts:166](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L166)*

___

### `Readonly` signer

• **signer**: *Address*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[signer](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-signer)*

*Defined in [packages/types/src/types/extrinsic.ts:167](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L167)*

___

### `Readonly` tip

• **tip**: *[ICompact](_packages_types_src_types_interfaces_.icompact.md)‹Balance›*

*Inherited from [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[tip](_packages_types_src_types_extrinsic_.iextrinsicsignature.md#readonly-tip)*

*Defined in [packages/types/src/types/extrinsic.ts:168](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L168)*

___

### `Readonly` type

• **type**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:203](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L203)*

___

### `Readonly` version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:204](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L204)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[addSignature](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:189](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[sign](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:190](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

___

###  signFake

▸ **signFake**(`address`: Address | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[signFake](_packages_types_src_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:191](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_packages_types_src_types_extrinsic_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L48)*

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

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L53)*

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

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array)*
