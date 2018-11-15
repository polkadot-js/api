

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ Event**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Event**(_value: *`Uint8Array`*): [Event](_event_.event.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Event.ts:56](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _value | `Uint8Array` |

**Returns:** [Event](_event_.event.md)

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

*Inherited from [Struct](_codec_struct_.struct.md).[raw](_codec_struct_.struct.md#raw)*

*Defined in [codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L25)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L123)*

**Returns:** `E`

___
<a id="data"></a>

##  data

getdata(): `EventData`

*Defined in [Event.ts:110](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L110)*

**Returns:** `EventData`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `number`

___
<a id="index"></a>

##  index

getindex(): `EventIndex`

*Defined in [Event.ts:114](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L114)*

**Returns:** `EventIndex`

___
<a id="meta"></a>

##  meta

getmeta(): [EventMetadata](_metadata_.eventmetadata.md)

*Defined in [Event.ts:118](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L118)*

**Returns:** [EventMetadata](_metadata_.eventmetadata.md)

___
<a id="method"></a>

##  method

getmethod(): `string`

*Defined in [Event.ts:122](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L122)*

**Returns:** `string`

___
<a id="section"></a>

##  section

getsection(): `string`

*Defined in [Event.ts:126](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L126)*

**Returns:** `string`

___
<a id="typedef"></a>

##  typeDef

gettypeDef(): `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

*Defined in [Event.ts:130](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L130)*

**Returns:** `Array`<[TypeDef](../modules/_codec_createtype_.md#typedef)>

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

| Name | Type |
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

| Name | Type |
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

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:**  [Base](_codec_base_.base.md) &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L133)*

**Parameters:**

| Name | Type |
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

▸ **set**(key: *`keyof S`*, value: *[Base](_codec_base_.base.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Base](_codec_base_.base.md) |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:137](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L137)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L141)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L145)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L156)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L160)*

**Parameters:**

| Name | Type |
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
<a id="decodeevent"></a>

## `<Static>` decodeEvent

▸ **decodeEvent**(value: *`Uint8Array`*): `object`

*Defined in [Event.ts:68](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `Uint8Array` |

**Returns:** `object`

___
<a id="injectmetadata"></a>

## `<Static>` injectMetadata

▸ **injectMetadata**(metadata: *`Metadata`*): `void`

*Defined in [Event.ts:87](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/Event.ts#L87)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| metadata | `Metadata` |

**Returns:** `void`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/b580c12/packages/types/src/codec/Struct.ts#L113)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

