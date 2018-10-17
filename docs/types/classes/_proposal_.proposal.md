

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Method](_method_.method.md)

**↳ Proposal**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Proposal**(value: *`any`*, meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): [Proposal](_proposal_.proposal.md)

*Inherited from [Method](_method_.method.md).[constructor](_method_.method.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Method.ts:41](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L41)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** [Proposal](_proposal_.proposal.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Method](_method_.method.md).[args](_method_.method.md#args)*

*Defined in [Method.ts:127](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L127)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[callIndex](_method_.method.md#callindex)*

*Defined in [Method.ts:131](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L131)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[data](_method_.method.md#data)*

*Defined in [Method.ts:135](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L135)*

**Returns:** `Uint8Array`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Inherited from [Method](_method_.method.md).[meta](_method_.method.md#meta)*

*Defined in [Method.ts:139](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L139)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L121)*

**Returns:** `number`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L127)*

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

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L142)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:131](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L131)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L154)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L146)*

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

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodemethod"></a>

## `<Static>` decodeMethod

▸ **decodeMethod**(value: * `Uint8Array` &#124; `string` &#124; `DecodedMethod`*, _meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): `DecodedMethod`

*Inherited from [Method](_method_.method.md).[decodeMethod](_method_.method.md#decodemethod)*

*Defined in [Method.ts:54](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L54)*

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

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L48)*

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

*Inherited from [Method](_method_.method.md).[filterOrigin](_method_.method.md#filterorigin)*

*Defined in [Method.ts:79](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): `ExtrinsicFunction`

*Inherited from [Method](_method_.method.md).[findFunction](_method_.method.md#findfunction)*

*Defined in [Method.ts:95](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** `ExtrinsicFunction`

___
<a id="injectextrinsics"></a>

## `<Static>` injectExtrinsics

▸ **injectExtrinsics**(extrinsics: *`Extrinsics`*): `void`

*Inherited from [Method](_method_.method.md).[injectExtrinsics](_method_.method.md#injectextrinsics)*

*Defined in [Method.ts:119](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/Method.ts#L119)*

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

*Defined in [codec/Struct.ts:107](https://github.com/polkadot-js/api/blob/94a202f/packages/types/src/codec/Struct.ts#L107)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

