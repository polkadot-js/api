

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 `Struct`

**↳ RxReferendum**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxReferendum**(value: *`Tuple`*, id: * `ReferendumIndex` &#124; `BN` &#124; `number`*): [RxReferendum](_classes_.rxreferendum.md)

*Overrides Struct.__constructor*

*Defined in [classes.ts:48](https://github.com/polkadot-js/api/blob/7180f89/packages/api-observable/src/classes.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Tuple` |
| id |  `ReferendumIndex` &#124; `BN` &#124; `number`|

**Returns:** [RxReferendum](_classes_.rxreferendum.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from Struct._Types*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:30](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L30)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from Struct._jsonMap*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:29](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L29)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:108](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L108)*

**Returns:** `E`

___
<a id="blocknumber"></a>

##  blockNumber

getblockNumber(): `BlockNumber`

*Defined in [classes.ts:58](https://github.com/polkadot-js/api/blob/7180f89/packages/api-observable/src/classes.ts#L58)*

**Returns:** `BlockNumber`

___
<a id="id"></a>

##  id

getid(): `ReferendumIndex`

*Defined in [classes.ts:62](https://github.com/polkadot-js/api/blob/7180f89/packages/api-observable/src/classes.ts#L62)*

**Returns:** `ReferendumIndex`

___
<a id="proposal"></a>

##  proposal

getproposal(): `Proposal`

*Defined in [classes.ts:66](https://github.com/polkadot-js/api/blob/7180f89/packages/api-observable/src/classes.ts#L66)*

**Returns:** `Proposal`

___
<a id="votethreshold"></a>

##  voteThreshold

getvoteThreshold(): `VoteThreshold`

*Defined in [classes.ts:70](https://github.com/polkadot-js/api/blob/7180f89/packages/api-observable/src/classes.ts#L70)*

**Returns:** `VoteThreshold`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from Struct.byteLength*

*Overrides Base.byteLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:112](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L112)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): `Struct`<`S`, `T`, `V`, `E`>

*Inherited from Struct.fromJSON*

*Overrides Base.fromJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `Struct`<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): `Struct`<`S`, `T`, `V`, `E`>

*Inherited from Struct.fromU8a*

*Overrides Base.fromU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `Struct`<`S`, `T`, `V`, `E`>

___
<a id="get"></a>

##  get

▸ **get**(index: *`number`*): `Base`

*Inherited from Struct.get*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:148](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `Base`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `Array`<`string`>

*Inherited from Struct.keys*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:163](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L163)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Struct.toJSON*

*Overrides Base.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L152)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:175](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L175)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Overrides Base.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L167)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `Array`<`Base`>

*Inherited from Struct.values*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L184)*

**Returns:** `Array`<`Base`>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*): `T`

*Inherited from Struct.decodeStruct*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:48](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L48)*

**Type parameters:**

#### S 
#### V 
#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |
| value | `any` |

**Returns:** `T`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `object`

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:98](https://github.com/polkadot-js/api/blob/7180f89/packages/types/src/codec/Struct.ts#L98)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

