

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 `Struct`

**↳ RxProposalDeposits**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxProposalDeposits**(value: *`Tuple`*): [RxProposalDeposits](_classes_.rxproposaldeposits.md)

*Overrides Struct.__constructor*

*Defined in [classes.ts:31](https://github.com/polkadot-js/api/blob/3e79ac5/packages/api-observable/src/classes.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Tuple` |

**Returns:** [RxProposalDeposits](_classes_.rxproposaldeposits.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:113](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L113)*

**Returns:** `E`

___
<a id="addresses"></a>

##  addresses

getaddresses(): `Vector`<`AccountId`>

*Defined in [classes.ts:39](https://github.com/polkadot-js/api/blob/3e79ac5/packages/api-observable/src/classes.ts#L39)*

**Returns:** `Vector`<`AccountId`>

___
<a id="balance"></a>

##  balance

getbalance(): `Balance`

*Defined in [classes.ts:43](https://github.com/polkadot-js/api/blob/3e79ac5/packages/api-observable/src/classes.ts#L43)*

**Returns:** `Balance`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from Struct.encodedLength*

*Overrides Base.encodedLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:117](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L117)*

**Returns:** `number`

___

# Methods

<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): `Base`

*Inherited from Struct.getAtIndex*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L123)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Struct.toJSON*

*Overrides Base.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:150](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L150)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Overrides Base.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L142)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:159](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L159)*

**Returns:** `Array`<`Base`>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from Struct.decodeStruct*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:44](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L44)*

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

▸ **with**<`S`>(Types: *`S`*): `Constructor`<`Struct`<`S`>>

*Inherited from Struct.with*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:103](https://github.com/polkadot-js/api/blob/3e79ac5/packages/types/src/codec/Struct.ts#L103)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

