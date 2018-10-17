

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ BftAtReport**

↳  [BftDoublePrepare](_misbehaviorreport_.bftdoubleprepare.md)

↳  [BftDoubleCommit](_misbehaviorreport_.bftdoublecommit.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new BftAtReport**(value?: *`BftAtReportValue`*): [BftAtReport](_misbehaviorreport_.bftatreport.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [MisbehaviorReport.ts:27](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/MisbehaviorReport.ts#L27)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `BftAtReportValue` |

**Returns:** [BftAtReport](_misbehaviorreport_.bftatreport.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `E`

___
<a id="a"></a>

##  a

geta(): [BftHashSignature](_bft_.bfthashsignature.md)

*Defined in [MisbehaviorReport.ts:36](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/MisbehaviorReport.ts#L36)*

**Returns:** [BftHashSignature](_bft_.bfthashsignature.md)

___
<a id="b"></a>

##  b

getb(): [BftHashSignature](_bft_.bfthashsignature.md)

*Defined in [MisbehaviorReport.ts:40](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/MisbehaviorReport.ts#L40)*

**Returns:** [BftHashSignature](_bft_.bfthashsignature.md)

___
<a id="round"></a>

##  round

getround(): [U32](_u32_.u32.md)

*Defined in [MisbehaviorReport.ts:44](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/MisbehaviorReport.ts#L44)*

**Returns:** [U32](_u32_.u32.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:121](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L121)*

**Returns:** `number`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L127)*

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

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L142)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:131](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L131)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L154)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L146)*

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

*Defined in [codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L48)*

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
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:107](https://github.com/polkadot-js/api/blob/f25d479/packages/types/src/codec/Struct.ts#L107)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

