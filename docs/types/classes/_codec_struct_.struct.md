

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

↳  [CandidateReceipt](_attestedcandidate_.candidatereceipt.md)

↳  [AttestedCandidate](_attestedcandidate_.attestedcandidate.md)

↳  [FunctionArgumentMetadata](_metadata_modules_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_modules_.functionmetadata.md)

↳  [CallMetadata](_metadata_modules_.callmetadata.md)

↳  [ModuleMetadata](_metadata_modules_.modulemetadata.md)

↳  [StorageFunctionType$Map](_metadata_modules_.storagefunctiontype_map.md)

↳  [StorageFunctionMetadata](_metadata_modules_.storagefunctionmetadata.md)

↳  [StorageMetadata](_metadata_modules_.storagemetadata.md)

↳  [RuntimeModuleMetadata](_metadata_modules_.runtimemodulemetadata.md)

↳  [Method](_method_.method.md)

↳  [SignaturePayload](_signaturepayload_.signaturepayload.md)

↳  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

↳  [Extrinsic](_extrinsic_.extrinsic.md)

↳  [Digest](_digest_.digest.md)

↳  [Header](_header_.header.md)

↳  [Block](_block_.block.md)

↳  [OuterDispatchCall](_metadata_calls_.outerdispatchcall.md)

↳  [OuterDispatchMetadata](_metadata_calls_.outerdispatchmetadata.md)

↳  [EventMetadata](_metadata_events_.eventmetadata.md)

↳  [OuterEventMetadata](_metadata_events_.outereventmetadata.md)

↳  [Metadata](_metadata_index_.metadata.md)

↳  [Event](_event_.event.md)

↳  [EventRecord](_eventrecord_.eventrecord.md)

↳  [Health](_health_.health.md)

↳  [KeyValue](_keyvalue_.keyvalue.md)

↳  [BftAtReport](_misbehaviorreport_.bftatreport.md)

↳  [BftProposeOutOfTurn](_misbehaviorreport_.bftproposeoutofturn.md)

↳  [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

↳  [RhdJustification](_justification_.rhdjustification.md)

↳  [PeerInfo](_peerinfo_.peerinfo.md)

↳  [ReferendumInfo](_referenduminfo_.referenduminfo.md)

↳  [RuntimeVersion](_runtimeversion_.runtimeversion.md)

↳  [SignedBlock](_signedblock_.signedblock.md)

↳  [StorageChangeSet](_storagechangeset_.storagechangeset.md)

↳  [StoredPendingChange](_storedpendingchange_.storedpendingchange.md)

↳  [ValidatorPrefs](_validatorprefs_.validatorprefs.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: *`V` | `Map`<`any`, `any`> | `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_codec_struct_.struct.md)

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value | `V` | `Map`<`any`, `any`> | `Array`<`any`> |  {} as V |
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

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Overrides Map.get*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L159)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) | `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L166)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L201)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/f5b3d58/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

