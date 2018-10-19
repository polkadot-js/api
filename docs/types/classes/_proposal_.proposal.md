

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

*Defined in [Method.ts:41](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L41)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Method](_method_.method.md).[args](_method_.method.md#args)*

*Defined in [Method.ts:149](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L149)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="argsdef"></a>

##  argsDef

getargsDef(): `ArgsDef`

*Inherited from [Method](_method_.method.md).[argsDef](_method_.method.md#argsdef)*

*Defined in [Method.ts:153](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L153)*

**Returns:** `ArgsDef`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[callIndex](_method_.method.md#callindex)*

*Defined in [Method.ts:157](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L157)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[data](_method_.method.md#data)*

*Defined in [Method.ts:161](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L161)*

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Inherited from [Method](_method_.method.md).[meta](_method_.method.md#meta)*

*Defined in [Method.ts:165](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L165)*

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L123)*

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

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L142)*

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

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L44)*

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

*Defined in [Method.ts:101](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L101)*

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

*Defined in [Method.ts:117](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L117)*

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

*Defined in [Method.ts:141](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/Method.ts#L141)*

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

*Defined in [codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

