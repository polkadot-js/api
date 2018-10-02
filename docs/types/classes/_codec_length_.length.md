

# Hierarchy

 [Base](_codec_base_.base.md)<`BN`>

**↳ Length**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Length**(value?: *[AnyNumber](../modules/_types_d_.md#anynumber)*, bitLength?: *`BitLength`*): [Length](_codec_length_.length.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Length.ts:26](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L26)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | [AnyNumber](../modules/_types_d_.md#anynumber) |  new BN(0) |
| `Default value` bitLength | `BitLength` | 32 |

**Returns:** [Length](_codec_length_.length.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`BN`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Length.ts:36](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L36)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Base](_codec_base_.base.md)<`BN`>

*Inherited from [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Base.ts:29](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Base.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Base](_codec_base_.base.md)<`BN`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Length](_codec_length_.length.md)

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Length.ts:40](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Length](_codec_length_.length.md)

___
<a id="setvalue"></a>

##  setValue

▸ **setValue**(value: * `BN` &#124; `number`*): `void`

*Defined in [codec/Length.ts:60](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `BN` &#124; `number`|

**Returns:** `void`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Length.ts:46](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L46)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Base.ts:37](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Base.ts#L37)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Length.ts:50](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L50)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Base.ts:41](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Base.ts#L41)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Length.ts:54](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Length.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

