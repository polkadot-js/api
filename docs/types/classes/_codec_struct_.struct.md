

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Map`<`keyof S`, [Base](_codec_base_.base.md)>

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

↳  [Digest](_digest_.digest.md)

↳  [Header](_header_.header.md)

↳  [Block](_block_.block.md)

↳  [Event](_event_.event.md)

↳  [EventRecord](_eventrecord_.eventrecord.md)

↳  [KeyValue](_keyvalue_.keyvalue.md)

↳  [Justification](_bft_.justification.md)

↳  [BftAtReport](_misbehaviorreport_.bftatreport.md)

↳  [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

↳  [RuntimeVersion](_runtimeversion_.runtimeversion.md)

↳  [SignedBlock](_signedblock_.signedblock.md)

↳  [StorageChangeSet](_storagechangeset_.storagechangeset.md)

↳  [ValidatorPrefs](_validatorprefs_.validatorprefs.md)

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: * `V` &#124; `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_codec_struct_.struct.md)

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L27)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value |  `V` &#124; `Array`<`any`>|  {} as V |
| `Default value` jsonMap | `Map`<`keyof S`, `string`> |  new Map() |

**Returns:** [Struct](_codec_struct_.struct.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *"Map"*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="raw"></a>

##  raw

**● raw**: *`Map`<`keyof S`, [Base](_codec_base_.base.md)>*

*Defined in [codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L25)*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___
<a id="map"></a>

## `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:35*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L123)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `number`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, [Base](_codec_base_.base.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Base](_codec_base_.base.md)]>

___
<a id="clear"></a>

##  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

##  delete

▸ **delete**(key: *`keyof S`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, [Base](_codec_base_.base.md)]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Base](_codec_base_.base.md)]>

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`keyof S`*):  [Base](_codec_base_.base.md) &#124; `undefined`

*Inherited from Map.get*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:**  [Base](_codec_base_.base.md) &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L133)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`keyof S`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof S`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`keyof S`*, value: *[Base](_codec_base_.base.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Base](_codec_base_.base.md) |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Base](_codec_base_.base.md)>

*Defined in [codec/Struct.ts:137](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L137)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L141)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L145)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L156)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Base](_codec_base_.base.md)>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Base](_codec_base_.base.md)>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/50d23b7/packages/types/src/codec/Struct.ts#L113)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

