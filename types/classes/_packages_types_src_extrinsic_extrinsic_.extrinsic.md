[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/extrinsic/Extrinsic"](../modules/_packages_types_src_extrinsic_extrinsic_.md) › [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)

# Class: Extrinsic

**`name`** GenericExtrinsic

**`description`** 
Representation of an Extrinsic in the system. It contains the actual call,
(optional) signature and encodes with an actual length prefix

[https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

Can be:
- signed, to create a transaction
- left as is, to create an inherent

## Hierarchy

* ExtrinsicBase

  ↳ **Extrinsic**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#readonly-registry)

### Accessors

* [args](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#args)
* [argsDef](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#argsdef)
* [callIndex](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#callindex)
* [data](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#data)
* [encodedLength](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#encodedlength)
* [era](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#era)
* [hasOrigin](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#hasorigin)
* [hash](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#hash)
* [isEmpty](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#isempty)
* [isSigned](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#issigned)
* [length](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#length)
* [meta](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#meta)
* [method](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#method)
* [nonce](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#nonce)
* [signature](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#signature)
* [signer](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#signer)
* [tip](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tip)
* [type](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#type)
* [version](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#version)

### Methods

* [addSignature](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#addsignature)
* [eq](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#eq)
* [sign](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#sign)
* [signFake](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#signfake)
* [toHex](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tohex)
* [toHuman](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tojson)
* [toRawType](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#torawtype)
* [toString](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tostring)
* [toU8a](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tou8a)

## Constructors

###  constructor

\+ **new Extrinsic**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) | Call | undefined, `__namedParameters`: object): *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

*Overrides void*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:173](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L173)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

▪ **value**: *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md) | ExtrinsicValue | [AnyU8a](../modules/_packages_types_src_types_helpers_.md#anyu8a) | Call | undefined*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`version` | undefined &#124; number |

**Returns:** *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md).[registry](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md#readonly-registry)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[registry](_packages_types_src_codec_base_.base.md#readonly-registry)*

*Defined in [packages/types/src/codec/Base.ts:14](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/codec/Base.ts#L14)*

## Accessors

###  args

• **get args**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[args](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#args)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:44](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L44)*

**`description`** The arguments passed to for the call, exposes args so it is compatible with [Call](_packages_types_src_generic_call_.call.md)

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  argsDef

• **get argsDef**(): *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[argsDef](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#argsdef)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:51](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L51)*

**`description`** The argument definitions, compatible with [Call](_packages_types_src_generic_call_.call.md)

**Returns:** *[ArgsDef](../modules/_packages_types_src_types_codec_.md#argsdef)*

___

###  callIndex

• **get callIndex**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[callIndex](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#callindex)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:58](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L58)*

**`description`** The actual `[sectionIndex, methodIndex]` as used in the Call

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  data

• **get data**(): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[data](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#data)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:65](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L65)*

**`description`** The actual data for the Call

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[encodedLength](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#encodedlength)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[encodedLength](_packages_types_src_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:79](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L79)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *[ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[era](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#era)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:72](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L72)*

**`description`** The era for this extrinsic

**Returns:** *[ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)*

___

###  hasOrigin

• **get hasOrigin**(): *boolean*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[hasOrigin](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#hasorigin)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:86](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L86)*

**`description`** `true` is method has `Origin` argument (compatibility with [Call])

**Returns:** *boolean*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[hash](_packages_types_src_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:33](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/codec/Base.ts#L33)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[isEmpty](_packages_types_src_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:40](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/codec/Base.ts#L40)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isSigned

• **get isSigned**(): *boolean*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[isSigned](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#issigned)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:93](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L93)*

**`description`** `true` id the extrinsic is signed

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[length](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#length)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:100](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L100)*

**`description`** The length of the actual data, excluding prefix

**Returns:** *number*

___

###  meta

• **get meta**(): *FunctionMetadataLatest*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[meta](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#meta)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:107](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L107)*

**`description`** The [FunctionMetadataLatest](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#functionmetadatalatest) that describes the extrinsic

**Returns:** *FunctionMetadataLatest*

___

###  method

• **get method**(): *Call*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[method](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#method)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:114](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L114)*

**`description`** The [Call](_packages_types_src_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  nonce

• **get nonce**(): *[Compact](_packages_types_src_codec_compact_.compact.md)‹Index›*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[nonce](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#nonce)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:121](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L121)*

**`description`** The nonce for this extrinsic

**Returns:** *[Compact](_packages_types_src_codec_compact_.compact.md)‹Index›*

___

###  signature

• **get signature**(): *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[signature](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#signature)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L128)*

**`description`** The actual [EcdsaSignature](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#ecdsasignature), [Ed25519Signature](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#ed25519signature) or [Sr25519Signature](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#sr25519signature)

**Returns:** *EcdsaSignature | Ed25519Signature | Sr25519Signature*

___

###  signer

• **get signer**(): *Address*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[signer](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#signer)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:135](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L135)*

**`description`** The [Address](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#address) that signed

**Returns:** *Address*

___

###  tip

• **get tip**(): *[Compact](_packages_types_src_codec_compact_.compact.md)‹Balance›*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[tip](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#tip)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:142](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L142)*

**`description`** Forwards compat

**Returns:** *[Compact](_packages_types_src_codec_compact_.compact.md)‹Balance›*

___

###  type

• **get type**(): *number*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[type](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#type)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:149](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L149)*

**`description`** Returns the raw transaction version (not flagged with signing information)

**Returns:** *number*

___

###  version

• **get version**(): *number*

*Inherited from [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md).[version](_packages_types_src_extrinsic_extrinsic_.extrinsic.md#version)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:156](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L156)*

**`description`** Returns the encoded version flag

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:222](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L222)*

**`description`** Injects an already-generated signature into the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[eq](_packages_types_src_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Base.ts:47](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/codec/Base.ts#L47)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:231](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L231)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:240](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L240)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)*

___

###  toHex

▸ **toHex**(`isBare?`: undefined | false | true): *string*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toHex](_packages_types_src_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:249](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L249)*

**`description`** Returns a hex string representation of the value

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExpanded?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toHuman](_packages_types_src_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:256](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L256)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExpanded?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *string*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toJSON](_packages_types_src_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:276](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L276)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toRawType](_packages_types_src_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:283](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L283)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsic](../interfaces/_packages_types_src_types_extrinsic_.iextrinsic.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toString](_packages_types_src_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:75](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/codec/Base.ts#L75)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toU8a](_packages_types_src_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/extrinsic/Extrinsic.ts:291](https://github.com/polkadot-js/api/blob/eda5edbd4/packages/types/src/extrinsic/Extrinsic.ts#L291)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value is not length-prefixed  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*
