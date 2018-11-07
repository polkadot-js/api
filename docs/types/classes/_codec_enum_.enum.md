

# Hierarchy

 [Base](_codec_base_.base.md)<`number`>

**↳ Enum**

↳  [StorageFunctionModifier](_metadata_.storagefunctionmodifier.md)

↳  [NewAccountOutcome](_newaccountoutcome_.newaccountoutcome.md)

↳  [VoteThreshold](_votethreshold_.votethreshold.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Enum**(def: *`EnumDef`*, value?: * [Enum](_codec_enum_.enum.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `number`*): [Enum](_codec_enum_.enum.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:22](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L22)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| def | `EnumDef` | - |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** [Enum](_codec_enum_.enum.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`number`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [codec/Enum.ts:44](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L44)*

**Returns:** `number`

___

# Methods

<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/Enum.ts:48](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L48)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Enum.ts:52](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L52)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/Enum.ts:56](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L56)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [codec/Enum.ts:60](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

## `<Static>` decodeEnum

▸ **decodeEnum**(value?: * [Enum](_codec_enum_.enum.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `number`*): `number`

*Defined in [codec/Enum.ts:32](https://github.com/polkadot-js/api/blob/cb9a48d/packages/types/src/codec/Enum.ts#L32)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; [U8a](_codec_u8a_.u8a.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `number`

___

