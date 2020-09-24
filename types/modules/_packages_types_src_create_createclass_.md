**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/create/createClass"

# Module: "packages/types/src/create/createClass"

## Index

### Functions

* [ClassOf](_packages_types_src_create_createclass_.md#classof)
* [ClassOfUnsafe](_packages_types_src_create_createclass_.md#classofunsafe)
* [createClass](_packages_types_src_create_createclass_.md#createclass)
* [getTypeClass](_packages_types_src_create_createclass_.md#gettypeclass)

## Functions

### ClassOf

▸ **ClassOf**\<K>(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `name`: K): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<InterfaceTypes[K]>

*Defined in [packages/types/src/create/createClass.ts:42](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/createClass.ts#L42)*

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`name` | K |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<InterfaceTypes[K]>

___

### ClassOfUnsafe

▸ **ClassOfUnsafe**\<T, K>(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `name`: K): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<FromReg\<T, K>>

*Defined in [packages/types/src/create/createClass.ts:37](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/createClass.ts#L37)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |
`K` | string | string |

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`name` | K |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<FromReg\<T, K>>

___

### createClass

▸ **createClass**\<T, K>(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `type`: K): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<FromReg\<T, K>>

*Defined in [packages/types/src/create/createClass.ts:29](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/createClass.ts#L29)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |
`K` | string | string |

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`type` | K |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<FromReg\<T, K>>

___

### getTypeClass

▸ **getTypeClass**\<T>(`registry`: [Registry](../interfaces/_packages_types_src_types_registry_.registry.md), `value`: TypeDef): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

*Defined in [packages/types/src/create/createClass.ts:181](https://github.com/polkadot-js/api/blob/c6bc664f8/packages/types/src/create/createClass.ts#L181)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_packages_types_src_types_registry_.registry.md) |
`value` | TypeDef |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>
