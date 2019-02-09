

*__name__*: EnumType

*__description__*: This implements an enum, that based on the value wraps a different type. It is effectively an extension to enum where the value type is determined by the actual index.

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Codec](../interfaces/_types_.codec.md)>

**↳ EnumType**

↳  [ValidityAttestation](_attestedcandidate_.validityattestation.md)

↳  [StorageFunctionType](_metadata_v0_modules_.storagefunctiontype.md)

↳  [DigestItem](_digest_.digestitem.md)

↳  [Phase](_eventrecord_.phase.md)

↳  [MetadataStorageModifier](_metadata_v1_storage_.metadatastoragemodifier.md)

↳  [MetadataStorageType](_metadata_v1_storage_.metadatastoragetype.md)

↳  [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

↳  [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, value?: *`any`*, index?: *`number` | [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:32](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index | `number` | [EnumType](_codec_enumtype_.enumtype.md)<`T`> |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L101)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `number`

*Defined in [codec/EnumType.ts:108](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L108)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L115)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Defined in [codec/EnumType.ts:122](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L122)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L129)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/EnumType.ts:136](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L136)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/EnumType.ts:143](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L143)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/EnumType.ts:163](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L163)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/EnumType.ts:187](https://github.com/polkadot-js/api/blob/c1672e8/packages/types/src/codec/EnumType.ts#L187)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

