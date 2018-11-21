

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Extrinsic`

**↳ SubmittableExtrinsic**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SubmittableExtrinsic**(api: *`ApiPromiseInterface`*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [promise/SubmittableExtrinsic.ts:12](https://github.com/polkadot-js/api/blob/d0ff893/packages/api/src/promise/SubmittableExtrinsic.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiPromiseInterface` |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

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

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/codec/Struct.ts#L118)*

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<`Codec`>

*Inherited from Extrinsic.args*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:64](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L64)*

**Returns:** `Array`<`Codec`>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:69](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L69)*

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:73](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L73)*

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Extrinsic.encodedLength*

*Overrides Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:104](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L104)*

**Returns:** `number`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:78](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L78)*

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:84](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L84)*

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:88](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L88)*

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:92](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L92)*

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:96](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L96)*

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:100](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L100)*

**Returns:** `ExtrinsicSignature`

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

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:128](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/codec/Struct.ts#L128)*

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
<a id="send"></a>

##  send

▸ **send**(statusCb?: * `undefined` &#124; `function`*): `Promise`<`Hash`>

*Defined in [promise/SubmittableExtrinsic.ts:20](https://github.com/polkadot-js/api/blob/d0ff893/packages/api/src/promise/SubmittableExtrinsic.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` statusCb |  `undefined` &#124; `function`|

**Returns:** `Promise`<`Hash`>

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
<a id="sign"></a>

##  sign

▸ **sign**(signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash?: *`AnyU8a`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.sign*

*Defined in [promise/SubmittableExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/d0ff893/packages/api/src/promise/SubmittableExtrinsic.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| signerPair | `KeyringPair` |
| nonce | `AnyNumber` |
| `Optional` blockHash | `AnyU8a` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<`Codec`>

*Inherited from Struct.toArray*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/codec/Struct.ts#L132)*

**Returns:** `Array`<`Codec`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Extrinsic.toHex*

*Overrides Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:124](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L124)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:128](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L128)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:151](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/codec/Struct.ts#L151)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:116](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L116)*

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
<a id="decodeextrinsic"></a>

## `<Static>` decodeExtrinsic

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `any` &#124; `Uint8Array`

*Inherited from Extrinsic.decodeExtrinsic*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:41](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/Extrinsic.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/d0ff893/packages/types/src/codec/Struct.ts#L108)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

