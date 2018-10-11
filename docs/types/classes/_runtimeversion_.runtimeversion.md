

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

*Defined in [RuntimeVersion.ts:51](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `RuntimeVersionValue` |

**Returns:** [RuntimeVersion](_runtimeversion_.runtimeversion.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[_Types](_codec_struct_.struct.md#_types)*

*Defined in [codec/Struct.ts:30](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L30)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from [Struct](_codec_struct_.struct.md).[_jsonMap](_codec_struct_.struct.md#_jsonmap)*

*Defined in [codec/Struct.ts:29](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L29)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L108)*

**Returns:** `E`

___
<a id="apis"></a>

##  apis

getapis(): [Vector](_codec_vector_.vector.md)<`RuntimeVersionApi`>

*Defined in [RuntimeVersion.ts:69](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L69)*

**Returns:** [Vector](_codec_vector_.vector.md)<`RuntimeVersionApi`>

___
<a id="authoringversion"></a>

##  authoringVersion

getauthoringVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:73](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L73)*

**Returns:** [U32](_u32_.u32.md)

___
<a id="implname"></a>

##  implName

getimplName(): [Text](_text_.text.md)

*Defined in [RuntimeVersion.ts:77](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L77)*

**Returns:** [Text](_text_.text.md)

___
<a id="implversion"></a>

##  implVersion

getimplVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:81](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L81)*

**Returns:** [U32](_u32_.u32.md)

___
<a id="specname"></a>

##  specName

getspecName(): [Text](_text_.text.md)

*Defined in [RuntimeVersion.ts:85](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L85)*

**Returns:** [Text](_text_.text.md)

___
<a id="specversion"></a>

##  specVersion

getspecVersion(): [U32](_u32_.u32.md)

*Defined in [RuntimeVersion.ts:89](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/RuntimeVersion.ts#L89)*

**Returns:** [U32](_u32_.u32.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L112)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L148)*

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

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L152)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L175)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L167)*

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

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L184)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L48)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:98](https://github.com/polkadot-js/api/blob/3c8c4b0/packages/types/src/codec/Struct.ts#L98)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

