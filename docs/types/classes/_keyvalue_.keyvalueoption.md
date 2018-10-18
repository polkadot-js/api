

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ KeyValueOption**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new KeyValueOption**(value?: *[KeyValueOptionValue](../modules/_keyvalue_.md#keyvalueoptionvalue)*): [KeyValueOption](_keyvalue_.keyvalueoption.md)

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [KeyValue.ts:47](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/KeyValue.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | [KeyValueOptionValue](../modules/_keyvalue_.md#keyvalueoptionvalue) |

**Returns:** [KeyValueOption](_keyvalue_.keyvalueoption.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___
<a id="key"></a>

##  key

getkey(): [StorageKey](_storagekey_.storagekey.md)

*Defined in [KeyValue.ts:55](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/KeyValue.ts#L55)*

**Returns:** [StorageKey](_storagekey_.storagekey.md)

___
<a id="value"></a>

##  value

getvalue(): [Option](_codec_option_.option.md)<[StorageData](_storagedata_.storagedata.md)>

*Defined in [KeyValue.ts:59](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/KeyValue.ts#L59)*

**Returns:** [Option](_codec_option_.option.md)<[StorageData](_storagedata_.storagedata.md)>

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from [Struct](_codec_struct_.struct.md).[keys](_codec_struct_.struct.md#keys)*

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Tuple.ts:48](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Tuple.ts#L48)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L142)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[values](_codec_struct_.struct.md#values)*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Struct.ts#L44)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |
| jsonMap | `Map`<`keyof S`, `string`> |

**Returns:** `T`

___
<a id="decodetuple"></a>

## `<Static>` decodeTuple

▸ **decodeTuple**<`S`,`V`>(Types: *`S`*, value: * `V` &#124; `AnyU8a`*): `V`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[decodeTuple](_codec_tuple_.tuple.md#decodetuple)*

*Defined in [codec/Tuple.ts:22](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Tuple.ts#L22)*

**Type parameters:**

#### S 
#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value |  `V` &#124; `AnyU8a`|

**Returns:** `V`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Tuple](_codec_tuple_.tuple.md)<`S`>>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Overrides [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Tuple.ts:38](https://github.com/polkadot-js/api/blob/ec7b96b/packages/types/src/codec/Tuple.ts#L38)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Tuple](_codec_tuple_.tuple.md)<`S`>>

___

