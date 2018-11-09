

# Type parameters
#### S :  `ConstructorDef`
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MisbehaviorReport**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorReport**(value?: * `MisbehaviorReportValue` &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array`*): [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [MisbehaviorReport.ts:75](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/MisbehaviorReport.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value |  `MisbehaviorReportValue` &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array`|

**Returns:** [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

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

*Defined in [codec/Struct.ts:26](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L26)*

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

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L126)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:130](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L130)*

**Returns:** `number`

___
<a id="misbehavior"></a>

##  misbehavior

getmisbehavior(): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Defined in [MisbehaviorReport.ts:85](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/MisbehaviorReport.ts#L85)*

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Defined in [MisbehaviorReport.ts:89](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/MisbehaviorReport.ts#L89)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parentnumber"></a>

##  parentNumber

getparentNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Defined in [MisbehaviorReport.ts:93](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/MisbehaviorReport.ts#L93)*

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="target"></a>

##  target

gettarget(): [AuthorityId](_authorityid_.authorityid.md)

*Defined in [MisbehaviorReport.ts:97](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/MisbehaviorReport.ts#L97)*

**Returns:** [AuthorityId](_authorityid_.authorityid.md)

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

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:136](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L136)*

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

*Defined in [codec/Struct.ts:140](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L140)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:144](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L144)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L148)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L163)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:116](https://github.com/polkadot-js/api/blob/4b3b694/packages/types/src/codec/Struct.ts#L116)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

