

*__name__*: ExtrinsicStatus

*__description__*: An [EnumType](_codec_enumtype_.enumtype.md) that indicates the status of the [Extrinsic](_extrinsic_.extrinsic.md) as been submitted

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [Finalised](_extrinsicstatus_.finalised.md) &#124; [Usurped](_extrinsicstatus_.usurped.md) &#124; [Broadcast](_extrinsicstatus_.broadcast.md) &#124; [Dropped](_extrinsicstatus_.dropped.md)>

**↳ ExtrinsicStatus**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicStatus**(value: *`any`*, index?: * `undefined` &#124; `number`*): [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [ExtrinsicStatus.ts:48](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/ExtrinsicStatus.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` index |  `undefined` &#124; `number`|

**Returns:** [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:90](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L90)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L97)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:104](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L104)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:111](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L111)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:118](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L118)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:125](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L125)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:132](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L132)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:139](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L139)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:146](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L146)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:154](https://github.com/polkadot-js/api/blob/4ef8bd3/packages/types/src/codec/EnumType.ts#L154)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

