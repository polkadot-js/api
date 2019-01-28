

# Hierarchy

**TypeRegistry**

# Properties

<a id="defaultregistry"></a>

## `<Static>` defaultRegistry

**● defaultRegistry**: *[TypeRegistry](_codec_typeregistry_.typeregistry.md)* =  new TypeRegistry()

*Defined in [codec/typeRegistry.ts:16](https://github.com/polkadot-js/api/blob/e811d73/packages/types/src/codec/typeRegistry.ts#L16)*

___

# Methods

<a id="get"></a>

##  get

▸ **get**(name: *`string`*): [Constructor](../modules/_types_.md#constructor) | `undefined`

*Defined in [codec/typeRegistry.ts:51](https://github.com/polkadot-js/api/blob/e811d73/packages/types/src/codec/typeRegistry.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Constructor](../modules/_types_.md#constructor) | `undefined`

___
<a id="register"></a>

##  register

▸ **register**(type: *[Constructor](../modules/_types_.md#constructor) | `ConstructorObj`*): `void`

▸ **register**(name: *`string`*, type: *[Constructor](../modules/_types_.md#constructor)*): `void`

*Defined in [codec/typeRegistry.ts:20](https://github.com/polkadot-js/api/blob/e811d73/packages/types/src/codec/typeRegistry.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [Constructor](../modules/_types_.md#constructor) | `ConstructorObj` |

**Returns:** `void`

*Defined in [codec/typeRegistry.ts:21](https://github.com/polkadot-js/api/blob/e811d73/packages/types/src/codec/typeRegistry.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| type | [Constructor](../modules/_types_.md#constructor) |

**Returns:** `void`

___

