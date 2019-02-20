

*__name__*: Struct

*__description__*: A Struct defines an Object with key/values - where the values are Codec values. It removes a lot of repetition from the actual coding, define a structure type, pass it the key/Codec values in the constructor and it manages the decoding. It is important that the constructor values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical, it needs to decoded in the specific defined order.

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Map`<`keyof S`, [Codec](../interfaces/_types_.codec.md)>

**↳ Struct**

↳  [FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

↳  [CallMetadata](_metadata_v0_modules_.callmetadata.md)

↳  [ModuleMetadata](_metadata_v0_modules_.modulemetadata.md)

↳  [MapType](_metadata_v0_modules_.maptype.md)

↳  [StorageFunctionMetadata](_metadata_v0_modules_.storagefunctionmetadata.md)

↳  [StorageMetadata](_metadata_v0_modules_.storagemetadata.md)

↳  [RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)

↳  [Method](_primitive_method_.method.md)

↳  [OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)

↳  [OuterDispatchMetadata](_metadata_v0_calls_.outerdispatchmetadata.md)

↳  [EventMetadata](_metadata_v0_events_.eventmetadata.md)

↳  [OuterEventMetadata](_metadata_v0_events_.outereventmetadata.md)

↳  [MetadataV0](_metadata_v0_index_.metadatav0.md)

↳  [MetadataCallArg](_metadata_v1_calls_.metadatacallarg.md)

↳  [MetadataCall](_metadata_v1_calls_.metadatacall.md)

↳  [MetadataEvent](_metadata_v1_events_.metadataevent.md)

↳  [MapType](_metadata_v1_storage_.maptype.md)

↳  [MetadataStorage](_metadata_v1_storage_.metadatastorage.md)

↳  [MetadataModule](_metadata_v1_index_.metadatamodule.md)

↳  [MetadataV1](_metadata_v1_index_.metadatav1.md)

↳  [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

↳  [CandidateReceipt](_type_attestedcandidate_.candidatereceipt.md)

↳  [AttestedCandidate](_type_attestedcandidate_.attestedcandidate.md)

↳  [RuntimeVersion](_type_runtimeversion_.runtimeversion.md)

↳  [SignaturePayload](_type_signaturepayload_.signaturepayload.md)

↳  [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

↳  [Extrinsic](_type_extrinsic_.extrinsic.md)

↳  [Digest](_type_digest_.digest.md)

↳  [Header](_type_header_.header.md)

↳  [Block](_type_block_.block.md)

↳  [Event](_type_event_.event.md)

↳  [EventRecord](_type_eventrecord_.eventrecord.md)

↳  [Health](_type_health_.health.md)

↳  [KeyValue](_type_keyvalue_.keyvalue.md)

↳  [BftAtReport](_type_misbehaviorreport_.bftatreport.md)

↳  [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

↳  [MisbehaviorReport](_type_misbehaviorreport_.misbehaviorreport.md)

↳  [RhdJustification](_type_justification_.rhdjustification.md)

↳  [PeerInfo](_type_peerinfo_.peerinfo.md)

↳  [PrefabWasmModule](_type_prefabwasmmodule_.prefabwasmmodule.md)

↳  [ReferendumInfo](_type_referenduminfo_.referenduminfo.md)

↳  [Schedule](_type_schedule_.schedule.md)

↳  [SignedBlock](_type_signedblock_.signedblock.md)

↳  [StorageChangeSet](_type_storagechangeset_.storagechangeset.md)

↳  [StoredPendingChange](_type_storedpendingchange_.storedpendingchange.md)

↳  [ValidatorPrefs](_type_validatorprefs_.validatorprefs.md)

↳  [VestingSchedule](_type_vestingschedule_.vestingschedule.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: *`V` \| `Map`<`any`, `any`> \| `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_codec_struct_.struct.md)

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value | `V` \| `Map`<`any`, `any`> \| `Array`<`any`> |  {} as V |
| `Default value` jsonMap | `Map`<`keyof S`, `string`> |  new Map() |

**Returns:** [Struct](_codec_struct_.struct.md)

___

# Properties

<a id="map"></a>

## `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L160)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L167)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L145)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L176)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Overrides Map.get*

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L184)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L191)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L198)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L205)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L212)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L226)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L234)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/d1825c7/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

