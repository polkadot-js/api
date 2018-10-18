

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ RuntimeVersion**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RuntimeVersion**(value?: *`RuntimeVersionValue`*): [RuntimeVersion](_runtimeversion_.runtimeversion.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [RuntimeVersion.ts:51](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `RuntimeVersionValue` |

**Returns:** [RuntimeVersion](_runtimeversion_.runtimeversion.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="apis"></a>

##  apis

getapis(): [Vector](_codec_vector_.vector.md)<`RuntimeVersionApi`>

*Defined in [RuntimeVersion.ts:69](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L69)*

**Returns:** [Vector](_codec_vector_.vector.md)<`RuntimeVersionApi`>

___
<a id="authoringversion"></a>

##  authoringVersion

getauthoringVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:73](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L73)*

**Returns:** [U32](_u32_.u32.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___
<a id="implname"></a>

##  implName

getimplName(): [Text](_text_.text.md)

*Defined in [RuntimeVersion.ts:77](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L77)*

**Returns:** [Text](_text_.text.md)

___
<a id="implversion"></a>

##  implVersion

getimplVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:81](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L81)*

**Returns:** [U32](_u32_.u32.md)

___
<a id="specname"></a>

##  specName

getspecName(): [Text](_text_.text.md)

*Defined in [RuntimeVersion.ts:85](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L85)*

**Returns:** [Text](_text_.text.md)

___
<a id="specversion"></a>

##  specVersion

getspecVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:89](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/RuntimeVersion.ts#L89)*

**Returns:** [U32](_u32_.u32.md)

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from [Struct](_codec_struct_.struct.md).[keys](_codec_struct_.struct.md#keys)*

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L142)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[values](_codec_struct_.struct.md#values)*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L44)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |
| jsonMap | `Map`<`keyof S`, `string`> |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/55ac462/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

