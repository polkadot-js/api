

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 [Base](_codec_base_.base.md)<`T`>

**↳ Struct**

↳  [Tuple](_codec_tuple_.tuple.md)

↳  [OuterDispatchCall](_metadata_.outerdispatchcall.md)

↳  [OuterDispatchMetadata](_metadata_.outerdispatchmetadata.md)

↳  [EventMetadata](_metadata_.eventmetadata.md)

↳  [OuterEventMetadata](_metadata_.outereventmetadata.md)

↳  [FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_.functionmetadata.md)

↳  [CallMetadata](_metadata_.callmetadata.md)

↳  [ModuleMetadata](_metadata_.modulemetadata.md)

↳  [StorageFunctionType$Map](_metadata_.storagefunctiontype_map.md)

↳  [StorageFunctionMetadata](_metadata_.storagefunctionmetadata.md)

↳  [StorageMetadata](_metadata_.storagemetadata.md)

↳  [RuntimeModuleMetadata](_metadata_.runtimemodulemetadata.md)

↳  [RuntimeMetadata](_metadata_.runtimemetadata.md)

↳  [SignaturePayload](_signaturepayload_.signaturepayload.md)

↳  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

↳  [Extrinsic](_extrinsic_.extrinsic.md)

↳  [Digest](_header_.digest.md)

↳  [Header](_header_.header.md)

↳  [Block](_block_.block.md)

↳  [KeyValue](_keyvalue_.keyvalue.md)

↳  [Justification](_bft_.justification.md)

↳  [BftAtReport](_misbehaviorreport_.bftatreport.md)

↳  [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

↳  [RuntimeVersion](_runtimeversion_.runtimeversion.md)

↳  [SignedBlock](_signedblock_.signedblock.md)

↳  [StorageChangeSet](_storagechangeset_.storagechangeset.md)

↳  [ValidatorPrefs](_validatorprefs_.validatorprefs.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: * `V` &#124; `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_codec_struct_.struct.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value |  `V` &#124; `Array`<`any`>|  {} as V |
| `Default value` jsonMap | `Map`<`keyof S`, `string`> |  new Map() |

**Returns:** [Struct](_codec_struct_.struct.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Defined in [codec/Struct.ts:114](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L114)*

**Returns:** `E`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L118)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:124](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:144](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Defined in [codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Defined in [codec/Struct.ts:169](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L169)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L158)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L181)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L173)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L190)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Defined in [codec/Struct.ts:49](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L49)*

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

*Defined in [codec/Struct.ts:104](https://github.com/polkadot-js/api/blob/106c59d/packages/types/src/codec/Struct.ts#L104)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

