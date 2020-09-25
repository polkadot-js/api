**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/codec"](../modules/_packages_types_src_types_codec_.md) / Codec

# Interface: Codec

**`name`** Codec

**`description`** 
The base Codec interface. All types implement the interface provided here. Additionally
implementors can add their own specific interfaces and helpers with getters and functions.
The Codec Base is however required for operating as an encoding/decoding layer

## Hierarchy

* **Codec**

  ↳ [SignerPayloadType](_packages_types_src_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ [CompactEncodable](_packages_types_src_codec_compact_.compactencodable.md)

  ↳ [RegistryMetadataText](_packages_types_src_types_registry_.registrymetadatatext.md)

  ↳ [ICompact](_packages_types_src_types_interfaces_.icompact.md)

  ↳ [IMethod](_packages_types_src_types_interfaces_.imethod.md)

  ↳ [IU8a](_packages_types_src_types_interfaces_.iu8a.md)

  ↳ [IExtrinsicEra](_packages_types_src_types_extrinsic_.iextrinsicera.md)

  ↳ [IExtrinsicSignature](_packages_types_src_types_extrinsic_.iextrinsicsignature.md)

  ↳ [IExtrinsicImpl](_packages_types_src_types_extrinsic_.iextrinsicimpl.md)

## Implemented by

* [AbstractArray](../classes/_packages_types_src_codec_abstractarray_.abstractarray.md)
* [AccountIndex](../classes/_packages_types_src_generic_accountindex_.accountindex.md)
* [BTreeMap](../classes/_packages_types_src_codec_btreemap_.btreemap.md)
* [BTreeSet](../classes/_packages_types_src_codec_btreeset_.btreeset.md)
* [Base](../classes/_packages_types_src_codec_base_.base.md)
* [Block](../classes/_packages_types_src_generic_block_.block.md)
* [Bool](../classes/_packages_types_src_primitive_bool_.bool.md)
* [Call](../classes/_packages_types_src_generic_call_.call.md)
* [CodecDate](../classes/_packages_types_src_codec_date_.codecdate.md)
* [CodecMap](../classes/_packages_types_src_codec_map_.codecmap.md)
* [CodecSet](../classes/_packages_types_src_codec_set_.codecset.md)
* [ConsensusEngineId](../classes/_packages_types_src_generic_consensusengineid_.consensusengineid.md)
* [Data](../classes/_packages_types_src_primitive_data_.data.md)
* [DoNotConstruct](../classes/_packages_types_src_primitive_donotconstruct_.donotconstruct.md)
* [Enum](../classes/_packages_types_src_codec_enum_.enum.md)
* [Event](../classes/_packages_types_src_generic_event_.event.md)
* [EventData](../classes/_packages_types_src_generic_event_.eventdata.md)
* [Extrinsic](../classes/_packages_types_src_extrinsic_extrinsic_.extrinsic.md)
* [ExtrinsicEra](../classes/_packages_types_src_extrinsic_extrinsicera_.extrinsicera.md)
* [ExtrinsicPayload](../classes/_packages_types_src_extrinsic_extrinsicpayload_.extrinsicpayload.md)
* [ExtrinsicPayloadUnknown](../classes/_packages_types_src_extrinsic_extrinsicpayloadunknown_.extrinsicpayloadunknown.md)
* [ExtrinsicPayloadV1](../classes/_packages_types_src_extrinsic_v1_extrinsicpayload_.extrinsicpayloadv1.md)
* [ExtrinsicPayloadV2](../classes/_packages_types_src_extrinsic_v2_extrinsicpayload_.extrinsicpayloadv2.md)
* [ExtrinsicPayloadV3](../classes/_packages_types_src_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)
* [ExtrinsicPayloadV4](../classes/_packages_types_src_extrinsic_v4_extrinsicpayload_.extrinsicpayloadv4.md)
* [ExtrinsicSignatureV1](../classes/_packages_types_src_extrinsic_v1_extrinsicsignature_.extrinsicsignaturev1.md)
* [ExtrinsicSignatureV2](../classes/_packages_types_src_extrinsic_v2_extrinsicsignature_.extrinsicsignaturev2.md)
* [ExtrinsicSignatureV3](../classes/_packages_types_src_extrinsic_v3_extrinsicsignature_.extrinsicsignaturev3.md)
* [ExtrinsicSignatureV4](../classes/_packages_types_src_extrinsic_v4_extrinsicsignature_.extrinsicsignaturev4.md)
* [ExtrinsicUnknown](../classes/_packages_types_src_extrinsic_extrinsicunknown_.extrinsicunknown.md)
* [ExtrinsicV1](../classes/_packages_types_src_extrinsic_v1_extrinsic_.extrinsicv1.md)
* [ExtrinsicV2](../classes/_packages_types_src_extrinsic_v2_extrinsic_.extrinsicv2.md)
* [ExtrinsicV3](../classes/_packages_types_src_extrinsic_v3_extrinsic_.extrinsicv3.md)
* [ExtrinsicV4](../classes/_packages_types_src_extrinsic_v4_extrinsic_.extrinsicv4.md)
* [HashMap](../classes/_packages_types_src_codec_hashmap_.hashmap.md)
* [I128](../classes/_packages_types_src_primitive_i128_.i128.md)
* [I16](../classes/_packages_types_src_primitive_i16_.i16.md)
* [I256](../classes/_packages_types_src_primitive_i256_.i256.md)
* [I32](../classes/_packages_types_src_primitive_i32_.i32.md)
* [I64](../classes/_packages_types_src_primitive_i64_.i64.md)
* [I8](../classes/_packages_types_src_primitive_i8_.i8.md)
* [Int](../classes/_packages_types_src_codec_int_.int.md)
* [Linkage](../classes/_packages_types_src_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_packages_types_src_codec_linkage_.linkageresult.md)
* [LookupSource](../classes/_packages_types_src_ethereum_lookupsource_.lookupsource.md)
* [LookupSource](../classes/_packages_types_src_generic_lookupsource_.lookupsource.md)
* [MortalEra](../classes/_packages_types_src_extrinsic_extrinsicera_.mortalera.md)
* [Null](../classes/_packages_types_src_primitive_null_.null.md)
* [Option](../classes/_packages_types_src_codec_option_.option.md)
* [Result](../classes/_packages_types_src_codec_result_.result.md)
* [Struct](../classes/_packages_types_src_codec_struct_.struct.md)
* [StructAny](../classes/_packages_types_src_codec_structany_.structany.md)
* [Text](../classes/_packages_types_src_primitive_text_.text.md)
* [Tuple](../classes/_packages_types_src_codec_tuple_.tuple.md)
* [Type](../classes/_packages_types_src_primitive_type_.type.md)
* [U128](../classes/_packages_types_src_primitive_u128_.u128.md)
* [U16](../classes/_packages_types_src_primitive_u16_.u16.md)
* [U256](../classes/_packages_types_src_primitive_u256_.u256.md)
* [U32](../classes/_packages_types_src_primitive_u32_.u32.md)
* [U64](../classes/_packages_types_src_primitive_u64_.u64.md)
* [U8](../classes/_packages_types_src_primitive_u8_.u8.md)
* [UInt](../classes/_packages_types_src_codec_uint_.uint.md)
* [USize](../classes/_packages_types_src_primitive_usize_.usize.md)
* [Vec](../classes/_packages_types_src_codec_vec_.vec.md)
* [VecAny](../classes/_packages_types_src_codec_vecany_.vecany.md)
* [VecFixed](../classes/_packages_types_src_codec_vecfixed_.vecfixed.md)

## Index

### Properties

* [encodedLength](_packages_types_src_types_codec_.codec.md#encodedlength)
* [hash](_packages_types_src_types_codec_.codec.md#hash)
* [isEmpty](_packages_types_src_types_codec_.codec.md#isempty)
* [registry](_packages_types_src_types_codec_.codec.md#registry)

### Methods

* [eq](_packages_types_src_types_codec_.codec.md#eq)
* [toHex](_packages_types_src_types_codec_.codec.md#tohex)
* [toHuman](_packages_types_src_types_codec_.codec.md#tohuman)
* [toJSON](_packages_types_src_types_codec_.codec.md#tojson)
* [toRawType](_packages_types_src_types_codec_.codec.md#torawtype)
* [toString](_packages_types_src_types_codec_.codec.md#tostring)
* [toU8a](_packages_types_src_types_codec_.codec.md#tou8a)

## Properties

### encodedLength

• `Readonly` **encodedLength**: number

*Defined in [packages/types/src/types/codec.ts:23](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L23)*

**`description`** The length of the value when encoded as a Uint8Array

___

### hash

• `Readonly` **hash**: H256

*Defined in [packages/types/src/types/codec.ts:28](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L28)*

**`description`** Returns a hash of the value

___

### isEmpty

• `Readonly` **isEmpty**: boolean

*Defined in [packages/types/src/types/codec.ts:33](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L33)*

**`description`** Checks if the value is an empty value

___

### registry

• `Readonly` **registry**: [Registry](_packages_types_src_types_registry_.registry.md)

*Defined in [packages/types/src/types/codec.ts:38](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L38)*

**`description`** The registry associated with this object

## Methods

### eq

▸ **eq**(`other?`: unknown): boolean

*Defined in [packages/types/src/types/codec.ts:43](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L43)*

**`description`** Compares the value of the input to see if there is a match

#### Parameters:

Name | Type |
------ | ------ |
`other?` | unknown |

**Returns:** boolean

___

### toHex

▸ **toHex**(`isLe?`: undefined \| false \| true): string

*Defined in [packages/types/src/types/codec.ts:48](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L48)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

#### Parameters:

Name | Type |
------ | ------ |
`isLe?` | undefined \| false \| true |

**Returns:** string

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Defined in [packages/types/src/types/codec.ts:53](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L53)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toJSON

▸ **toJSON**(): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Defined in [packages/types/src/types/codec.ts:58](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L58)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

___

### toRawType

▸ **toRawType**(): string

*Defined in [packages/types/src/types/codec.ts:63](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L63)*

**`description`** Returns the base runtime type name for this instance

**Returns:** string

___

### toString

▸ **toString**(): string

*Defined in [packages/types/src/types/codec.ts:68](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L68)*

**`description`** Returns the string representation of the value

**Returns:** string

___

### toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts)): [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)

*Defined in [packages/types/src/types/codec.ts:74](https://github.com/polkadot-js/api/blob/ee6b6da02/packages/types/src/types/codec.ts#L74)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_packages_types_src_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array)
