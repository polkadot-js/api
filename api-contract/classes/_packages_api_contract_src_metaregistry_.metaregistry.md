**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/MetaRegistry"](../modules/_packages_api_contract_src_metaregistry_.md) / MetaRegistry

# Class: MetaRegistry

## Hierarchy

* MetadataRegistryLookup

  ↳ **MetaRegistry**

  ↳↳ [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)

## Index

### Constructors

* [constructor](_packages_api_contract_src_metaregistry_.metaregistry.md#constructor)

### Properties

* [registry](_packages_api_contract_src_metaregistry_.metaregistry.md#registry)
* [typeDefs](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefs)

### Methods

* [hasTypeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#hastypedefat)
* [setTypeDefAtIndex](_packages_api_contract_src_metaregistry_.metaregistry.md#settypedefatindex)
* [stringsAt](_packages_api_contract_src_metaregistry_.metaregistry.md#stringsat)
* [typeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typeat)
* [typeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefat)
* [typeDefForOption](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforoption)
* [typeDefForResult](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforresult)
* [typeDefForStruct](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforstruct)
* [typeDefFromMetaType](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatypeat)
* [typesAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typesat)

## Constructors

### constructor

\+ **new MetaRegistry**(`registry`: Registry, `json`: MetaRegistryJson): [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)

*Overrides void*

*Defined in [packages/api-contract/src/MetaRegistry.ts:106](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L106)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)

## Properties

### registry

• `Readonly` **registry**: Registry

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[registry](_packages_api_contract_src_metaregistry_.metaregistry.md#registry)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:36](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L36)*

___

### typeDefs

•  **typeDefs**: TypeDef[] = []

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefs](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefs)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:42](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L42)*

## Methods

### hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): boolean

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[hasTypeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:94](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L94)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** boolean

___

### setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): void

*Defined in [packages/api-contract/src/MetaRegistry.ts:114](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L114)*

#### Parameters:

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** void

___

### stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): string[]

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[stringsAt](_packages_api_contract_src_metaregistry_.metaregistry.md#stringsat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:82](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L82)*

#### Parameters:

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** string[]

___

### typeAt

▸ **typeAt**(`index`: TypeIndex): MetaType

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:86](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L86)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** MetaType

___

### typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick\<TypeDef, never>): TypeDef

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:98](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L98)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick\<TypeDef, never> | {} |

**Returns:** TypeDef

___

### typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): Pick\<TypeDef, any>

*Defined in [packages/api-contract/src/MetaRegistry.ts:303](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L303)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** Pick\<TypeDef, any>

___

### typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): Pick\<TypeDef, any>

*Defined in [packages/api-contract/src/MetaRegistry.ts:312](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L312)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** Pick\<TypeDef, any>

___

### typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct \| MetaTypeDefEnumVariantStruct): Pick\<TypeDef, any>

*Defined in [packages/api-contract/src/MetaRegistry.ts:321](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L321)*

#### Parameters:

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct \| MetaTypeDefEnumVariantStruct |

**Returns:** Pick\<TypeDef, any>

___

### typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): TypeDef

*Defined in [packages/api-contract/src/MetaRegistry.ts:174](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L174)*

#### Parameters:

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** TypeDef

___

### typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): TypeDef

*Defined in [packages/api-contract/src/MetaRegistry.ts:183](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L183)*

#### Parameters:

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** TypeDef

___

### typesAt

▸ **typesAt**(`indices`: TypeIndex[]): MetaType[]

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typesAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typesat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:90](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api-contract/src/MetaRegistry.ts#L90)*

#### Parameters:

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** MetaType[]
