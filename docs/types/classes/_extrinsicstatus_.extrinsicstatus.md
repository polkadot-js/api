

*__name__*: ExtrinsicStatus

*__description__*: An [EnumType](_codec_enumtype_.enumtype.md) that indicates the status of the [Extrinsic](_extrinsic_.extrinsic.md) as been submitted

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[Future](_extrinsicstatus_.future.md) | [Ready](_extrinsicstatus_.ready.md) | [Finalised](_extrinsicstatus_.finalised.md) | [Usurped](_extrinsicstatus_.usurped.md) | [Broadcast](_extrinsicstatus_.broadcast.md) | [Dropped](_extrinsicstatus_.dropped.md) | [Invalid](_extrinsicstatus_.invalid.md)>

**↳ ExtrinsicStatus**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicStatus**(value: *`any`*, index?: *`undefined` | `number`*): [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [ExtrinsicStatus.ts:72](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` index | `undefined` | `number` |

**Returns:** [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

___

# Accessors

<a id="asbroadcast"></a>

##  asBroadcast

getasBroadcast(): [Broadcast](_extrinsicstatus_.broadcast.md)

*Defined in [ExtrinsicStatus.ts:88](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L88)*

*__description__*: Returns the item as a [Broadcast](_extrinsicstatus_.broadcast.md)

**Returns:** [Broadcast](_extrinsicstatus_.broadcast.md)

___
<a id="asdropped"></a>

##  asDropped

getasDropped(): [Dropped](_extrinsicstatus_.dropped.md)

*Defined in [ExtrinsicStatus.ts:95](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L95)*

*__description__*: Returns the item as a [Dropped](_extrinsicstatus_.dropped.md)

**Returns:** [Dropped](_extrinsicstatus_.dropped.md)

___
<a id="asfinalised"></a>

##  asFinalised

getasFinalised(): [Finalised](_extrinsicstatus_.finalised.md)

*Defined in [ExtrinsicStatus.ts:102](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L102)*

*__description__*: Returns the item as a [Finalised](_extrinsicstatus_.finalised.md)

**Returns:** [Finalised](_extrinsicstatus_.finalised.md)

___
<a id="asfuture"></a>

##  asFuture

getasFuture(): [Future](_extrinsicstatus_.future.md)

*Defined in [ExtrinsicStatus.ts:109](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L109)*

*__description__*: Returns the item as a [Future](_extrinsicstatus_.future.md)

**Returns:** [Future](_extrinsicstatus_.future.md)

___
<a id="asinvalid"></a>

##  asInvalid

getasInvalid(): [Invalid](_extrinsicstatus_.invalid.md)

*Defined in [ExtrinsicStatus.ts:116](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L116)*

*__description__*: Returns the item as a [Invalid](_extrinsicstatus_.invalid.md)

**Returns:** [Invalid](_extrinsicstatus_.invalid.md)

___
<a id="asready"></a>

##  asReady

getasReady(): [Ready](_extrinsicstatus_.ready.md)

*Defined in [ExtrinsicStatus.ts:123](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L123)*

*__description__*: Returns the item as a [Ready](_extrinsicstatus_.ready.md)

**Returns:** [Ready](_extrinsicstatus_.ready.md)

___
<a id="asusurped"></a>

##  asUsurped

getasUsurped(): [Usurped](_extrinsicstatus_.usurped.md)

*Defined in [ExtrinsicStatus.ts:130](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/ExtrinsicStatus.ts#L130)*

*__description__*: Returns the item as a [Usurped](_extrinsicstatus_.usurped.md)

**Returns:** [Usurped](_extrinsicstatus_.usurped.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L97)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:104](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L104)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:111](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L111)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:118](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L118)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:125](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L125)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:132](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L132)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:139](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L139)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:146](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L146)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:153](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L153)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:161](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/EnumType.ts#L161)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

