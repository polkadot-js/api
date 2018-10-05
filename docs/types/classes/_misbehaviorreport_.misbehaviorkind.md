

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>

**↳ MisbehaviorKind**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorKind**(index?: *`number`*, value?: *`BftAtReportValue`*): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [MisbehaviorReport.ts:57](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/MisbehaviorReport.ts#L57)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` index | `number` | 17 |
| `Optional` value | `BftAtReportValue` | - |

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[Type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:40](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L40)*

**Returns:** `string`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[byteLength](_codec_enumtype_.enumtype.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/EnumType.ts:44](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L44)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>>

*Inherited from [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Base.ts:29](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [EnumType](_codec_enumtype_.enumtype.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[fromU8a](_codec_enumtype_.enumtype.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/EnumType.ts:48](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)>

___
<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)> &#124; `number`*, value?: *`any`*): `void`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[setValue](_codec_enumtype_.enumtype.md#setvalue)*

*Defined in [codec/EnumType.ts:55](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` index |  [EnumType](_codec_enumtype_.enumtype.md)< [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md) &#124; [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)> &#124; `number`|
| `Optional` value | `any` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:72](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L72)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:76](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L76)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:80](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/EnumType.ts#L80)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:45](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

