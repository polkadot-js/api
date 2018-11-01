

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: *`ExtrinsicSignatureValue`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [ExtrinsicSignature.ts:36](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `ExtrinsicSignatureValue` |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

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

*Defined in [codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L25)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L123)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [ExtrinsicSignature.ts:64](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L64)*

**Returns:** `number`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [ExtrinsicSignature.ts:77](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L77)*

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [ExtrinsicSignature.ts:73](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L73)*

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): `Nonce`

*Defined in [ExtrinsicSignature.ts:81](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L81)*

**Returns:** `Nonce`

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [ExtrinsicSignature.ts:85](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L85)*

**Returns:** [Signature](_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_address_.address.md)

*Defined in [ExtrinsicSignature.ts:89](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L89)*

**Returns:** [Address](_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [ExtrinsicSignature.ts:93](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L93)*

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
<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(method: *[Method](_method_.method.md)*, signerPair: *`KeyringPair`*, nonce: *`AnyNumber`*, blockHash: *`AnyU8a`*, era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:105](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L105)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| method | [Method](_method_.method.md) | - |
| signerPair | `KeyringPair` | - |
| nonce | `AnyNumber` | - |
| blockHash | `AnyU8a` | - |
| `Default value` era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

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

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L133)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:137](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L137)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L141)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L145)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L156)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [ExtrinsicSignature.ts:124](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L124)*

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
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value: * [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`*):  `any` &#124; `Uint8Array`

*Defined in [ExtrinsicSignature.ts:46](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/ExtrinsicSignature.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; `AnyU8a` &#124; `undefined`|

**Returns:**  `any` &#124; `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/a03babe/packages/types/src/codec/Struct.ts#L113)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

