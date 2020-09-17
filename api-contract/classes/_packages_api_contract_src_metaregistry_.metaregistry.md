[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/MetaRegistry"](../modules/_packages_api_contract_src_metaregistry_.md) › [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)

# Class: MetaRegistry

## Hierarchy

* MetadataRegistryLookup

  ↳ **MetaRegistry**

  ↳ [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)

## Index

### Constructors

* [constructor](_packages_api_contract_src_metaregistry_.metaregistry.md#constructor)

### Properties

* [registry](_packages_api_contract_src_metaregistry_.metaregistry.md#readonly-registry)
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

###  constructor

\+ **new MetaRegistry**(`registry`: Registry, `json`: MetaRegistryJson): *[MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)*

*Overrides void*

*Defined in [packages/api-contract/src/MetaRegistry.ts:107](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** *[MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)*

## Properties

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[registry](_packages_api_contract_src_metaregistry_.metaregistry.md#readonly-registry)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* = []

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefs](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefs)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[hasTypeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Defined in [packages/api-contract/src/MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[stringsAt](_packages_api_contract_src_metaregistry_.metaregistry.md#stringsat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› | {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [packages/api-contract/src/MetaRegistry.ts:304](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L304)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): *Pick‹TypeDef, any›*

*Defined in [packages/api-contract/src/MetaRegistry.ts:313](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L313)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Defined in [packages/api-contract/src/MetaRegistry.ts:322](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Defined in [packages/api-contract/src/MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Defined in [packages/api-contract/src/MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typesAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typesat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*
