

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ RuntimeMetadata**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RuntimeMetadata**(value?: *`any`*): [RuntimeMetadata](_metadata_.runtimemetadata.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata.ts:323](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L323)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [RuntimeMetadata](_metadata_.runtimemetadata.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `E`

___
<a id="calls"></a>

##  calls

getcalls(): [Vector](_codec_vector_.vector.md)<[OuterDispatchCall](_metadata_.outerdispatchcall.md)>

*Defined in [Metadata.ts:362](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L362)*

**Returns:** [Vector](_codec_vector_.vector.md)<[OuterDispatchCall](_metadata_.outerdispatchcall.md)>

___
<a id="events"></a>

##  events

getevents(): [Vector](_codec_vector_.vector.md)<[OuterEventMetadataEvent](_metadata_.outereventmetadataevent.md)>

*Defined in [Metadata.ts:366](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L366)*

**Returns:** [Vector](_codec_vector_.vector.md)<[OuterEventMetadataEvent](_metadata_.outereventmetadataevent.md)>

___
<a id="modules"></a>

##  modules

getmodules(): [Vector](_codec_vector_.vector.md)<[RuntimeModuleMetadata](_metadata_.runtimemodulemetadata.md)>

*Defined in [Metadata.ts:370](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L370)*

**Returns:** [Vector](_codec_vector_.vector.md)<[RuntimeModuleMetadata](_metadata_.runtimemodulemetadata.md)>

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L121)*

**Returns:** `number`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="getuniqtypes"></a>

##  getUniqTypes

▸ **getUniqTypes**(): `Array`<`string`>

*Defined in [Metadata.ts:375](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L375)*

**Returns:** `Array`<`string`>

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from [Struct](_codec_struct_.struct.md).[keys](_codec_struct_.struct.md#keys)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L142)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [Metadata.ts:358](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L358)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L154)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L146)*

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

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodemetadata"></a>

## `<Static>` decodeMetadata

▸ **decodeMetadata**(value: *`any`*):  `any` &#124; `Uint8Array`

*Defined in [Metadata.ts:332](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/Metadata.ts#L332)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L48)*

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

*Defined in [codec/Struct.ts:107](https://github.com/polkadot-js/api/blob/38e3f8c/packages/types/src/codec/Struct.ts#L107)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

