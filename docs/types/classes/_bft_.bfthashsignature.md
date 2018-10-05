

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)

**↳ BftHashSignature**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new BftHashSignature**(value?: *[BftHashSignatureValue](../modules/_bft_.md#bfthashsignaturevalue)*): [BftHashSignature](_bft_.bfthashsignature.md)

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [Bft.ts:46](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Bft.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | [BftHashSignatureValue](../modules/_bft_.md#bfthashsignaturevalue) |

**Returns:** [BftHashSignature](_bft_.bfthashsignature.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[_Types](_codec_struct_.struct.md#_types)*

*Defined in [codec/Struct.ts:28](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L28)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from [Struct](_codec_struct_.struct.md).[_jsonMap](_codec_struct_.struct.md#_jsonmap)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L27)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:77](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L77)*

**Returns:** `E`

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Defined in [Bft.ts:54](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Bft.ts#L54)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_signature_.signature.md)

*Defined in [Bft.ts:58](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/Bft.ts#L58)*

**Returns:** [Signature](_signature_.signature.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:81](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L81)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Tuple](_codec_tuple_.tuple.md)<`S`, `T`, `V`>

*Inherited from [Tuple](_codec_tuple_.tuple.md).[fromJSON](_codec_tuple_.tuple.md#fromjson)*

*Overrides [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Defined in [codec/Tuple.ts:34](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Tuple.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Tuple](_codec_tuple_.tuple.md)<`S`, `T`, `V`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:102](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Defined in [codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L112)*

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

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Tuple.ts:46](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Tuple.ts#L46)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:139](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L139)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:131](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L131)*

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

*Defined in [codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L148)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`S`,`V`,`T`>(Types: *`S`*, value: * `V` &#124; `Array`<`any`>*, isTuple: *`boolean`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decode](_codec_struct_.struct.md#decode)*

*Defined in [codec/Struct.ts:46](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Struct.ts#L46)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value |  `V` &#124; `Array`<`any`>|
| isTuple | `boolean` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Overrides [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Tuple.ts:24](https://github.com/polkadot-js/api/blob/82dbc93/packages/types/src/codec/Tuple.ts#L24)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

