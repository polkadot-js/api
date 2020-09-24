**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/v3/ExtrinsicSignature"](../modules/_packages_types_src_extrinsic_v3_extrinsicsignature_.md) / ExtrinsicSignatureV3

# Class: ExtrinsicSignatureV3

**`name`** GenericExtrinsicSignatureV3

**`description`** 
A container for the [Signature](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#signature) associated with a specific [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md)

## Hierarchy

* [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)

  ↳ **ExtrinsicSignatureV3**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#registry)

### Accessors

* [Type](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#type)
* [defKeys](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#defkeys)
* [encodedLength](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#encodedlength)
* [era](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#era)
* [hash](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#hash)
* [isEmpty](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#isempty)
* [isSigned](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#issigned)
* [nonce](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#nonce)
* [signature](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signature)
* [signer](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signer)
* [tip](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tip)

### Methods

* [addSignature](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#addsignature)
* [createPayload](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#createpayload)
* [eq](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#eq)
* [get](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#get)
* [getAtIndex](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#getatindex)
* [sign](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#sign)
* [signFake](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#signfake)
* [toArray](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#toarray)
* [toHex](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tohex)
* [toHuman](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tojson)
* [toRawType](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#torawtype)
* [toString](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tostring)
* [toU8a](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#tou8a)
* [typesToMap](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#typestomap)
* [with](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md#with)

## Constructors

### constructor

\+ **new ExtrinsicSignatureV3**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| undefined, `__namedParameters`: { isSigned: undefined \| false \| true  }): [ExtrinsicSignatureV3](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[constructor](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#constructor)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[constructor](_packages_types_src_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:19](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L19)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| undefined | - |
`__namedParameters` | { isSigned: undefined \| false \| true  } | {} |

**Returns:** [ExtrinsicSignatureV3](_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md).[registry](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md#registry)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[registry](_packages_types_src_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L108)*

## Accessors

### Type

• get **Type**(): object

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[Type](_packages_types_src_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L171)*

**`description`** Returns the Type description to sthe structure

**Returns:** object

___

### defKeys

• get **defKeys**(): string[]

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[defKeys](_packages_types_src_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L149)*

**`description`** The available keys for this enum

**Returns:** string[]

___

### encodedLength

• get **encodedLength**(): number

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[encodedLength](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#encodedlength)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[encodedLength](_packages_types_src_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:48](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L48)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### era

• get **era**(): ExtrinsicEra

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[era](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#era)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:64](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L64)*

**`description`** The [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** ExtrinsicEra

___

### hash

• get **hash**(): H256

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[hash](_packages_types_src_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L196)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[isEmpty](_packages_types_src_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L156)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### isSigned

• get **isSigned**(): boolean

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[isSigned](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#issigned)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:57](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L57)*

**`description`** `true` if the signature is valid

**Returns:** boolean

___

### nonce

• get **nonce**(): [Compact](_packages_types_src_codec_compact_.compact.md)\<Index>

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[nonce](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#nonce)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:71](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L71)*

**`description`** The [Index](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#index) for the signature

**Returns:** [Compact](_packages_types_src_codec_compact_.compact.md)\<Index>

___

### signature

• get **signature**(): Signature

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signature](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signature)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:78](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L78)*

**`description`** The actual [Signature](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#signature) hash

**Returns:** Signature

___

### signer

• get **signer**(): Address

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signer](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signer)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:85](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L85)*

**`description`** The [Address](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#address) that signed

**Returns:** Address

___

### tip

• get **tip**(): [Compact](_packages_types_src_codec_compact_.compact.md)\<Balance>

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[tip](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tip)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:92](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L92)*

**`description`** The [Balance](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#balance) tip

**Returns:** [Compact](_packages_types_src_codec_compact_.compact.md)\<Balance>

## Methods

### addSignature

▸ **addSignature**(`signer`: Address \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `signature`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `payload`: [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string): [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Overrides [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[addSignature](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#addsignature)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicSignature.ts:20](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v3/ExtrinsicSignature.ts#L20)*

**`description`** Adds a raw signature

#### Parameters:

Name | Type |
------ | ------ |
`signer` | Address \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`signature` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`payload` | [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string |

**Returns:** [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### createPayload

▸ **createPayload**(`method`: Call, `__namedParameters`: { blockHash: string \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) ; era: undefined \| [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md) ; genesisHash: string \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) ; nonce: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) ; runtimeVersion: { specVersion: BN  } ; tip: undefined \| string \| number \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| BN \| BigInt  }): [ExtrinsicPayloadV3](_packages_types_src_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

*Overrides [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[createPayload](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#createpayload)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicSignature.ts:31](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v3/ExtrinsicSignature.ts#L31)*

**`description`** Creates a payload from the supplied options

#### Parameters:

Name | Type |
------ | ------ |
`method` | Call |
`__namedParameters` | { blockHash: string \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) ; era: undefined \| [IExtrinsicEra](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicera.md) ; genesisHash: string \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) ; nonce: [AnyNumber](../modules/_packages_types_src_types_helpers_.md#anynumber) ; runtimeVersion: { specVersion: BN  } ; tip: undefined \| string \| number \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| BN \| BigInt  } |

**Returns:** [ExtrinsicPayloadV3](_packages_types_src_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

___

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[eq](_packages_types_src_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L203)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### get

▸ **get**(`name`: keyof TypesDef): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) \| undefined

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[get](_packages_types_src_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_packages_types_src_codec_map_.codecmap.md).[get](_packages_types_src_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L211)*

**`description`** Returns a specific names entry in the structure

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof TypesDef | The name of the entry to retrieve  |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) \| undefined

___

### getAtIndex

▸ **getAtIndex**(`index`: number): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[getAtIndex](_packages_types_src_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

___

### sign

▸ **sign**(`method`: Call, `account`: [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Overrides [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[sign](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#sign)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicSignature.ts:47](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v3/ExtrinsicSignature.ts#L47)*

**`description`** Generate a payload and applies the signature from a keypair

#### Parameters:

Name | Type |
------ | ------ |
`method` | Call |
`account` | [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### signFake

▸ **signFake**(`method`: Call, `address`: Address \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string, `options`: [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md)): [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Overrides [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[signFake](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#signfake)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicSignature.ts:58](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v3/ExtrinsicSignature.ts#L58)*

**`description`** Generate a payload and applies a fake signature

#### Parameters:

Name | Type |
------ | ------ |
`method` | Call |
`address` | Address \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string |
`options` | [SignatureOptions](../interfaces/_packages_types_src_types_extrinsic_.signatureoptions.md) |

**Returns:** [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

___

### toArray

▸ **toArray**(): [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toArray](_packages_types_src_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]

___

### toHex

▸ **toHex**(): string

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHex](_packages_types_src_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:232](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L232)*

**`description`** Returns a hex string representation of the value

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHuman](_packages_types_src_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L239)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toJSON](_packages_types_src_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L252)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toRawType](_packages_types_src_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:276](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L276)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [IExtrinsicSignature](../interfaces/_packages_types_src_types_extrinsic_.iextrinsicsignature.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toString](_packages_types_src_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:285](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L285)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: undefined \| false \| true): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Inherited from [ExtrinsicSignatureV2](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md).[toU8a](_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md#tou8a)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[toU8a](_packages_types_src_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/extrinsic/v2/ExtrinsicSignature.ts:160](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/extrinsic/v2/ExtrinsicSignature.ts#L160)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### typesToMap

▸ `Static`**typesToMap**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `Types`: Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>): Record\<string, string>

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[typesToMap](_packages_types_src_codec_struct_.struct.md#typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L265)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`Types` | Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)> |

**Returns:** Record\<string, string>

___

### with

▸ `Static`**with**\<S>(`Types`: S, `jsonMap?`: [Map](_packages_types_src_codec_struct_.struct.md#map)\<keyof S, string>): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Struct](_packages_types_src_codec_struct_.struct.md)\<S>>

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[with](_packages_types_src_codec_struct_.struct.md#with)*

*Defined in [packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/7070f757c/packages/types/src/codec/Struct.ts#L125)*

#### Type parameters:

Name | Type |
------ | ------ |
`S` | TypesDef |

#### Parameters:

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_packages_types_src_codec_struct_.struct.md#map)\<keyof S, string> |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[Struct](_packages_types_src_codec_struct_.struct.md)\<S>>
