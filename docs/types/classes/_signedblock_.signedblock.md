

# Type parameters
#### S 
#### T 
#### V 
#### E 
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ SignedBlock**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SignedBlock**(value?: *`SignedBlockValue`*): [SignedBlock](_signedblock_.signedblock.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [SignedBlock.ts:14](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/SignedBlock.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` value | `SignedBlockValue` |

**Returns:** [SignedBlock](_signedblock_.signedblock.md)

___

# Properties

<a id="_types"></a>

## `<Protected>` _Types

**● _Types**: *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[_Types](_codec_struct_.struct.md#_types)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L27)*

___
<a id="_jsonmap"></a>

## `<Protected>` _jsonMap

**● _jsonMap**: *`Map`<`keyof S`, `string`>*

*Inherited from [Struct](_codec_struct_.struct.md).[_jsonMap](_codec_struct_.struct.md#_jsonmap)*

*Defined in [codec/Struct.ts:26](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L26)*

___
<a id="raw"></a>

##  raw

**● raw**: *`T`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:76](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L76)*

**Returns:** `E`

___
<a id="block"></a>

##  block

getblock(): [Block](_block_.block.md)

*Defined in [SignedBlock.ts:22](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/SignedBlock.ts#L22)*

**Returns:** [Block](_block_.block.md)

___
<a id="justification"></a>

##  justification

getjustification(): [Justification](_bft_.justification.md)

*Defined in [SignedBlock.ts:26](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/SignedBlock.ts#L26)*

**Returns:** [Justification](_bft_.justification.md)

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[byteLength](_codec_struct_.struct.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/Struct.ts:80](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L80)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromJSON](_codec_struct_.struct.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/Struct.ts:86](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Struct](_codec_struct_.struct.md)<`S`, `T`, `V`, `E`>

*Inherited from [Struct](_codec_struct_.struct.md).[fromU8a](_codec_struct_.struct.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/Struct.ts:101](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L101)*

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

*Defined in [codec/Struct.ts:111](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L111)*

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

*Defined in [codec/Struct.ts:126](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L126)*

**Returns:** `Array`<`string`>

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Struct.ts:115](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L115)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Struct.ts:138](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L138)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Struct.ts:130](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L130)*

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

*Defined in [codec/Struct.ts:147](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L147)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**<`S`,`V`,`T`>(Types: *`S`*, value: * `V` &#124; `Array`<`any`>*, isTuple: *`boolean`*): `T`

*Inherited from [Struct](_codec_struct_.struct.md).[decode](_codec_struct_.struct.md#decode)*

*Defined in [codec/Struct.ts:45](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L45)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:66](https://github.com/polkadot-js/api/blob/a38d1fa/packages/types/src/codec/Struct.ts#L66)*

**Type parameters:**

#### S 
**Parameters:**

| Param | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `object`

___

