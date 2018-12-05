

*__name__*: Proposal

*__description__*: A proposal in the system. It just extends [Method](_method_.method.md) (Proposal = Call in Rust)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Method](_method_.method.md)

**↳ Proposal**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Proposal**(value: *`any`*, meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): [Proposal](_proposal_.proposal.md)

*Inherited from [Method](_method_.method.md).[constructor](_method_.method.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Method.ts:71](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** [Proposal](_proposal_.proposal.md)

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

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L133)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Method](_method_.method.md).[args](_method_.method.md#args)*

*Defined in [Method.ts:196](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L196)*

*__description__*: The arguments for the function call

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="argsdef"></a>

##  argsDef

getargsDef(): `ArgsDef`

*Inherited from [Method](_method_.method.md).[argsDef](_method_.method.md#argsdef)*

*Defined in [Method.ts:204](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L204)*

*__description__*: Thge argument defintions

**Returns:** `ArgsDef`

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[callIndex](_method_.method.md#callindex)*

*Defined in [Method.ts:211](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L211)*

*__description__*: The encoded `[sectionIndex, methodIndex]` identifier

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from [Method](_method_.method.md).[data](_method_.method.md#data)*

*Defined in [Method.ts:218](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L218)*

*__description__*: The encoded data

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L140)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hasorigin"></a>

##  hasOrigin

gethasOrigin(): `boolean`

*Inherited from [Method](_method_.method.md).[hasOrigin](_method_.method.md#hasorigin)*

*Defined in [Method.ts:225](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L225)*

*__description__*: `true` if the `Origin` type is on the method (extrinsic method)

**Returns:** `boolean`

___
<a id="meta"></a>

##  meta

getmeta(): [FunctionMetadata](_metadata_.functionmetadata.md)

*Inherited from [Method](_method_.method.md).[meta](_method_.method.md#meta)*

*Defined in [Method.ts:234](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L234)*

*__description__*: The [FunctionMetadata](_metadata_.functionmetadata.md)

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

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

▸ **get**(name: *`keyof S`*):  [Codec](../interfaces/_types_.codec.md) &#124; `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L150)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:**  [Codec](../interfaces/_types_.codec.md) &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L157)*

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

*Defined in [codec/Struct.ts:164](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L164)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:171](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L171)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:178](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L178)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L192)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

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

▸ **filterOrigin**(meta?: *[FunctionMetadata](_metadata_.functionmetadata.md)*): `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

*Inherited from [Method](_method_.method.md).[filterOrigin](_method_.method.md#filterorigin)*

*Defined in [Method.ts:144](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` meta | [FunctionMetadata](_metadata_.functionmetadata.md) |

**Returns:** `Array`<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___
<a id="findfunction"></a>

## `<Static>` findFunction

▸ **findFunction**(callIndex: *`Uint8Array`*): [ExtrinsicFunction](../interfaces/_method_.extrinsicfunction.md)

*Inherited from [Method](_method_.method.md).[findFunction](_method_.method.md#findfunction)*

*Defined in [Method.ts:160](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callIndex | `Uint8Array` |

**Returns:** [ExtrinsicFunction](../interfaces/_method_.extrinsicfunction.md)

___
<a id="injectextrinsics"></a>

## `<Static>` injectExtrinsics

▸ **injectExtrinsics**(extrinsics: *[Extrinsics](../interfaces/_method_.extrinsics.md)*): `void`

*Inherited from [Method](_method_.method.md).[injectExtrinsics](_method_.method.md#injectextrinsics)*

*Defined in [Method.ts:185](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/Method.ts#L185)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsics | [Extrinsics](../interfaces/_method_.extrinsics.md) |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/fced67f/packages/types/src/codec/Struct.ts#L113)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

