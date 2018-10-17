

Extrinsic function descriptor, as defined in [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Method**

↳  [Proposal](_proposal_.proposal.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Method**(value: *`any`*, meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): [Method](_method_.method.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Method.ts:41](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** [Method](_method_.method.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L118)*

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<[Base](_codec_base_.base.md)>

*Defined in [Method.ts:127](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L127)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Defined in [Method.ts:131](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L131)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Defined in [Method.ts:135](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L135)*

**Returns:** `Uint8Array`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Defined in [Method.ts:139](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L139)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L122)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:128](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L128)*

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

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L148)*

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

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L158)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L173)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:162](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L162)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:185](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L185)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:177](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L177)*

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

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L194)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodemethod"></a>

## `<Static>` decodeMethod

▸ **decodeMethod**(value: * `Uint8Array` &#124; `string` &#124; `DecodedMethod`*, _meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): `DecodedMethod`

*Defined in [Method.ts:54](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `Uint8Array` &#124; `string` &#124; `DecodedMethod`|
| `Optional` _meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `DecodedMethod`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:49](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L49)*

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
<a id="filterorigin"></a>

## `<Static>` filterOrigin

▸ **filterOrigin**(meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

*Defined in [Method.ts:79](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): `ExtrinsicFunction`

*Defined in [Method.ts:95](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** `ExtrinsicFunction`

___
<a id="injectextrinsics"></a>

## `<Static>` injectExtrinsics

▸ **injectExtrinsics**(extrinsics: *`Extrinsics`*): `void`

*Defined in [Method.ts:119](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/Method.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| extrinsics | `Extrinsics` |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/471bfce/packages/types/src/codec/Struct.ts#L108)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

