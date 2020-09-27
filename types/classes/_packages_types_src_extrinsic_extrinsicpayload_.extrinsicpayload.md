**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/extrinsic/ExtrinsicPayload"](../modules/_packages_types_src_extrinsic_extrinsicpayload_.md) / ExtrinsicPayload

# Class: ExtrinsicPayload

**`name`** GenericExtrinsicPayload

**`description`** 
A signing payload for an [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Hierarchy

* [Base](_packages_types_src_codec_base_.base.md)\<ExtrinsicPayloadVx>

  ↳ **ExtrinsicPayload**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#registry)

### Accessors

* [blockHash](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#blockhash)
* [encodedLength](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#encodedlength)
* [era](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#era)
* [genesisHash](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#genesishash)
* [hash](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#hash)
* [isEmpty](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#isempty)
* [method](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#method)
* [nonce](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#nonce)
* [specVersion](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#specversion)
* [tip](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tip)
* [transactionVersion](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#transactionversion)

### Methods

* [eq](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#eq)
* [sign](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#sign)
* [toHex](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohex)
* [toHuman](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tojson)
* [toRawType](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#torawtype)
* [toString](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tostring)
* [toU8a](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md#tou8a)

## Constructors

### constructor

\+ **new ExtrinsicPayload**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: Partial\<[ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md)> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string \| undefined, `__namedParameters`: { version: undefined \| number  }): [ExtrinsicPayload](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md)

*Overrides void*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:38](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L38)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`value` | Partial\<[ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md)> \| [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| string \| undefined | - |
`__namedParameters` | { version: undefined \| number  } | {} |

**Returns:** [ExtrinsicPayload](_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md)

## Properties

### registry

• `Readonly` **registry**: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#registry)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[registry](_packages_types_src_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:14](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L14)*

## Accessors

### blockHash

• get **blockHash**(): Hash

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:55](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L55)*

**`description`** The block [Hash](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#hash) the signature applies to (mortal/immortal)

**Returns:** Hash

___

### encodedLength

• get **encodedLength**(): number

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[encodedLength](_packages_types_src_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Base.ts:26](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L26)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** number

___

### era

• get **era**(): [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:62](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L62)*

**`description`** The [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

___

### genesisHash

• get **genesisHash**(): Hash

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:69](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L69)*

**`description`** The genesis block [Hash](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#hash) the signature applies to

**Returns:** Hash

___

### hash

• get **hash**(): H256

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[hash](_packages_types_src_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:33](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L33)*

**`description`** returns a hash of the contents

**Returns:** H256

___

### isEmpty

• get **isEmpty**(): boolean

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[isEmpty](_packages_types_src_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Base.ts:40](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L40)*

**`description`** Checks if the value is an empty value

**Returns:** boolean

___

### method

• get **method**(): [Raw](_packages_types_src_codec_raw_.raw.md)

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:77](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L77)*

**`description`** The [Raw](_packages_types_src_codec_raw_.raw.md) contained in the payload

**Returns:** [Raw](_packages_types_src_codec_raw_.raw.md)

___

### nonce

• get **nonce**(): [Compact](_packages_types_src_codec_compact_.compact.md)\<Index>

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:84](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L84)*

**`description`** The [Index](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#index)

**Returns:** [Compact](_packages_types_src_codec_compact_.compact.md)\<Index>

___

### specVersion

• get **specVersion**(): [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32)

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:91](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L91)*

**`description`** The specVersion as a [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32) for this payload

**Returns:** [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32)

___

### tip

• get **tip**(): [Compact](_packages_types_src_codec_compact_.compact.md)\<Balance>

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:99](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L99)*

**`description`** The [Balance](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#balance)

**Returns:** [Compact](_packages_types_src_codec_compact_.compact.md)\<Balance>

___

### transactionVersion

• get **transactionVersion**(): [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32)

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:107](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L107)*

**`description`** The transaction version as a [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32) for this payload

**Returns:** [u32](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#u32)

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[eq](_packages_types_src_codec_base_.base.md#eq)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:115](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L115)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md)): object

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:122](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L122)*

**`description`** Sign the payload with the keypair

#### Parameters:

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md) |

**Returns:** object

Name | Type |
------ | ------ |
`signature` | string |

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toHex](_packages_types_src_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Base.ts:54](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L54)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toHuman](_packages_types_src_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:137](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L137)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): any

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toJSON](_packages_types_src_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:144](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L144)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** any

___

### toRawType

▸ **toRawType**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Base](_packages_types_src_codec_base_.base.md).[toRawType](_packages_types_src_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Base.ts:90](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/codec/Base.ts#L90)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toString](_packages_types_src_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:151](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L151)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Overrides [Base](_packages_types_src_codec_base_.base.md).[toU8a](_packages_types_src_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/extrinsic/ExtrinsicPayload.ts:158](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/extrinsic/ExtrinsicPayload.ts#L158)*

**`description`** Returns a serialized u8a form

#### Parameters:

Name | Type |
------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)
