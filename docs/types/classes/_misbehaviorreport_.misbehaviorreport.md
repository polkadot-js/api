

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MisbehaviorReport**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorReport**(value?: *`MisbehaviorReportValue`*): [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [MisbehaviorReport.ts:72](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/MisbehaviorReport.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `MisbehaviorReportValue` |

**Returns:** [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___
<a id="misbehavior"></a>

##  misbehavior

getmisbehavior(): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Defined in [MisbehaviorReport.ts:82](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/MisbehaviorReport.ts#L82)*

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Defined in [MisbehaviorReport.ts:86](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/MisbehaviorReport.ts#L86)*

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parentnumber"></a>

##  parentNumber

getparentNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Defined in [MisbehaviorReport.ts:90](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/MisbehaviorReport.ts#L90)*

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="target"></a>

##  target

gettarget(): [AuthorityId](_authorityid_.authorityid.md)

*Defined in [MisbehaviorReport.ts:94](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/MisbehaviorReport.ts#L94)*

**Returns:** [AuthorityId](_authorityid_.authorityid.md)

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L123)*

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

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L142)*

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

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decodeStruct](_codec_struct_.struct.md#decodestruct)*

*Defined in [codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L44)*

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

*Defined in [codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<[Struct](_codec_struct_.struct.md)<`S`>>

___

