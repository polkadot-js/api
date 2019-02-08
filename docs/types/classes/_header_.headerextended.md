

*__name__*: HeaderExtended

*__description__*: A [Block](_block_.block.md) header with an additional `author` field that indicates the block author

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Header](_header_.header.md)

**↳ HeaderExtended**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new HeaderExtended**(header: *[Header](_header_.header.md)*, sessionValidators?: *`Array`<[AccountId](_accountid_.accountid.md)>*): [HeaderExtended](_header_.headerextended.md)

*Overrides [Header](_header_.header.md).[constructor](_header_.header.md#constructor)*

*Defined in [Header.ts:92](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L92)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| header | [Header](_header_.header.md) | - |
| `Default value` sessionValidators | `Array`<[AccountId](_accountid_.accountid.md)> |  [] |

**Returns:** [HeaderExtended](_header_.headerextended.md)

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:142](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L142)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="author"></a>

##  author

getauthor(): [AccountId](_accountid_.accountid.md) | `undefined`

*Defined in [Header.ts:108](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L108)*

*__description__*: Convenience method, returns the author for the block

**Returns:** [AccountId](_accountid_.accountid.md) | `undefined`

___
<a id="blocknumber"></a>

##  blockNumber

getblockNumber(): [BlockNumber](_blocknumber_.blocknumber.md)

*Inherited from [Header](_header_.header.md).[blockNumber](_header_.header.md#blocknumber)*

*Defined in [Header.ts:44](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L44)*

*__description__*: The wrapped [BlockNumber](_blocknumber_.blocknumber.md)

**Returns:** [BlockNumber](_blocknumber_.blocknumber.md)

___
<a id="digest"></a>

##  digest

getdigest(): [Digest](_digest_.digest.md)

*Inherited from [Header](_header_.header.md).[digest](_header_.header.md#digest)*

*Defined in [Header.ts:51](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L51)*

*__description__*: The wrapped [Digest](_digest_.digest.md)

**Returns:** [Digest](_digest_.digest.md)

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:149](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L149)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="extrinsicsroot"></a>

##  extrinsicsRoot

getextrinsicsRoot(): [Hash](_hash_.hash.md)

*Inherited from [Header](_header_.header.md).[extrinsicsRoot](_header_.header.md#extrinsicsroot)*

*Defined in [Header.ts:58](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L58)*

*__description__*: The wrapped extrisics root as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="hash"></a>

##  hash

gethash(): [Hash](_hash_.hash.md)

*Inherited from [Header](_header_.header.md).[hash](_header_.header.md#hash)*

*Defined in [Header.ts:65](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L65)*

*__description__*: Convenience method, encodes the header and calculates the [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="parenthash"></a>

##  parentHash

getparentHash(): [Hash](_hash_.hash.md)

*Inherited from [Header](_header_.header.md).[parentHash](_header_.header.md#parenthash)*

*Defined in [Header.ts:74](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L74)*

*__description__*: The wrapped parent as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___
<a id="stateroot"></a>

##  stateRoot

getstateRoot(): [Hash](_hash_.hash.md)

*Inherited from [Header](_header_.header.md).[stateRoot](_header_.header.md#stateroot)*

*Defined in [Header.ts:81](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/Header.ts#L81)*

*__description__*: The wrapped state root as a [Hash](_hash_.hash.md)

**Returns:** [Hash](_hash_.hash.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:158](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L158)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) | `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:166](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L166)*

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

*Defined in [codec/Struct.ts:173](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L173)*

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

*Defined in [codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L180)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:187](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L187)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:194](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L194)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:208](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L208)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` | `false` | `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:216](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L216)*

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

*Defined in [codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/a2f863c/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../modules/_types_.md#constructor)<[Struct](_codec_struct_.struct.md)<`S`>>

___

