

*__name__*: AuthoritiesChange

*__description__*: Log for Authories changed

# Type parameters
#### T :  [Codec](../interfaces/_types_.codec.md)
# Hierarchy

↳  [Vector](_codec_vector_.vector.md)

**↳ AuthoritiesChange**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;`T`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new AuthoritiesChange**(Type: *[Constructor](../modules/_types_.md#constructor)<`T`>*, value?: *[Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`>*): [AuthoritiesChange](_digest_.authoritieschange.md)

*Inherited from [Vector](_codec_vector_.vector.md).[constructor](_codec_vector_.vector.md#constructor)*

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<`T`> | - |
| `Default value` value | [Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`> |  [] as Array&lt;any&gt; |

**Returns:** [AuthoritiesChange](_digest_.authoritieschange.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Inherited from [Vector](_codec_vector_.vector.md).[Type](_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:56](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L56)*

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[encodedLength](_codec_vector_.vector.md#encodedlength)*

*Defined in [codec/Vector.ts:63](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L63)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[length](_codec_vector_.vector.md#length)*

*Overrides Array.length*

*Defined in [codec/Vector.ts:72](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L72)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Vector](_codec_vector_.vector.md).[eq](_codec_vector_.vector.md#eq)*

*Defined in [codec/Vector.ts:80](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L80)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="filter"></a>

##  filter

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[filter](_codec_vector_.vector.md#filter)*

*Overrides Array.filter*

*Defined in [codec/Vector.ts:163](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L163)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<`T`>

___
<a id="indexof"></a>

##  indexOf

▸ **indexOf**(_other?: *`any`*): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[indexOf](_codec_vector_.vector.md#indexof)*

*Overrides Array.indexOf*

*Defined in [codec/Vector.ts:87](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L87)*

*__description__*: Finds the index of the value in the array

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` _other | `any` |

**Returns:** `number`

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Inherited from [Vector](_codec_vector_.vector.md).[map](_codec_vector_.vector.md#map)*

*Overrides Array.map*

*Defined in [codec/Vector.ts:172](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L172)*

*__description__*: Maps the array with the callback

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The mapping function |
| `Optional` thisArg | `any` |  The \`this\` onject to apply the result to |

**Returns:** `Array`<`U`>

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[toArray](_codec_vector_.vector.md#toarray)*

*Defined in [codec/Vector.ts:105](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L105)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`T`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Vector](_codec_vector_.vector.md).[toHex](_codec_vector_.vector.md#tohex)*

*Defined in [codec/Vector.ts:112](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L112)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Vector](_codec_vector_.vector.md).[toJSON](_codec_vector_.vector.md#tojson)*

*Defined in [codec/Vector.ts:119](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L119)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Vector](_codec_vector_.vector.md).[toString](_codec_vector_.vector.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Vector.ts:128](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L128)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Vector](_codec_vector_.vector.md).[toU8a](_codec_vector_.vector.md#tou8a)*

*Defined in [codec/Vector.ts:141](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L141)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodevector"></a>

## `<Static>` decodeVector

▸ **decodeVector**<`T`>(Type: *[Constructor](../modules/_types_.md#constructor)<`T`>*, value: *[Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`>*): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[decodeVector](_codec_vector_.vector.md#decodevector)*

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L32)*

**Type parameters:**

#### T :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<`T`> |
| value | [Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`> |

**Returns:** `Array`<`T`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *[Constructor](../modules/_types_.md#constructor)<`O`>*): [Constructor](../modules/_types_.md#constructor)<[Vector](_codec_vector_.vector.md)<`O`>>

*Inherited from [Vector](_codec_vector_.vector.md).[with](_codec_vector_.vector.md#with)*

*Defined in [codec/Vector.ts:48](https://github.com/polkadot-js/api/blob/15b22da/packages/types/src/codec/Vector.ts#L48)*

**Type parameters:**

#### O :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<`O`> |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Vector](_codec_vector_.vector.md)<`O`>>

___

