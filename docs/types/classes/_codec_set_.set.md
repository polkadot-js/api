

# Hierarchy

 [Base](_codec_base_.base.md)<`Array`<`string`>>

**↳ Set**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Set**(setValues: *`SetValues`*, value?: * `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): [Set](_codec_set_.set.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Set.ts:18](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| setValues | `SetValues` |
| `Optional` value |  `Array`<`string`> &#124; `Uint8Array` &#124; `number`|

**Returns:** [Set](_codec_set_.set.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`string`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Set.ts:65](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L65)*

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Set.ts:69](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L69)*

**Returns:** `boolean`

___
<a id="valueencoded"></a>

##  valueEncoded

getvalueEncoded(): `number`

*Defined in [codec/Set.ts:77](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L77)*

**Returns:** `number`

___
<a id="values"></a>

##  values

getvalues(): `Array`<`string`>

*Defined in [codec/Set.ts:73](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L73)*

**Returns:** `Array`<`string`>

___

# Methods

<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Set.ts:81](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L81)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Set.ts:89](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L89)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Set.ts:85](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: * `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): `Array`<`string`>

*Defined in [codec/Set.ts:28](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L28)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value |  `Array`<`string`> &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Defined in [codec/Set.ts:59](https://github.com/polkadot-js/api/blob/e597f1b/packages/types/src/codec/Set.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

