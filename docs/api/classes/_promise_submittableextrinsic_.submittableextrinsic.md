

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

⊕ **new SubmittableExtrinsic**(api: *[ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md)*, extrinsic: *`Extrinsic`*): [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

*Overrides Extrinsic.__constructor*

*Defined in [promise/SubmittableExtrinsic.ts:12](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/promise/SubmittableExtrinsic.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [ApiPromiseInterface](../interfaces/_promise_types_.apipromiseinterface.md) |
| extrinsic | `Extrinsic` |

**Returns:** [SubmittableExtrinsic](_promise_submittableextrinsic_.submittableextrinsic.md)

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

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L141)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="args"></a>

##  args

getargs(): `Array`<`Codec`>

*Inherited from Extrinsic.args*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:69](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L69)*

*__description__*: The arguments passed to for the call, exposes args so it is compatible with \[\[Method\]\]

**Returns:** `Array`<`Codec`>

___
<a id="callindex"></a>

##  callIndex

getcallIndex(): `Uint8Array`

*Inherited from Extrinsic.callIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:76](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L76)*

*__description__*: The actual `[sectionIndex, methodIndex]` as used in the Method

**Returns:** `Uint8Array`

___
<a id="data"></a>

##  data

getdata(): `Uint8Array`

*Inherited from Extrinsic.data*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:83](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L83)*

*__description__*: The actual data for the Method

**Returns:** `Uint8Array`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Extrinsic.encodedLength*

*Overrides Struct.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:90](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L90)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="hash"></a>

##  hash

gethash(): `Hash`

*Inherited from Extrinsic.hash*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:99](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L99)*

*__description__*: Convernience function, encodes the extrinsic and returns the actual hash

**Returns:** `Hash`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Inherited from Extrinsic.isSigned*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:108](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L108)*

*__description__*: `true` id the extrinsic is signed

**Returns:** `boolean`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from Extrinsic.length*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:115](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L115)*

*__description__*: The length of the encoded value

**Returns:** `number`

___
<a id="meta"></a>

##  meta

getmeta(): `FunctionMetadata`

*Inherited from Extrinsic.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:122](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L122)*

*__description__*: The \[\[FunctionMetadata\]\] that describes the extrinsic

**Returns:** `FunctionMetadata`

___
<a id="method"></a>

##  method

getmethod(): `Method`

*Inherited from Extrinsic.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:129](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L129)*

*__description__*: The \[\[Method\]\] this extrinsic wraps

**Returns:** `Method`

___
<a id="signature"></a>

##  signature

getsignature(): `ExtrinsicSignature`

*Inherited from Extrinsic.signature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:136](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L136)*

*__description__*: The \[\[ExtrinsicSignature\]\]

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
<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(signer: * `Address` &#124; `Uint8Array`*, signature: *`Uint8Array`*, nonce: *`AnyNumber`*, era?: *`Uint8Array`*): `Extrinsic`

*Inherited from Extrinsic.addSignature*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:143](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L143)*

*__description__*: Add an \[\[ExtrinsicSignature\]\] to the extrinsic (already generated)

**Parameters:**

| Name | Type |
| ------ | ------ |
| signer |  `Address` &#124; `Uint8Array`|
| signature | `Uint8Array` |
| nonce | `AnyNumber` |
| `Optional` era | `Uint8Array` |

**Returns:** `Extrinsic`

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

▸ **get**(name: *`keyof S`*):  `Codec` &#124; `undefined`

*Inherited from Struct.get*

*Overrides Map.get*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L158)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:**  `Codec` &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Codec`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:165](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L165)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

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

*Defined in [promise/SubmittableExtrinsic.ts:20](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/promise/SubmittableExtrinsic.ts#L20)*

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

*Defined in [promise/SubmittableExtrinsic.ts:28](https://github.com/polkadot-js/api/blob/c75c849/packages/api/src/promise/SubmittableExtrinsic.ts#L28)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<`Codec`>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from Extrinsic.toHex*

*Overrides Struct.toHex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:161](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L161)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Extrinsic.toJSON*

*Overrides Struct.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:168](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L168)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Extrinsic.toU8a*

*Overrides Struct.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:176](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L176)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

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

▸ **decodeExtrinsic**(value?: * `ExtrinsicValue` &#124; `AnyU8a`*):  `object` &#124; `Uint8Array`

*Inherited from Extrinsic.decodeExtrinsic*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/Extrinsic.ts:44](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/Extrinsic.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicValue` &#124; `AnyU8a`|

**Returns:**  `object` &#124; `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/c75c849/packages/types/src/codec/Struct.ts#L121)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

