[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/extrinsic/v1/ExtrinsicPayload"](../modules/_packages_types_src_extrinsic_v1_extrinsicpayload_.md) › [ExtrinsicPayloadV1](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)

# Class: ExtrinsicPayloadV1

**`name`** GenericExtrinsicPayloadV1

**`description`** 
A signing payload for an [Extrinsic](_packages_types_src_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

  1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
  2+ bytes: The Function Descriptor as provided in the transaction itself.
  1/2 bytes: The Transaction Era as provided in the transaction itself.
  32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.

## Hierarchy

  ↳ [Struct](_packages_types_src_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV1**

## Implements

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#constructor)

### Properties

* [registry](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#readonly-registry)

### Accessors

* [Type](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#type)
* [blockHash](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#blockhash)
* [defKeys](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#defkeys)
* [encodedLength](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#encodedlength)
* [era](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#era)
* [hash](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#hash)
* [isEmpty](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#isempty)
* [method](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#method)
* [nonce](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#nonce)

### Methods

* [eq](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#eq)
* [get](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#get)
* [getAtIndex](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#getatindex)
* [sign](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#sign)
* [toArray](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#toarray)
* [toHex](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tohex)
* [toHuman](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tohuman)
* [toJSON](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tojson)
* [toRawType](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#torawtype)
* [toString](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tostring)
* [toU8a](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#tou8a)
* [typesToMap](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#static-typestomap)
* [with](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV1**(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value?`: [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV1](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

*Overrides [Struct](_packages_types_src_codec_struct_.struct.md).[constructor](_packages_types_src_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:24](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value?` | [ExtrinsicPayloadValue](../interfaces/_packages_types_src_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV1](_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md).[registry](../interfaces/_packages_types_src_types_codec_.codec.md#readonly-registry)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[registry](_packages_types_src_codec_struct_.struct.md#readonly-registry)*

*Defined in [packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L108)*

## Accessors

###  Type

• **get Type**(): *object*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[Type](_packages_types_src_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L171)*

**`description`** Returns the Type description to sthe structure

**Returns:** *object*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:40](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L40)*

**`description`** The block [Hash](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#hash) the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[defKeys](_packages_types_src_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L149)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[encodedLength](_packages_types_src_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L185)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:54](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L54)*

**`description`** The [ExtrinsicEra](_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[hash](_packages_types_src_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L196)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[isEmpty](_packages_types_src_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L156)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:47](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L47)*

**`description`** The [Bytes](_packages_types_src_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_packages_types_src_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_packages_types_src_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:61](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L61)*

**`description`** The [Index](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#index)

**Returns:** *[Compact](_packages_types_src_codec_compact_.compact.md)‹Index›*

## Methods

###  eq

▸ **eq**(`other?`: unknown): *boolean*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[eq](_packages_types_src_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L203)*

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

*Defined in [packages/types/src/codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L211)*

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

*Defined in [packages/types/src/codec/Struct.ts:218](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L218)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/extrinsic/v1/ExtrinsicPayload.ts:68](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/extrinsic/v1/ExtrinsicPayload.ts#L68)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_packages_types_src_types_interfaces_.ikeyringpair.md) |

**Returns:** *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toArray](_packages_types_src_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:225](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L225)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHex](_packages_types_src_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:232](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L232)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toHuman](_packages_types_src_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:239](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L239)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toJSON](_packages_types_src_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:252](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L252)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toRawType](_packages_types_src_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:276](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L276)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toString](_packages_types_src_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:285](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L285)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): *[Uint8Array](_packages_types_src_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

*Inherited from [Struct](_packages_types_src_codec_struct_.struct.md).[toU8a](_packages_types_src_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:293](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L293)*

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

*Defined in [packages/types/src/codec/Struct.ts:265](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L265)*

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

*Defined in [packages/types/src/codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_packages_types_src_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)‹[Struct](_packages_types_src_codec_struct_.struct.md)‹S››*
