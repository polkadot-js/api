

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

 `Struct`

**↳ RxProposal**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RxProposal**(value: *`Tuple`*): [RxProposal](_classes_.rxproposal.md)

*Overrides Struct.__constructor*

*Defined in [classes.ts:9](https://github.com/polkadot-js/api/blob/6cfad07/packages/api-observable/src/classes.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `Tuple` |

**Returns:** [RxProposal](_classes_.rxproposal.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from Base.raw*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Base.ts:19](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from Struct.Type*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:114](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L114)*

**Returns:** `E`

___
<a id="address"></a>

##  address

getaddress(): `AccountId`

*Defined in [classes.ts:18](https://github.com/polkadot-js/api/blob/6cfad07/packages/api-observable/src/classes.ts#L18)*

**Returns:** `AccountId`

___
<a id="id"></a>

##  id

getid(): `PropIndex`

*Defined in [classes.ts:22](https://github.com/polkadot-js/api/blob/6cfad07/packages/api-observable/src/classes.ts#L22)*

**Returns:** `PropIndex`

___
<a id="proposal"></a>

##  proposal

getproposal(): `Proposal`

*Defined in [classes.ts:26](https://github.com/polkadot-js/api/blob/6cfad07/packages/api-observable/src/classes.ts#L26)*

**Returns:** `Proposal`

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from Struct.byteLength*

*Overrides Base.byteLength*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:118](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L118)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): `Struct`<`S`, `T`, `V`, `E`>

*Inherited from Struct.fromJSON*

*Overrides Base.fromJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:124](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L124)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:144](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L144)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:154](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L154)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:169](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L169)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from Struct.toJSON*

*Overrides Base.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L158)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from Struct.toString*

*Overrides Base.toString*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L181)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from Struct.toU8a*

*Overrides Base.toU8a*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L173)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:190](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L190)*

**Returns:** `Array`<`Base`>

___
<a id="decodestruct"></a>

## `<Static>` decodeStruct

▸ **decodeStruct**<`S`,`V`,`T`>(Types: *`S`*, value: *`any`*, jsonMap: *`Map`<`keyof S`, `string`>*): `T`

*Inherited from Struct.decodeStruct*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:49](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L49)*

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

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/codec/Struct.ts:104](https://github.com/polkadot-js/api/blob/6cfad07/packages/types/src/codec/Struct.ts#L104)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `Constructor`<`Struct`<`S`>>

___

