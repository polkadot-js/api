[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/extrinsic/v2/Extrinsic"](../modules/_packages_types_src_extrinsic_v2_extrinsic_.md) › [ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)

# Class: ExtrinsicV2

**`name`** GenericExtrinsicV2

**`description`** 
The second generation of compact extrinsics

## Hierarchy

  ↳ [Struct](_packages_types_src_codec_struct_.struct.md)

  ↳ **ExtrinsicV2**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#readonly-registry)

### Accessors

* [Type](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#type)
* [defKeys](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#defkeys)
* [encodedLength](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#encodedlength)
* [hash](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#hash)
* [isEmpty](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#isempty)
* [method](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#method)
* [signature](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#signature)
* [version](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#version)

### Methods

* [addSignature](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#addsignature)
* [eq](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#eq)
* [get](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#get)
* [getAtIndex](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#getatindex)
* [sign](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#sign)
* [signFake](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#signfake)
* [toArray](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#toarray)
* [toHex](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#tohex)
* [toHuman](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#tojson)
* [toRawType](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#torawtype)
* [toString](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#tostring)
* [toU8a](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#tou8a)
* [typesToMap](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#static-typestomap)
* [with](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicV2**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV2](../interfaces/_packages_types_src_extrinsic_v2_extrinsic_.extrinsicvaluev2.md) | Call, `__namedParameters`: object): *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[constructor](_packages_types_src_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:26](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L26)*

**Parameters:**

▪ **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

▪`Optional`  **value**: *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | [ExtrinsicValueV2](../interfaces/_packages_types_src_extrinsic_v2_extrinsic_.extrinsicvaluev2.md) | Call*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`isSigned` | undefined &#124; false &#124; true |

**Returns:** *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md).[registry](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md#readonly-registry)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[registry](_packages_types_src_codec_struct_.struct.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:109](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L109)*

## Accessors

###  Type

• **get Type**(): *object*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[Type](_packages_types_src_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L172)*

**`description`** Returns the Type description to sthe structure

**Returns:** *object*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[defKeys](_packages_types_src_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L150)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[encodedLength](_packages_types_src_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:58](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L58)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[hash](_packages_types_src_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L197)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[isEmpty](_packages_types_src_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L157)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *Call*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:65](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L65)*

**`description`** The [Call](_packages_types_src_generic_call_.call.md) this extrinsic wraps

**Returns:** *Call*

___

###  signature

• **get signature**(): *ExtrinsicSignatureV2*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:72](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L72)*

**`description`** The [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

**Returns:** *ExtrinsicSignatureV2*

___

###  version

• **get version**(): *number*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:79](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L79)*

**`description`** The version for the signature

**Returns:** *number*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:86](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L86)*

**`description`** Add an [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) to the extrinsic (already generated)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[eq](_packages_types_src_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:204](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L204)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof TypesDef): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[get](_packages_types_src_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L212)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof TypesDef | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[getAtIndex](_packages_types_src_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L219)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:95](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L95)*

**`description`** Sign the extrinsic with a specific keypair

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  signFake

▸ **signFake**(`signer`: Address | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Defined in [packages/types/src/extrinsic/v2/Extrinsic.ts:104](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/extrinsic/v2/Extrinsic.ts#L104)*

**`describe`** Adds a fake signature to the extrinsic

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** *[ExtrinsicV2](_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toArray](_packages_types_src_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L226)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHex](_packages_types_src_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:233](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L233)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHuman](_packages_types_src_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:240](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L240)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toJSON](_packages_types_src_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:253](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L253)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toRawType](_packages_types_src_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:277](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L277)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toString](_packages_types_src_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:286](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L286)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Implementation of [IExtrinsicImpl](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicimpl.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toU8a](_packages_types_src_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:294](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L294)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[typesToMap](_packages_types_src_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:266](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**‹**S**›(`Types`: S, `jsonMap?`: [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Struct](_packages_types_src_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[with](_packages_types_src_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/codec/Struct.ts#L126)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Struct](_packages_types_src_codec_struct_.struct.md)‹S››*
