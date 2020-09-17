[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/create/createType"](_packages_types_src_create_createtype_.md)

# Module: "packages/types/src/create/createType"

## Index

### Functions

* [createType](_packages_types_src_create_createtype_.md#createtype)
* [createTypeUnsafe](_packages_types_src_create_createtype_.md#createtypeunsafe)

## Functions

###  createType

▸ **createType**‹**K**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: K, ...`params`: any[]): *InterfaceTypes[K]*

*Defined in [packages/types/src/create/createType.ts:77](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/create/createType.ts#L77)*

Create an instance of a `type` with a given `params`.

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`type` | K | A recognizable string representing the type to create an instance from |
`...params` | any[] | The value to instantiate the type with  |

**Returns:** *InterfaceTypes[K]*

___

###  createTypeUnsafe

▸ **createTypeUnsafe**‹**T**, **K**›(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: K, `params`: any[], `isPedantic?`: undefined | false | true): *T*

*Defined in [packages/types/src/create/createType.ts:61](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/create/createType.ts#L61)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_packages_types_src_types_codec_.codec.md)*

▪ **K**: *string*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) | - |
`type` | K | - |
`params` | any[] | [] |
`isPedantic?` | undefined &#124; false &#124; true | - |

**Returns:** *T*
