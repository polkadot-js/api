

*__name__*: MisbehaviorReport

*__description__*: A Misbehaviour report of \[\[MisbehavioirKind\]\] against a specific [AuthorityId](_authorityid_.authorityid.md)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ MisbehaviorReport**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorReport**(value?: *`MisbehaviorReportValue` | `Uint8Array`*): [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [MisbehaviorReport.ts:144](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/MisbehaviorReport.ts#L144)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `MisbehaviorReportValue` | `Uint8Array` |

**Returns:** [MisbehaviorReport](_misbehaviorreport_.misbehaviorreport.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="misbehavior"></a>

##  misbehavior

getmisbehavior(): [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

*Defined in [MisbehaviorReport.ts:157](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/MisbehaviorReport.ts#L157)*

*__description__*: The [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

**Returns:** [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Defined in [MisbehaviorReport.ts:164](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/MisbehaviorReport.ts#L164)*

*__description__*: The [Hash](_hash_.hash.md) of the parent block

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parentnumber"></a>

##  parentNumber

getparentNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Defined in [MisbehaviorReport.ts:171](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/MisbehaviorReport.ts#L171)*

*__description__*: The [BlockNumber](_blocknumber_.blocknumber.md) of the parent

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="target"></a>

##  target

gettarget(): [AuthorityId](_authorityid_.authorityid.md)

*Defined in [MisbehaviorReport.ts:178](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/MisbehaviorReport.ts#L178)*

*__description__*: The [authorityId](_bft_.bftauthoritysignature.md#authorityid) the report applies to

**Returns:** [AuthorityId](_authorityid_.authorityid.md)

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L159)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) | `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L166)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L173)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:201](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L201)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:209](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L209)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` | `false` | `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/aef4b74/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

