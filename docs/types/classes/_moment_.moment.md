

# Hierarchy

 [Base](_codec_base_.base.md)<`Date`>

**↳ Moment**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Moment**(value?: * [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Moment.ts:19](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`| 0 |

**Returns:** [Moment](_moment_.moment.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Date`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="bitlength"></a>

##  bitLength

getbitLength(): [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

*Defined in [Moment.ts:46](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L46)*

**Returns:** [UIntBitLength](../modules/_codec_uint_.md#uintbitlength)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Moment.ts:50](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L50)*

**Returns:** `number`

___

# Methods

<a id="gettime"></a>

##  getTime

▸ **getTime**(): `number`

*Defined in [Moment.ts:54](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L54)*

**Returns:** `number`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [Moment.ts:74](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L74)*

**Returns:** `BN`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Moment.ts:58](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L58)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Moment.ts:62](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L62)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [Moment.ts:78](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L78)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Moment.ts:70](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L70)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Moment.ts:66](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodemoment"></a>

## `<Static>` decodeMoment

▸ **decodeMoment**(value: * [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`*): `Date`

*Defined in [Moment.ts:26](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/Moment.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Moment](_moment_.moment.md) &#124; `Date` &#124; `AnyNumber`|

**Returns:** `Date`

___

