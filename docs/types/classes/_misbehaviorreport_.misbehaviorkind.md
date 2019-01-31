

*__name__*: MisbehaviorKind

*__description__*: An [EnumType](_codec_enumtype_.enumtype.md) containing a Bft misbehaviour

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[BftProposeOutOfTurn](_misbehaviorreport_.bftproposeoutofturn.md) | [BftDoublePropose](_misbehaviorreport_.bftdoublepropose.md) | [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) | [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>

**↳ MisbehaviorKind**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorKind**(value?: *`BftAtReportValue` | `Uint8Array`*, index?: *`undefined` | `number`*): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [MisbehaviorReport.ts:121](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/MisbehaviorReport.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `BftAtReportValue` | `Uint8Array` |
| `Optional` index | `undefined` | `number` |

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___

# Accessors

<a id="asbftdoublecommit"></a>

##  asBftDoubleCommit

getasBftDoubleCommit(): [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)

*Defined in [MisbehaviorReport.ts:134](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/MisbehaviorReport.ts#L134)*

*__description__*: Returns the item as a [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)

**Returns:** [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)

___
<a id="asbftdoubleprepare"></a>

##  asBftDoublePrepare

getasBftDoublePrepare(): [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md)

*Defined in [MisbehaviorReport.ts:141](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/MisbehaviorReport.ts#L141)*

*__description__*: Returns the item as a [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md)

**Returns:** [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md)

___
<a id="asbftdoublepropose"></a>

##  asBftDoublePropose

getasBftDoublePropose(): [BftDoublePropose](_misbehaviorreport_.bftdoublepropose.md)

*Defined in [MisbehaviorReport.ts:148](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/MisbehaviorReport.ts#L148)*

*__description__*: Returns the item as a [BftDoublePropose](_misbehaviorreport_.bftdoublepropose.md)

**Returns:** [BftDoublePropose](_misbehaviorreport_.bftdoublepropose.md)

___
<a id="asbftproposeoutofturn"></a>

##  asBftProposeOutOfTurn

getasBftProposeOutOfTurn(): [BftProposeOutOfTurn](_misbehaviorreport_.bftproposeoutofturn.md)

*Defined in [MisbehaviorReport.ts:155](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/MisbehaviorReport.ts#L155)*

*__description__*: Returns the item as a [BftProposeOutOfTurn](_misbehaviorreport_.bftproposeoutofturn.md)

**Returns:** [BftProposeOutOfTurn](_misbehaviorreport_.bftproposeoutofturn.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L101)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:108](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L108)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isnone"></a>

##  isNone

getisNone(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:115](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L115)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:122](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L122)*

*__description__*: Checks if the Enum points to a [Null](_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:129](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L129)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:136](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L136)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:143](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L143)*

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

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:156](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L156)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:163](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L163)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:187](https://github.com/polkadot-js/api/blob/8341538/packages/types/src/codec/EnumType.ts#L187)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

