

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_signature_.signature.md) associated with a specific [Extrinsic](_extrinsic_.extrinsic.md)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: * `ExtrinsicSignatureValue` &#124; `Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [ExtrinsicSignature.ts:37](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value |  `ExtrinsicSignatureValue` &#124; `Uint8Array`|

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

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

*Defined in [codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L141)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [ExtrinsicSignature.ts:71](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L71)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

*Defined in [ExtrinsicSignature.ts:90](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L90)*

*__description__*: The [ExtrinsicEra](_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** [ExtrinsicEra](_extrinsicera_.extrinsicera.md)

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [ExtrinsicSignature.ts:83](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L83)*

*__description__*: `true` if the signature is valid

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): [Nonce](_nonce_.nonce.md)

*Defined in [ExtrinsicSignature.ts:97](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L97)*

*__description__*: The [Nonce](_nonce_.nonce.md) for the signature

**Returns:** [Nonce](_nonce_.nonce.md)

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [ExtrinsicSignature.ts:104](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L104)*

*__description__*: The actuall [Signature](_signature_.signature.md) hash

**Returns:** [Signature](_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_address_.address.md)

*Defined in [ExtrinsicSignature.ts:111](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L111)*

*__description__*: The [Address](_address_.address.md) that signed

**Returns:** [Address](_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [ExtrinsicSignature.ts:118](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L118)*

*__description__*: The encoded version for the signature

**Returns:** `number`

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
<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(_signer: * [Address](_address_.address.md) &#124; `Uint8Array`*, _signature: *`Uint8Array`*, _nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, _era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:142](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L142)*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _signer |  [Address](_address_.address.md) &#124; `Uint8Array`| - |
| _signature | `Uint8Array` | - |
| _nonce | [AnyNumber](../modules/_types_.md#anynumber) | - |
| `Default value` _era | `Uint8Array` |  IMMORTAL_ERA |

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

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L158)*

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

*Defined in [codec/Struct.ts:165](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L165)*

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
<a id="sign"></a>

##  sign

▸ **sign**(method: *[Method](_method_.method.md)*, signerPair: *`KeyringPair`*, nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, blockHash: *[AnyU8a](../modules/_types_.md#anyu8a)*, era?: *`Uint8Array`*): [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

*Defined in [ExtrinsicSignature.ts:154](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L154)*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| method | [Method](_method_.method.md) | - |
| signerPair | `KeyringPair` | - |
| nonce | [AnyNumber](../modules/_types_.md#anynumber) | - |
| blockHash | [AnyU8a](../modules/_types_.md#anyu8a) | - |
| `Default value` era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L179)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:186](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L186)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:200](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L200)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [ExtrinsicSignature.ts:171](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L171)*

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
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value: * [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; `undefined`*):  `object` &#124; `Uint8Array`

*Defined in [ExtrinsicSignature.ts:52](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/ExtrinsicSignature.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value |  [ExtrinsicSignature](_extrinsicsignature_.extrinsicsignature.md) &#124; `ExtrinsicSignatureValue` &#124; [AnyU8a](../modules/_types_.md#anyu8a) &#124; `undefined`|

**Returns:**  `object` &#124; `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/ef926e9/packages/types/src/codec/Struct.ts#L121)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

