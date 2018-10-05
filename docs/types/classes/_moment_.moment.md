

# Hierarchy

 [Base](_codec_base_.base.md)<`Date`>

**↳ Moment**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Moment**(value?: * `Uint8Array` &#124; [Moment](_moment_.moment.md) &#124; `Date` &#124; `BN` &#124; `number`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Moment.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L19)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [Moment.ts:40](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L40)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [Moment.ts:44](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L44)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Moment](_moment_.moment.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Moment](_moment_.moment.md)

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [Moment.ts:50](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Moment](_moment_.moment.md)

___
<a id="gettime"></a>

##  getTime

▸ **getTime**(): `number`

*Defined in [Moment.ts:58](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L58)*

**Returns:** `number`

___
<a id="tobn"></a>

##  toBn

▸ **toBn**(): `BN`

*Defined in [Moment.ts:74](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L74)*

**Returns:** `BN`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Moment.ts:62](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L62)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [Moment.ts:78](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L78)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Moment.ts:70](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L70)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Moment.ts:66](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**(value: * `Uint8Array` &#124; [Moment](_moment_.moment.md) &#124; `number` &#124; `BN`*): `Date`

*Defined in [Moment.ts:28](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Moment.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `Uint8Array` &#124; [Moment](_moment_.moment.md) &#124; `number` &#124; `BN`|

**Returns:** `Date`

___

