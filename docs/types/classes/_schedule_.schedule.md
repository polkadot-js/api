

*__name__*: Schedule

*__description__*: Definition of the cost schedule and other parameterizations for wasm vm

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Schedule**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Schedule**(value?: *`any`*): [Schedule](_schedule_.schedule.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Schedule.ts:14](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [Schedule](_schedule_.schedule.md)

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

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L145)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L152)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="growmemcost"></a>

##  growMemCost

getgrowMemCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:32](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L32)*

*__description__*: Gas cost of a growing memory by single page.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="maxmemorypages"></a>

##  maxMemoryPages

getmaxMemoryPages(): [U32](_u32_.u32.md)

*Defined in [Schedule.ts:39](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L39)*

*__description__*: What is the maximal memory pages amount is allowed to have for a contract.

**Returns:** [U32](_u32_.u32.md)

___
<a id="maxstackheight"></a>

##  maxStackHeight

getmaxStackHeight(): [U32](_u32_.u32.md)

*Defined in [Schedule.ts:46](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L46)*

*__description__*: How tall the stack is allowed to grow?

**Returns:** [U32](_u32_.u32.md)

___
<a id="putcodeperbytecost"></a>

##  putCodePerByteCost

getputCodePerByteCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:53](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L53)*

*__description__*: Cost of putting a byte of code into the storage.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="regularopcost"></a>

##  regularOpCost

getregularOpCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:60](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L60)*

*__description__*: Gas cost of a regular operation.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="returndataperbytecost"></a>

##  returnDataPerByteCost

getreturnDataPerByteCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:67](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L67)*

*__description__*: Gas cost per one byte returned.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="sandboxdatareadcost"></a>

##  sandboxDataReadCost

getsandboxDataReadCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:74](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L74)*

*__description__*: Gas cost per one byte read from the sandbox memory.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="sandboxdatawritecost"></a>

##  sandboxDataWriteCost

getsandboxDataWriteCost(): [Gas](_gas_.gas.md)

*Defined in [Schedule.ts:81](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L81)*

*__description__*: Gas cost per one byte written to the sandbox memory.

**Returns:** [Gas](_gas_.gas.md)

___
<a id="version"></a>

##  version

getversion(): [U32](_u32_.u32.md)

*Defined in [Schedule.ts:88](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/Schedule.ts#L88)*

*__description__*: Version of the schedule.

**Returns:** [U32](_u32_.u32.md)

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

*Defined in [codec/Struct.ts:161](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L161)*

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

*Defined in [codec/Struct.ts:169](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L169)*

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

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L176)*

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

*Defined in [codec/Struct.ts:183](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L183)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L190)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:197](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L197)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:211](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L211)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:219](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L219)*

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
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/29c83a0/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

