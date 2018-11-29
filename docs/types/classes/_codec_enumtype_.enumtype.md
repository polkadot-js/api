

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Codec](../interfaces/_types_.codec.md)>

**↳ EnumType**

↳  [StorageFunctionType](_metadata_.storagefunctiontype.md)

↳  [DigestItem](_digest_.digestitem.md)

↳  [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

↳  [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:25](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/EnumType.ts:93](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L93)*

**Returns:** `number`

___
<a id="isnull"></a>

##  isNull

getisNull(): `boolean`

*Defined in [codec/EnumType.ts:81](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L81)*

**Returns:** `boolean`

___
<a id="type"></a>

##  type

gettype(): `string`

*Defined in [codec/EnumType.ts:85](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L85)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/EnumType.ts:89](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L89)*

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L97)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L101)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:105](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L105)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/EnumType.ts:109](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L109)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/EnumType.ts:113](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenumtype"></a>

## `<Static>` decodeEnumType

▸ **decodeEnumType**<`T`>(def: *`TypesDef`*, value?: *`any`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*): `object`

*Defined in [codec/EnumType.ts:44](https://github.com/polkadot-js/api/blob/0e6d138/packages/types/src/codec/EnumType.ts#L44)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` value | `any` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|

**Returns:** `object`

___

