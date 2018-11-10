

# Type parameters
#### T :  [Base](_codec_base_.base.md)
# Hierarchy

↳  [Vector](_codec_vector_.vector.md)

**↳ Broadcast**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Broadcast**(Type: *`Constructor`<`T`>*, value?: * [Vector](_codec_vector_.vector.md)<`any`> &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): [Broadcast](_extrinsicstatus_.broadcast.md)

*Inherited from [Vector](_codec_vector_.vector.md).[constructor](_codec_vector_.vector.md#constructor)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Vector.ts:20](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L20)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Type | `Constructor`<`T`> | - |
| `Default value` value |  [Vector](_codec_vector_.vector.md)<`any`> &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>|  [] as Array&lt;any&gt; |

**Returns:** [Broadcast](_extrinsicstatus_.broadcast.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Array`<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `string`

*Inherited from [Vector](_codec_vector_.vector.md).[Type](_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:68](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L68)*

**Returns:** `string`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[encodedLength](_codec_vector_.vector.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Vector.ts:76](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L76)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Vector](_codec_vector_.vector.md).[length](_codec_vector_.vector.md#length)*

*Defined in [codec/Vector.ts:72](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L72)*

**Returns:** `number`

___

# Methods

<a id="filter"></a>

##  filter

▸ **filter**(fn: *`function`*): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[filter](_codec_vector_.vector.md#filter)*

*Defined in [codec/Vector.ts:82](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `Array`<`T`>

___
<a id="find"></a>

##  find

▸ **find**(fn: *`function`*):  `T` &#124; `undefined`

*Inherited from [Vector](_codec_vector_.vector.md).[find](_codec_vector_.vector.md#find)*

*Defined in [codec/Vector.ts:86](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:**  `T` &#124; `undefined`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(fn: *`function`*): `any`

*Inherited from [Vector](_codec_vector_.vector.md).[forEach](_codec_vector_.vector.md#foreach)*

*Defined in [codec/Vector.ts:90](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** `any`

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `T`

*Inherited from [Vector](_codec_vector_.vector.md).[get](_codec_vector_.vector.md#get)*

*Defined in [codec/Vector.ts:94](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `T`

___
<a id="map"></a>

##  map

▸ **map**<`O`>(fn: *`function`*): `Array`<`O`>

*Inherited from [Vector](_codec_vector_.vector.md).[map](_codec_vector_.vector.md#map)*

*Defined in [codec/Vector.ts:98](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L98)*

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

*Inherited from [Vector](_codec_vector_.vector.md).[push](_codec_vector_.vector.md#push)*

*Defined in [codec/Vector.ts:102](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| item | `T` |

**Returns:** `void`

___
<a id="reduce"></a>

##  reduce

▸ **reduce**<`O`>(fn: *`function`*, initial: *`O`*): `O`

*Inherited from [Vector](_codec_vector_.vector.md).[reduce](_codec_vector_.vector.md#reduce)*

*Defined in [codec/Vector.ts:106](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L106)*

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

*Inherited from [Vector](_codec_vector_.vector.md).[toJSON](_codec_vector_.vector.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Vector.ts:110](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L110)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Vector](_codec_vector_.vector.md).[toString](_codec_vector_.vector.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Vector.ts:129](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L129)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Vector](_codec_vector_.vector.md).[toU8a](_codec_vector_.vector.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Vector.ts:116](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodevector"></a>

## `<Static>` decodeVector

▸ **decodeVector**<`T`>(Type: *`Constructor`<`T`>*, value: * [Vector](_codec_vector_.vector.md)<`any`> &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>*): `Array`<`T`>

*Inherited from [Vector](_codec_vector_.vector.md).[decodeVector](_codec_vector_.vector.md#decodevector)*

*Defined in [codec/Vector.ts:30](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L30)*

**Type parameters:**

#### T :  [Base](_codec_base_.base.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<`T`> |
| value |  [Vector](_codec_vector_.vector.md)<`any`> &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `string` &#124; `Array`<`any`>|

**Returns:** `Array`<`T`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`O`>(Type: *`Constructor`<`O`>*): `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

*Inherited from [Vector](_codec_vector_.vector.md).[with](_codec_vector_.vector.md#with)*

*Defined in [codec/Vector.ts:60](https://github.com/polkadot-js/api/blob/d5bca16/packages/types/src/codec/Vector.ts#L60)*

**Type parameters:**

#### O :  [Base](_codec_base_.base.md)
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `Constructor`<`O`> |

**Returns:** `Constructor`<[Vector](_codec_vector_.vector.md)<`O`>>

___

