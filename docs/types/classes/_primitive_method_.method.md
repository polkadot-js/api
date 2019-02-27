

*__name__*: Method

*__description__*: Extrinsic function descriptor, as defined in [https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node](https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node).

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Method**

↳  [Proposal](_type_proposal_.proposal.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Method**(value: *`any`*, meta?: *[FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)*): [Method](_primitive_method_.method.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Method.ts:70](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md) |

**Returns:** [Method](_primitive_method_.method.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L160)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

**get args**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [primitive/Method.ts:192](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L192)*

*__description__*: The arguments for the function call

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="argsdef"></a>

##  argsDef

**get argsDef**(): `ArgsDef`

*Defined in [primitive/Method.ts:200](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L200)*

*__description__*: Thge argument defintions

**Returns:** `ArgsDef`

___
<a id="callindex"></a>

##  callIndex

**get callIndex**(): `Uint8Array`

*Defined in [primitive/Method.ts:207](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L207)*

*__description__*: The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

**get data**(): `Uint8Array`

*Defined in [primitive/Method.ts:214](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L214)*

*__description__*: The encoded data

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L167)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hasorigin"></a>

##  hasOrigin

**get hasOrigin**(): `boolean`

*Defined in [primitive/Method.ts:221](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L221)*

*__description__*: `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L145)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="meta"></a>

##  meta

**get meta**(): [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

*Defined in [primitive/Method.ts:230](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L230)*

*__description__*: The [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

**Returns:** [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

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

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L176)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L184)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L191)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
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

▸ **set**(key: *`keyof S`*, value: *[Codec](../interfaces/_types_.codec.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Codec](../interfaces/_types_.codec.md) |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L198)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L205)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L212)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L226)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L234)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="filterorigin"></a>

## `<Static>` filterOrigin

▸ **filterOrigin**(meta?: *[FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)*): `Array`<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

*Defined in [primitive/Method.ts:140](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L140)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): [MethodFunction](../interfaces/_primitive_method_.methodfunction.md)

*Defined in [primitive/Method.ts:156](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L156)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** [MethodFunction](../interfaces/_primitive_method_.methodfunction.md)

___
<a id="injectmethods"></a>

## `<Static>` injectMethods

▸ **injectMethods**(moduleMethods: *[ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md)*): `void`

*Defined in [primitive/Method.ts:181](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/primitive/Method.ts#L181)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| moduleMethods | [ModulesWithMethods](../interfaces/_primitive_method_.moduleswithmethods.md) |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/255b495/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___

