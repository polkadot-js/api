**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/types/definitions"

# Module: "packages/types/src/types/definitions"

## Index

### Interfaces

* [DefinitionRpc](../interfaces/_packages_types_src_types_definitions_.definitionrpc.md)
* [DefinitionRpcExt](../interfaces/_packages_types_src_types_definitions_.definitionrpcext.md)
* [DefinitionRpcParam](../interfaces/_packages_types_src_types_definitions_.definitionrpcparam.md)
* [DefinitionRpcSub](../interfaces/_packages_types_src_types_definitions_.definitionrpcsub.md)
* [Definitions](../interfaces/_packages_types_src_types_definitions_.definitions.md)

### Type aliases

* [DefinitionType](_packages_types_src_types_definitions_.md#definitiontype)
* [DefinitionTypeEnum](_packages_types_src_types_definitions_.md#definitiontypeenum)
* [DefinitionTypeSet](_packages_types_src_types_definitions_.md#definitiontypeset)
* [DefinitionTypeStruct](_packages_types_src_types_definitions_.md#definitiontypestruct)
* [DefinitionTypeType](_packages_types_src_types_definitions_.md#definitiontypetype)

## Type aliases

### DefinitionType

Ƭ  **DefinitionType**: string \| [DefinitionTypeEnum](_packages_types_src_types_definitions_.md#definitiontypeenum) \| [DefinitionTypeSet](_packages_types_src_types_definitions_.md#definitiontypeset) \| [DefinitionTypeStruct](_packages_types_src_types_definitions_.md#definitiontypestruct)

*Defined in [packages/types/src/types/definitions.ts:12](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/types/definitions.ts#L12)*

___

### DefinitionTypeEnum

Ƭ  **DefinitionTypeEnum**: { _enum: [DefinitionTypeType](_packages_types_src_types_definitions_.md#definitiontypetype)[]  } \| { _enum: Record\<string, [DefinitionTypeType](_packages_types_src_types_definitions_.md#definitiontypetype) \| null>  }

*Defined in [packages/types/src/types/definitions.ts:6](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/types/definitions.ts#L6)*

___

### DefinitionTypeSet

Ƭ  **DefinitionTypeSet**: { _set: Record\<string, number>  }

*Defined in [packages/types/src/types/definitions.ts:8](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/types/definitions.ts#L8)*

#### Type declaration:

Name | Type |
------ | ------ |
`\_set` | Record\<string, number> |

___

### DefinitionTypeStruct

Ƭ  **DefinitionTypeStruct**: Record\<string, [DefinitionTypeType](_packages_types_src_types_definitions_.md#definitiontypetype)> \| { _alias?: Record\<string, [DefinitionTypeType](_packages_types_src_types_definitions_.md#definitiontypetype)>  } & Record\<string, unknown>

*Defined in [packages/types/src/types/definitions.ts:10](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/types/definitions.ts#L10)*

___

### DefinitionTypeType

Ƭ  **DefinitionTypeType**: string

*Defined in [packages/types/src/types/definitions.ts:4](https://github.com/polkadot-js/api/blob/73ffb034d/packages/types/src/types/definitions.ts#L4)*
