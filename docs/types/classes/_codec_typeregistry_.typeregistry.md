

# Hierarchy

**TypeRegistry**

# Properties

<a id="defaultregistry"></a>

## `<Static>` defaultRegistry

**● defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:12](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/codec/typeRegistry.ts#L12)*

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`string`*): [Constructor](../modules/_types_.md#constructor) | `undefined`

*Defined in [codec/typeRegistry.ts:47](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/codec/typeRegistry.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Constructor](../modules/_types_.md#constructor) | `undefined`

___
<a id="register"></a>

##  register

▸ **register**(type: *[Constructor](../modules/_types_.md#constructor) | [RegistryTypes](../modules/_types_.md#registrytypes)*): `void`

▸ **register**(name: *`string`*, type: *[Constructor](../modules/_types_.md#constructor)*): `void`

*Defined in [codec/typeRegistry.ts:16](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/codec/typeRegistry.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Constructor](../modules/_types_.md#constructor) | [RegistryTypes](../modules/_types_.md#registrytypes) |

**Returns:** `void`

*Defined in [codec/typeRegistry.ts:17](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/codec/typeRegistry.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| type | [Constructor](../modules/_types_.md#constructor) |

**Returns:** `void`

___

