

# Hierarchy

 [Base](_codec_base_.base.md)<`Date`>

**↳ Moment**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Moment**(value?: * `Uint8Array` &#124; [Moment](_moment_.moment.md) &#124; `Date` &#124; `BN` &#124; `number`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Moment.ts:18](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L18)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  `Uint8Array` &#124; [Moment](_moment_.moment.md) &#124; `Date` &#124; `BN` &#124; `number`| 0 |

**Returns:** [Moment](_moment_.moment.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Date`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Moment.ts:43](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L43)*

**Returns:** `number`

___

# Methods

<a id="gettime"></a>

##  getTime

▸ **getTime**(): `number`

*Defined in [Moment.ts:47](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L47)*

**Returns:** `number`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [Moment.ts:63](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L63)*

**Returns:** `BN`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Moment.ts:51](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L51)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [Moment.ts:67](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L67)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Moment.ts:59](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L59)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Moment.ts:55](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: * [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`*): `Date`

*Defined in [Moment.ts:25](https://github.com/polkadot-js/api/blob/290123b/packages/types/src/Moment.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`|

**Returns:** `Date`

___

