

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ FunctionMetadata**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new FunctionMetadata**(value?: *`any`*): [FunctionMetadata](_metadata_.functionmetadata.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata.ts:153](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/Metadata.ts#L153)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [FunctionMetadata](_metadata_.functionmetadata.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *"Map"*

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

*Defined in [codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L118)*

**Returns:** `E`

___
<a id="arguments"></a>

##  arguments

getarguments(): [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

*Defined in [Metadata.ts:163](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/Metadata.ts#L163)*

**Returns:** [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_.functionargumentmetadata.md)>

___
<a id="documentation"></a>

##  documentation

getdocumentation(): [Vector](_codec_vector_.vector.md)<[Text](_text_.text.md)>

*Defined in [Metadata.ts:167](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/Metadata.ts#L167)*

**Returns:** [Vector](_codec_vector_.vector.md)<[Text](_text_.text.md)>

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L122)*

**Returns:** `number`

___
<a id="id"></a>

##  id

getid(): [U16](_u16_.u16.md)

*Defined in [Metadata.ts:171](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/Metadata.ts#L171)*

**Returns:** [U16](_u16_.u16.md)

___
<a id="name"></a>

##  name

getname(): [Text](_text_.text.md)

*Defined in [Metadata.ts:175](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/Metadata.ts#L175)*

**Returns:** [Text](_text_.text.md)

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

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

▸ **entries**(): `IterableIterator`<[`keyof S`, `Codec`]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, `Codec`]>

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

▸ **get**(key: *`keyof S`*):  `Codec` &#124; `undefined`

*Inherited from Map.get*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:**  `Codec` &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Codec`

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:128](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Codec`

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

▸ **set**(key: *`keyof S`*, value: *`Codec`*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | `Codec` |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`Codec`>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L132)*

**Returns:** `Array`<`Codec`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:136](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L136)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L140)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L151)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:155](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L155)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<`Codec`>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<`Codec`>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/16df614/packages/types/src/codec/Struct.ts#L108)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

