

# Hierarchy

 [Base](_codec_base_.base.md)<`number`>

**↳ Enum**

↳  [StorageFunctionModifier](_metadata_.storagefunctionmodifier.md)

↳  [NewAccountOutcome](_newaccountoutcome_.newaccountoutcome.md)

↳  [VoteThreshold](_votethreshold_.votethreshold.md)

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Enum**(def: *`EnumDef`*, value?: * [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`*): [Enum](_codec_enum_.enum.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [codec/Enum.ts:22](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L22)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| def | `EnumDef` | - |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** [Enum](_codec_enum_.enum.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [codec/Enum.ts:42](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L42)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Enum.ts:46](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L46)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [codec/Enum.ts:50](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L50)*

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Defined in [codec/Enum.ts:54](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L54)*

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [codec/Enum.ts:58](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L58)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [codec/Enum.ts:62](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeenum"></a>

## `<Static>` decodeEnum

▸ **decodeEnum**(value?: * [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`*): `number`

*Defined in [codec/Enum.ts:32](https://github.com/polkadot-js/api/blob/2aa78f2/packages/types/src/codec/Enum.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Enum](_codec_enum_.enum.md) &#124; `Uint8Array` &#124; `number`| 0 |

**Returns:** `number`

___

