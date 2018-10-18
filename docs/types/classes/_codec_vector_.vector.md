

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

⊕ **new Vector**(Type: *`Constructor`<`T`>*, value?: * `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): [Vector](_codec_vector_.vector.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Vector.ts:20](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L20)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`<`T`> | - |
| `Default value` value |  `Uint8Array` &#124; `string` &#124; `Array`<`any`>|  [] as Array&lt;any&gt; |

**Returns:** [Vector](_codec_vector_.vector.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Defined in [codec/Vector.ts:64](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L64)*

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Vector.ts:72](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L72)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Defined in [codec/Vector.ts:68](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L68)*

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(fn: *`function`*): `Array`<`T`>

*Defined in [codec/Vector.ts:78](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`T`>

___
<a id="find"></a>

##  find

▸ **find**(fn: *`function`*):  `T` &#124; `undefined`

*Defined in [codec/Vector.ts:82](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:**  `T` &#124; `undefined`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(fn: *`function`*): `any`

*Defined in [codec/Vector.ts:86](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `any`

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `T`

*Defined in [codec/Vector.ts:90](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="map"></a>

##  map

▸ **map**<`O`>(fn: *`function`*): `Array`<`O`>

*Defined in [codec/Vector.ts:94](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L94)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`O`>

___
<a id="push"></a>

##  push

▸ **push**(item: *`T`*): `void`

*Defined in [codec/Vector.ts:98](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="reduce"></a>

##  reduce

▸ **reduce**<`O`>(fn: *`function`*, initial: *`O`*): `O`

*Defined in [codec/Vector.ts:102](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L102)*

**Type parameters:**

#### O 
**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |
| initial | `O` |

**Returns:** `O`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Vector.ts:106](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L106)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Vector.ts:125](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L125)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Vector.ts:112](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L112)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`T`>(Type: *`Constructor`<`T`>*, value: * `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): `Array`<`T`>

*Defined in [codec/Vector.ts:30](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L30)*

**Type parameters:**

#### T :  [Base](_codec_base_.base.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<`T`> |
| value |  `Uint8Array` &#124; `string` &#124; `Array`<`any`>|

**Returns:** `Array`<`T`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`Constructor`<`O`>*): `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

*Defined in [codec/Vector.ts:56](https://github.com/polkadot-js/api/blob/008c78f/packages/types/src/codec/Vector.ts#L56)*

**Type parameters:**

#### O :  [Base](_codec_base_.base.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<`O`> |

**Returns:** `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

___

