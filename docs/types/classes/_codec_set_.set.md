

# Hierarchy

 [Base](_codec_base_.base.md)<`Array`<`string`>>

**↳ Set**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Set**(setValues: *`SetValues`*, value?: * [U8a](_codec_u8a_.u8a.md) &#124; `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): [Set](_codec_set_.set.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Set.ts:19](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| setValues | `SetValues` |
| `Optional` value |  [U8a](_codec_u8a_.u8a.md) &#124; `Array`<`string`> &#124; `Uint8Array` &#124; `number`|

**Returns:** [Set](_codec_set_.set.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`string`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Set.ts:68](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L68)*

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Set.ts:72](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L72)*

**Returns:** `boolean`

___
<a id="valueencoded"></a>

##  valueEncoded

getvalueEncoded(): `number`

*Defined in [codec/Set.ts:80](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L80)*

**Returns:** `number`

___
<a id="values"></a>

##  values

getvalues(): `Array`<`string`>

*Defined in [codec/Set.ts:76](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L76)*

**Returns:** `Array`<`string`>

___

# Methods

<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Set.ts:84](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L84)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Set.ts:92](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L92)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Set.ts:88](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: * [U8a](_codec_u8a_.u8a.md) &#124; `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): `Array`<`string`>

*Defined in [codec/Set.ts:29](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L29)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value |  [U8a](_codec_u8a_.u8a.md) &#124; `Array`<`string`> &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Defined in [codec/Set.ts:62](https://github.com/polkadot-js/api/blob/f6506db/packages/types/src/codec/Set.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

