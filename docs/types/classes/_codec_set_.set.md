

# Hierarchy

 [Base](_codec_base_.base.md)<`Array`<`string`>>

**↳ Set**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Set**(setValues: *`SetValues`*, value?: * `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): [Set](_codec_set_.set.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Set.ts:19](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| `Optional` value |  `Array`<`string`> &#124; `Uint8Array` &#124; `number`|

**Returns:** [Set](_codec_set_.set.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Set.ts:66](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L66)*

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Set.ts:70](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L70)*

**Returns:** `boolean`

___
<a id="valueencoded"></a>

##  valueEncoded

getvalueEncoded(): `number`

*Defined in [codec/Set.ts:78](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L78)*

**Returns:** `number`

___
<a id="values"></a>

##  values

getvalues(): `Array`<`string`>

*Defined in [codec/Set.ts:74](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L74)*

**Returns:** `Array`<`string`>

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Set.ts:82](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L82)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Set.ts:86](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L86)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Set.ts:94](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L94)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Set.ts:90](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: * `Array`<`string`> &#124; `Uint8Array` &#124; `number`*): `Array`<`string`>

*Defined in [codec/Set.ts:29](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L29)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value |  `Array`<`string`> &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Defined in [codec/Set.ts:60](https://github.com/polkadot-js/api/blob/df1c6dc/packages/types/src/codec/Set.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

