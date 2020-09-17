[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/ContractRegistry"](../modules/_packages_api_contract_src_contractregistry_.md) › [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)

# Class: ContractRegistry

## Hierarchy

  ↳ [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md)

  ↳ **ContractRegistry**

  ↳ [ContractAbi](_packages_api_contract_src_abi_.contractabi.md)

## Index

### Constructors

* [constructor](_packages_api_contract_src_contractregistry_.contractregistry.md#constructor)

### Properties

* [registry](_packages_api_contract_src_contractregistry_.contractregistry.md#readonly-registry)
* [typeDefs](_packages_api_contract_src_contractregistry_.contractregistry.md#typedefs)

### Methods

* [convertAbi](_packages_api_contract_src_contractregistry_.contractregistry.md#convertabi)
* [convertArgs](_packages_api_contract_src_contractregistry_.contractregistry.md#convertargs)
* [convertConstructors](_packages_api_contract_src_contractregistry_.contractregistry.md#convertconstructors)
* [convertContract](_packages_api_contract_src_contractregistry_.contractregistry.md#convertcontract)
* [convertEvent](_packages_api_contract_src_contractregistry_.contractregistry.md#convertevent)
* [convertMessage](_packages_api_contract_src_contractregistry_.contractregistry.md#convertmessage)
* [convertStorage](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstorage)
* [convertStorageLayout](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragelayout)
* [convertStorageRange](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragerange)
* [convertStorageStruct](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragestruct)
* [convertType](_packages_api_contract_src_contractregistry_.contractregistry.md#converttype)
* [createMessage](_packages_api_contract_src_contractregistry_.contractregistry.md#createmessage)
* [hasTypeDefAt](_packages_api_contract_src_contractregistry_.contractregistry.md#hastypedefat)
* [setTypeDefAtIndex](_packages_api_contract_src_contractregistry_.contractregistry.md#settypedefatindex)
* [stringsAt](_packages_api_contract_src_contractregistry_.contractregistry.md#stringsat)
* [typeAt](_packages_api_contract_src_contractregistry_.contractregistry.md#typeat)
* [typeDefAt](_packages_api_contract_src_contractregistry_.contractregistry.md#typedefat)
* [typeDefForOption](_packages_api_contract_src_contractregistry_.contractregistry.md#typedefforoption)
* [typeDefForResult](_packages_api_contract_src_contractregistry_.contractregistry.md#typedefforresult)
* [typeDefForStruct](_packages_api_contract_src_contractregistry_.contractregistry.md#typedefforstruct)
* [typeDefFromMetaType](_packages_api_contract_src_contractregistry_.contractregistry.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_packages_api_contract_src_contractregistry_.contractregistry.md#typedeffrommetatypeat)
* [typesAt](_packages_api_contract_src_contractregistry_.contractregistry.md#typesat)
* [validateAbi](_packages_api_contract_src_contractregistry_.contractregistry.md#validateabi)
* [validateArgs](_packages_api_contract_src_contractregistry_.contractregistry.md#validateargs)
* [validateConstructors](_packages_api_contract_src_contractregistry_.contractregistry.md#validateconstructors)
* [validateMessages](_packages_api_contract_src_contractregistry_.contractregistry.md#validatemessages)

## Constructors

###  constructor

\+ **new ContractRegistry**(`registry`: Registry, `json`: MetaRegistryJson): *[ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[constructor](_packages_api_contract_src_metaregistry_.metaregistry.md#constructor)*

*Overrides void*

*Defined in [packages/api-contract/src/MetaRegistry.ts:107](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`json` | MetaRegistryJson |

**Returns:** *[ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)*

## Properties

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[registry](_packages_api_contract_src_metaregistry_.metaregistry.md#readonly-registry)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:37](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L37)*

___

###  typeDefs

• **typeDefs**: *TypeDef[]* = []

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefs](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefs)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:43](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L43)*

## Methods

###  convertAbi

▸ **convertAbi**(`__namedParameters`: object): *ContractABI*

*Defined in [packages/api-contract/src/ContractRegistry.ts:146](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L146)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | ContractABIContractPre |
`storage` | ContractABIStorageStructPre |

**Returns:** *ContractABI*

___

###  convertArgs

▸ **convertArgs**(`args`: ContractABIArgBasePre[]): *any[]*

*Defined in [packages/api-contract/src/ContractRegistry.ts:153](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |

**Returns:** *any[]*

___

###  convertConstructors

▸ **convertConstructors**(`constructors`: ContractABIMessagePre[]): *ContractABIMessage[]*

*Defined in [packages/api-contract/src/ContractRegistry.ts:175](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |

**Returns:** *ContractABIMessage[]*

___

###  convertContract

▸ **convertContract**(`__namedParameters`: object): *ContractABIContract*

*Defined in [packages/api-contract/src/ContractRegistry.ts:163](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L163)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |
`contract` | contract |
`events` | undefined &#124; ContractABIEventPre[] |
`messages` | ContractABIMessagePre[] |
`name` | number |

**Returns:** *ContractABIContract*

___

###  convertEvent

▸ **convertEvent**(`__namedParameters`: object): *ContractABIEvent*

*Defined in [packages/api-contract/src/ContractRegistry.ts:193](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L193)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | ContractABIEventArgPre[] |

**Returns:** *ContractABIEvent*

___

###  convertMessage

▸ **convertMessage**(`__namedParameters`: object): *ContractABIMessage*

*Defined in [packages/api-contract/src/ContractRegistry.ts:183](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L183)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |
`message` | message |
`name` | number |
`returnType` | null &#124; ContractABITypePre |

**Returns:** *ContractABIMessage*

___

###  convertStorage

▸ **convertStorage**(`storage`: ContractABIStoragePre): *ContractABIStorage*

*Defined in [packages/api-contract/src/ContractRegistry.ts:200](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | ContractABIStoragePre |

**Returns:** *ContractABIStorage*

___

###  convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: ContractABIStorageLayoutPre): *ContractABIStorageLayout*

*Defined in [packages/api-contract/src/ContractRegistry.ts:204](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`storageLayout` | ContractABIStorageLayoutPre |

**Returns:** *ContractABIStorageLayout*

___

###  convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: object): *ContractABIRange*

*Defined in [packages/api-contract/src/ContractRegistry.ts:222](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L222)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`range` | range |
`type` | number |

**Returns:** *ContractABIRange*

___

###  convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: object): *ContractABIStorageStruct*

*Defined in [packages/api-contract/src/ContractRegistry.ts:212](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L212)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`structFields` | ContractABIStorageStructFieldPre[] |
`structType` | number |

**Returns:** *ContractABIStorageStruct*

___

###  convertType

▸ **convertType**(`__namedParameters`: object): *TypeDef*

*Defined in [packages/api-contract/src/ContractRegistry.ts:157](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L157)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`displayNameIndices` | number[] |
`ty` | number |

**Returns:** *TypeDef*

___

###  createMessage

▸ **createMessage**(`name`: string, `message`: Partial‹ContractABIMessage› & ContractABIMessageBase): *ContractABIFn*

*Defined in [packages/api-contract/src/ContractRegistry.ts:109](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial‹ContractABIMessage› & ContractABIMessageBase |

**Returns:** *ContractABIFn*

___

###  hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): *boolean*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[hasTypeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:95](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *boolean*

___

###  setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): *void*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_packages_api_contract_src_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:115](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *void*

___

###  stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): *string[]*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[stringsAt](_packages_api_contract_src_metaregistry_.metaregistry.md#stringsat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:83](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** *string[]*

___

###  typeAt

▸ **typeAt**(`index`: TypeIndex): *MetaType*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:87](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** *MetaType*

___

###  typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick‹TypeDef, never›): *TypeDef*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:99](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick‹TypeDef, never› | {} |

**Returns:** *TypeDef*

___

###  typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForOption](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:304](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L304)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForResult](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforresult)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:313](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L313)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): *Pick‹TypeDef, any›*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForStruct](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforstruct)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:322](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct &#124; MetaTypeDefEnumVariantStruct |

**Returns:** *Pick‹TypeDef, any›*

___

###  typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefFromMetaType](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:175](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** *TypeDef*

___

###  typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): *TypeDef*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefFromMetaTypeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatypeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:184](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L184)*

**Parameters:**

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** *TypeDef*

___

###  typesAt

▸ **typesAt**(`indices`: TypeIndex[]): *MetaType[]*

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typesAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typesat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:91](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/MetaRegistry.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** *MetaType[]*

___

###  validateAbi

▸ **validateAbi**(`abi`: ContractABIPre): *void*

*Defined in [packages/api-contract/src/ContractRegistry.ts:96](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`abi` | ContractABIPre |

**Returns:** *void*

___

###  validateArgs

▸ **validateArgs**(`name`: string, `args`: ContractABIArgBasePre[]): *void*

*Defined in [packages/api-contract/src/ContractRegistry.ts:57](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | ContractABIArgBasePre[] |

**Returns:** *void*

___

###  validateConstructors

▸ **validateConstructors**(`__namedParameters`: object): *void*

*Defined in [packages/api-contract/src/ContractRegistry.ts:69](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L69)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*

___

###  validateMessages

▸ **validateMessages**(`__namedParameters`: object): *void*

*Defined in [packages/api-contract/src/ContractRegistry.ts:79](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/ContractRegistry.ts#L79)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contract` | object |

**Returns:** *void*
