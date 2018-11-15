

# Type parameters
#### T :  [Base](_codec_base_.base.md)
# Hierarchy

 [Base](_codec_base_.base.md)<`Array`<`T`>>

**↳ Vector**

↳  [Extrinsics](_extrinsics_.extrinsics.md)

↳  [Broadcast](_extrinsicstatus_.broadcast.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Vector**(Type: *`Constructor`<`T`>*, value?: * [Vector](_codec_vector_.vector.md)<`any`> &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): [Vector](_codec_vector_.vector.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Vector.ts:19](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L19)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`<`T`> | - |
| `Default value` value |  [Vector](_codec_vector_.vector.md)<`any`> &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>|  [] as Array&lt;any&gt; |

**Returns:** [Vector](_codec_vector_.vector.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Defined in [codec/Vector.ts:65](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L65)*

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Vector.ts:73](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L73)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [codec/Vector.ts:69](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L69)*

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(fn: *`function`*): `Array`<`T`>

*Defined in [codec/Vector.ts:79](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`T`>

___
<a id="find"></a>

##  find

▸ **find**(fn: *`function`*):  `T` &#124; `undefined`

*Defined in [codec/Vector.ts:83](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:**  `T` &#124; `undefined`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(fn: *`function`*): `any`

*Defined in [codec/Vector.ts:87](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L87)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `any`

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `T`

*Defined in [codec/Vector.ts:91](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L91)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="map"></a>

##  map

▸ **map**<`O`>(fn: *`function`*): `Array`<`O`>

*Defined in [codec/Vector.ts:95](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L95)*

**Type parameters:**

#### O 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`O`>

___
<a id="push"></a>

##  push

▸ **push**(item: *`T`*): `void`

*Defined in [codec/Vector.ts:99](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L99)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="reduce"></a>

##  reduce

▸ **reduce**<`O`>(fn: *`function`*, initial: *`O`*): `O`

*Defined in [codec/Vector.ts:103](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L103)*

**Type parameters:**

#### O 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |
| initial | `O` |

**Returns:** `O`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Vector.ts:107](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L107)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Vector.ts:126](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L126)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Vector.ts:113](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodevector"></a>

## `<Static>` decodeVector

▸ **decodeVector**<`T`>(Type: *`Constructor`<`T`>*, value: * [Vector](_codec_vector_.vector.md)<`any`> &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): `Array`<`T`>

*Defined in [codec/Vector.ts:29](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L29)*

**Type parameters:**

#### T :  [Base](_codec_base_.base.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`<`T`> |
| value |  [Vector](_codec_vector_.vector.md)<`any`> &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>|

**Returns:** `Array`<`T`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`Constructor`<`O`>*): `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

*Defined in [codec/Vector.ts:57](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Vector.ts#L57)*

**Type parameters:**

#### O :  [Base](_codec_base_.base.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Type | `Constructor`<`O`> |

**Returns:** `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

___

