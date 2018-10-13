

# Type parameters
#### T 
# Hierarchy

 [Base](_codec_base_.base.md)<[Base](_codec_base_.base.md)<`T`>>

**↳ EnumType**

↳  [StorageFunctionType](_metadata_.storagefunctiontype.md)

↳  [ExtrinsicStatus](_extrinsicstatus_.extrinsicstatus.md)

↳  [MisbehaviorKind](_misbehaviorreport_.misbehaviorkind.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new EnumType**(def: *`TypesDef`*, index?: * `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>*, value?: *`any`*): [EnumType](_codec_enumtype_.enumtype.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/EnumType.ts:24](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| def | `TypesDef` |
| `Optional` index |  `number` &#124; [EnumType](_codec_enumtype_.enumtype.md)<`T`>|
| `Optional` value | `any` |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *[Base](_codec_base_.base.md)<`T`>*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="type"></a>

##  type

gettype(): `string`

*Defined in [codec/EnumType.ts:42](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L42)*

**Returns:** `string`

___
<a id="value"></a>

##  value

getvalue(): [Base](_codec_base_.base.md)<`T`>

*Defined in [codec/EnumType.ts:46](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L46)*

**Returns:** [Base](_codec_base_.base.md)<`T`>

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [codec/EnumType.ts:50](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L50)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input?: *`any`*): [EnumType](_codec_enumtype_.enumtype.md)<`T`>

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [codec/EnumType.ts:54](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L54)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` input | `any` |  {} |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)<`T`>

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [EnumType](_codec_enumtype_.enumtype.md)<`T`>

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [codec/EnumType.ts:73](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [EnumType](_codec_enumtype_.enumtype.md)<`T`>

___
<a id="setvalue"></a>

##  setValue

▸ **setValue**(index?: * [EnumType](_codec_enumtype_.enumtype.md)<`T`> &#124; `number`*, value?: *`any`*): `void`

*Defined in [codec/EnumType.ts:80](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` index |  [EnumType](_codec_enumtype_.enumtype.md)<`T`> &#124; `number`|
| `Optional` value | `any` |

**Returns:** `void`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/EnumType.ts:97](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L97)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/EnumType.ts:101](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L101)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/EnumType.ts:105](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/EnumType.ts#L105)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Base.ts:45](https://github.com/polkadot-js/api/blob/3a7cddd/packages/types/src/codec/Base.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___

