

# Hierarchy

**TypeRegistry**

# Properties

<a id="defaultregistry"></a>

## `<Static>` defaultRegistry

**● defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:10](https://github.com/polkadot-js/api/blob/101f869/packages/types/src/codec/typeRegistry.ts#L10)*

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`string`*):  [Constructor](../modules/_types_.md#constructor) &#124; `undefined`

*Defined in [codec/typeRegistry.ts:34](https://github.com/polkadot-js/api/blob/101f869/packages/types/src/codec/typeRegistry.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:**  [Constructor](../modules/_types_.md#constructor) &#124; `undefined`

___
<a id="register"></a>

##  register

▸ **register**(type: * [Constructor](../modules/_types_.md#constructor) &#124; `object`*): `void`

▸ **register**(name: *`string`*, type: *[Constructor](../modules/_types_.md#constructor)*): `void`

*Defined in [codec/typeRegistry.ts:14](https://github.com/polkadot-js/api/blob/101f869/packages/types/src/codec/typeRegistry.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type |  [Constructor](../modules/_types_.md#constructor) &#124; `object`|

**Returns:** `void`

*Defined in [codec/typeRegistry.ts:15](https://github.com/polkadot-js/api/blob/101f869/packages/types/src/codec/typeRegistry.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| type | [Constructor](../modules/_types_.md#constructor) |

**Returns:** `void`

___

