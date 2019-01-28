

*__name__*: Vector

*__description__*: This manages codec arrays. Internally it keeps track of the length (as decoded) and allows construction with the passed `Type` in the constructor. It is an extension to Array, providing specific encoding/decoding on top of the base type.

# Type parameters
#### T :  [Codec](../interfaces/_types_.codec.md)
# Hierarchy

 `Array`<`T`>

**↳ Vector**

↳  [Extrinsics](_extrinsics_.extrinsics.md)

↳  [AuthoritiesChange](_digest_.authoritieschange.md)

↳  [Broadcast](_extrinsicstatus_.broadcast.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Indexable

\[n: `number`\]:&nbsp;`T`
# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Vector**(Type: *[Constructor](../modules/_types_.md#constructor)<`T`>*, value?: *[Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`>*): [Vector](_codec_vector_.vector.md)

*Defined in [codec/Vector.ts:22](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L22)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<`T`> | - |
| `Default value` value | [Vector](_codec_vector_.vector.md)<`any`> | `Uint8Array` | `string` | `Array`<`any`> |  [] as Array&lt;any&gt; |

**Returns:** [Vector](_codec_vector_.vector.md)

___

# Properties

<a id="array"></a>

## `<Static>` Array

**● Array**: *`ArrayConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es5.d.ts:1358*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Defined in [codec/Vector.ts:57](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L57)*

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Vector.ts:64](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L64)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Overrides Array.length*

*Defined in [codec/Vector.ts:73](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L73)*

*__description__*: The length of the value

**Returns:** `number`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Vector.ts:81](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L81)*

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

*Overrides Array.filter*

*Defined in [codec/Vector.ts:146](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L146)*

*__description__*: Filters the array with the callback

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  The filter function |
| `Optional` thisArg | `any` |  The \`this\` object to apply the result to |

**Returns:** `Array`<`T`>

___
<a id="map"></a>

##  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `Array`<`U`>

*Overrides Array.map*

*Defined in [codec/Vector.ts:155](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L155)*

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

*Defined in [codec/Vector.ts:88](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L88)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`T`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L95)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Vector.ts:102](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L102)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Overrides Array.toString*

*Defined in [codec/Vector.ts:111](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L111)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Vector.ts:124](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L124)*

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

*Defined in [codec/Vector.ts:32](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L32)*

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

*Defined in [codec/Vector.ts:49](https://github.com/polkadot-js/api/blob/b34277a/packages/types/src/codec/Vector.ts#L49)*

**Type parameters:**

#### O :  [Codec](../interfaces/_types_.codec.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | [Constructor](../modules/_types_.md#constructor)<`O`> |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Vector](_codec_vector_.vector.md)<`O`>>

___

