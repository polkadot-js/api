

*__name__*: Set

*__description__*: An Set is an array of string values, represented an an encoded type by a bitwise representation of the values.

# Hierarchy

 [Base](_codec_base_.base.md)<`Array`<`string`>>

**↳ Set**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Set**(setValues: *`SetValues`*, value?: *`Array`<`string`> | `Uint8Array` | `number`*): [Set](_codec_set_.set.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Set.ts:22](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| `Optional` value | `Array`<`string`> | `Uint8Array` | `number` |

**Returns:** [Set](_codec_set_.set.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Set.ts:72](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L72)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Set.ts:79](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L79)*

*__description__*: true is the Set contains no values

**Returns:** `boolean`

___
<a id="valueencoded"></a>

##  valueEncoded

getvalueEncoded(): `number`

*Defined in [codec/Set.ts:93](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L93)*

*__description__*: The encoded value for the set members

**Returns:** `number`

___
<a id="values"></a>

##  values

getvalues(): `Array`<`string`>

*Defined in [codec/Set.ts:86](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L86)*

*__description__*: The actual set values as a Array

**Returns:** `Array`<`string`>

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Set.ts:100](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L100)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Set.ts:107](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L107)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Set.ts:114](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L114)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Set.ts:122](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L122)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeset"></a>

## `<Static>` decodeSet

▸ **decodeSet**(setValues: *`SetValues`*, value?: *`Array`<`string`> | `Uint8Array` | `number`*): `Array`<`string`>

*Defined in [codec/Set.ts:32](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| setValues | `SetValues` | - |
| `Default value` value | `Array`<`string`> | `Uint8Array` | `number` | 0 |

**Returns:** `Array`<`string`>

___
<a id="encodeset"></a>

## `<Static>` encodeSet

▸ **encodeSet**(setValues: *`SetValues`*, value: *`Array`<`string`>*): `number`

*Defined in [codec/Set.ts:63](https://github.com/polkadot-js/api/blob/87b5b91/packages/types/src/codec/Set.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| setValues | `SetValues` |
| value | `Array`<`string`> |

**Returns:** `number`

___

