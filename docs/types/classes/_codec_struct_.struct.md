

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

↳  [Method](_method_.method.md)

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

*Defined in [codec/Struct.ts:26](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L26)*

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

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

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

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

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

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

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
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Defined in [codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

