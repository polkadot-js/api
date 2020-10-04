**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/api-contract/src/Abi"](../modules/_packages_api_contract_src_abi_.md) / ContractAbi

# Class: ContractAbi

## Hierarchy

* [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md)

  ↳ **ContractAbi**

## Implements

* InterfaceAbi

## Index

### Constructors

* [constructor](_packages_api_contract_src_abi_.contractabi.md#constructor)

### Properties

* [abi](_packages_api_contract_src_abi_.contractabi.md#abi)
* [constructors](_packages_api_contract_src_abi_.contractabi.md#constructors)
* [messages](_packages_api_contract_src_abi_.contractabi.md#messages)
* [registry](_packages_api_contract_src_abi_.contractabi.md#registry)
* [typeDefs](_packages_api_contract_src_abi_.contractabi.md#typedefs)

### Methods

* [convertAbi](_packages_api_contract_src_abi_.contractabi.md#convertabi)
* [convertArgs](_packages_api_contract_src_abi_.contractabi.md#convertargs)
* [convertConstructors](_packages_api_contract_src_abi_.contractabi.md#convertconstructors)
* [convertContract](_packages_api_contract_src_abi_.contractabi.md#convertcontract)
* [convertEvent](_packages_api_contract_src_abi_.contractabi.md#convertevent)
* [convertMessage](_packages_api_contract_src_abi_.contractabi.md#convertmessage)
* [convertStorage](_packages_api_contract_src_abi_.contractabi.md#convertstorage)
* [convertStorageLayout](_packages_api_contract_src_abi_.contractabi.md#convertstoragelayout)
* [convertStorageRange](_packages_api_contract_src_abi_.contractabi.md#convertstoragerange)
* [convertStorageStruct](_packages_api_contract_src_abi_.contractabi.md#convertstoragestruct)
* [convertType](_packages_api_contract_src_abi_.contractabi.md#converttype)
* [createMessage](_packages_api_contract_src_abi_.contractabi.md#createmessage)
* [hasTypeDefAt](_packages_api_contract_src_abi_.contractabi.md#hastypedefat)
* [setTypeDefAtIndex](_packages_api_contract_src_abi_.contractabi.md#settypedefatindex)
* [stringsAt](_packages_api_contract_src_abi_.contractabi.md#stringsat)
* [typeAt](_packages_api_contract_src_abi_.contractabi.md#typeat)
* [typeDefAt](_packages_api_contract_src_abi_.contractabi.md#typedefat)
* [typeDefForOption](_packages_api_contract_src_abi_.contractabi.md#typedefforoption)
* [typeDefForResult](_packages_api_contract_src_abi_.contractabi.md#typedefforresult)
* [typeDefForStruct](_packages_api_contract_src_abi_.contractabi.md#typedefforstruct)
* [typeDefFromMetaType](_packages_api_contract_src_abi_.contractabi.md#typedeffrommetatype)
* [typeDefFromMetaTypeAt](_packages_api_contract_src_abi_.contractabi.md#typedeffrommetatypeat)
* [typesAt](_packages_api_contract_src_abi_.contractabi.md#typesat)
* [validateAbi](_packages_api_contract_src_abi_.contractabi.md#validateabi)
* [validateArgs](_packages_api_contract_src_abi_.contractabi.md#validateargs)
* [validateConstructors](_packages_api_contract_src_abi_.contractabi.md#validateconstructors)
* [validateMessages](_packages_api_contract_src_abi_.contractabi.md#validatemessages)

## Constructors

### constructor

\+ **new ContractAbi**(`registry`: Registry, `abi`: ContractABIPre): [ContractAbi](_packages_api_contract_src_abi_.contractabi.md)

*Overrides [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[constructor](_packages_api_contract_src_metaregistry_.metaregistry.md#constructor)*

*Defined in [packages/api-contract/src/Abi.ts:16](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/Abi.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`abi` | ContractABIPre |

**Returns:** [ContractAbi](_packages_api_contract_src_abi_.contractabi.md)

## Properties

### abi

• `Readonly` **abi**: ContractABI

*Defined in [packages/api-contract/src/Abi.ts:12](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/Abi.ts#L12)*

___

### constructors

• `Readonly` **constructors**: AbiConstructors

*Defined in [packages/api-contract/src/Abi.ts:14](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/Abi.ts#L14)*

___

### messages

• `Readonly` **messages**: AbiMessages

*Defined in [packages/api-contract/src/Abi.ts:16](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/Abi.ts#L16)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[registry](_packages_api_contract_src_metaregistry_.metaregistry.md#registry)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:36](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L36)*

___

### typeDefs

•  **typeDefs**: TypeDef[] = []

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefs](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefs)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:42](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L42)*

## Methods

### convertAbi

▸ **convertAbi**(`__namedParameters`: { contract: ContractABIContractPre ; storage: ContractABIStorageStructPre  }): ContractABI

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertAbi](_packages_api_contract_src_contractregistry_.contractregistry.md#convertabi)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:145](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L145)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { contract: ContractABIContractPre ; storage: ContractABIStorageStructPre  } |

**Returns:** ContractABI

___

### convertArgs

▸ **convertArgs**(`args`: ContractABIArgBasePre[]): any[]

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertArgs](_packages_api_contract_src_contractregistry_.contractregistry.md#convertargs)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:152](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L152)*

#### Parameters:

Name | Type |
------ | ------ |
`args` | ContractABIArgBasePre[] |

**Returns:** any[]

___

### convertConstructors

▸ **convertConstructors**(`constructors`: ContractABIMessagePre[]): ContractABIMessage[]

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertConstructors](_packages_api_contract_src_contractregistry_.contractregistry.md#convertconstructors)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:174](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L174)*

#### Parameters:

Name | Type |
------ | ------ |
`constructors` | ContractABIMessagePre[] |

**Returns:** ContractABIMessage[]

___

### convertContract

▸ **convertContract**(`__namedParameters`: { constructors: ContractABIMessagePre[] ; contract: contract ; events: undefined \| ContractABIEventPre[] ; messages: ContractABIMessagePre[] ; name: number  }): ContractABIContract

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertContract](_packages_api_contract_src_contractregistry_.contractregistry.md#convertcontract)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:162](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L162)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { constructors: ContractABIMessagePre[] ; contract: contract ; events: undefined \| ContractABIEventPre[] ; messages: ContractABIMessagePre[] ; name: number  } |

**Returns:** ContractABIContract

___

### convertEvent

▸ **convertEvent**(`__namedParameters`: { args: ContractABIEventArgPre[]  }): ContractABIEvent

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertEvent](_packages_api_contract_src_contractregistry_.contractregistry.md#convertevent)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:192](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L192)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { args: ContractABIEventArgPre[]  } |

**Returns:** ContractABIEvent

___

### convertMessage

▸ **convertMessage**(`__namedParameters`: { args: ContractABIArgBasePre[] ; message: message ; name: number ; returnType: null \| ContractABITypePre  }): ContractABIMessage

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertMessage](_packages_api_contract_src_contractregistry_.contractregistry.md#convertmessage)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:182](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L182)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { args: ContractABIArgBasePre[] ; message: message ; name: number ; returnType: null \| ContractABITypePre  } |

**Returns:** ContractABIMessage

___

### convertStorage

▸ **convertStorage**(`storage`: ContractABIStoragePre): ContractABIStorage

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertStorage](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstorage)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:199](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L199)*

#### Parameters:

Name | Type |
------ | ------ |
`storage` | ContractABIStoragePre |

**Returns:** ContractABIStorage

___

### convertStorageLayout

▸ **convertStorageLayout**(`storageLayout`: ContractABIStorageLayoutPre): ContractABIStorageLayout

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertStorageLayout](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragelayout)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:203](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L203)*

#### Parameters:

Name | Type |
------ | ------ |
`storageLayout` | ContractABIStorageLayoutPre |

**Returns:** ContractABIStorageLayout

___

### convertStorageRange

▸ **convertStorageRange**(`__namedParameters`: { range: range ; type: number  }): ContractABIRange

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertStorageRange](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragerange)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:221](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L221)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { range: range ; type: number  } |

**Returns:** ContractABIRange

___

### convertStorageStruct

▸ **convertStorageStruct**(`__namedParameters`: { structFields: ContractABIStorageStructFieldPre[] ; structType: number  }): ContractABIStorageStruct

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertStorageStruct](_packages_api_contract_src_contractregistry_.contractregistry.md#convertstoragestruct)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:211](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L211)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { structFields: ContractABIStorageStructFieldPre[] ; structType: number  } |

**Returns:** ContractABIStorageStruct

___

### convertType

▸ **convertType**(`__namedParameters`: { displayNameIndices: number[] ; ty: number  }): TypeDef

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[convertType](_packages_api_contract_src_contractregistry_.contractregistry.md#converttype)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:156](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L156)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { displayNameIndices: number[] ; ty: number  } |

**Returns:** TypeDef

___

### createMessage

▸ **createMessage**(`name`: string, `message`: Partial\<ContractABIMessage> & ContractABIMessageBase): ContractABIFn

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[createMessage](_packages_api_contract_src_contractregistry_.contractregistry.md#createmessage)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:108](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L108)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`message` | Partial\<ContractABIMessage> & ContractABIMessageBase |

**Returns:** ContractABIFn

___

### hasTypeDefAt

▸ **hasTypeDefAt**(`index`: TypeIndex): boolean

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[hasTypeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#hastypedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:94](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L94)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** boolean

___

### setTypeDefAtIndex

▸ **setTypeDefAtIndex**(`typeIndex`: TypeIndex): void

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[setTypeDefAtIndex](_packages_api_contract_src_metaregistry_.metaregistry.md#settypedefatindex)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:114](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L114)*

#### Parameters:

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** void

___

### stringsAt

▸ **stringsAt**(`indices`: StringIndex[]): string[]

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[stringsAt](_packages_api_contract_src_metaregistry_.metaregistry.md#stringsat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:82](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L82)*

#### Parameters:

Name | Type |
------ | ------ |
`indices` | StringIndex[] |

**Returns:** string[]

___

### typeAt

▸ **typeAt**(`index`: TypeIndex): MetaType

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:86](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L86)*

#### Parameters:

Name | Type |
------ | ------ |
`index` | TypeIndex |

**Returns:** MetaType

___

### typeDefAt

▸ **typeDefAt**(`index`: TypeIndex, `extra`: Pick\<TypeDef, never>): TypeDef

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:98](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L98)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`index` | TypeIndex | - |
`extra` | Pick\<TypeDef, never> | {} |

**Returns:** TypeDef

___

### typeDefForOption

▸ **typeDefForOption**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): Pick\<TypeDef, any>

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForOption](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforoption)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:303](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L303)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** Pick\<TypeDef, any>

___

### typeDefForResult

▸ **typeDefForResult**(`id`: MetaTypeIdCustom, `typeIndex`: TypeIndex): Pick\<TypeDef, any>

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForResult](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforresult)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:312](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L312)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | MetaTypeIdCustom | - |
`typeIndex` | TypeIndex | -1 |

**Returns:** Pick\<TypeDef, any>

___

### typeDefForStruct

▸ **typeDefForStruct**(`def`: MetaTypeDefStruct \| MetaTypeDefEnumVariantStruct): Pick\<TypeDef, any>

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefForStruct](_packages_api_contract_src_metaregistry_.metaregistry.md#typedefforstruct)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:321](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L321)*

#### Parameters:

Name | Type |
------ | ------ |
`def` | MetaTypeDefStruct \| MetaTypeDefEnumVariantStruct |

**Returns:** Pick\<TypeDef, any>

___

### typeDefFromMetaType

▸ **typeDefFromMetaType**(`metaType`: MetaType, `typeIndex?`: TypeIndex): TypeDef

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefFromMetaType](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatype)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:174](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L174)*

#### Parameters:

Name | Type |
------ | ------ |
`metaType` | MetaType |
`typeIndex?` | TypeIndex |

**Returns:** TypeDef

___

### typeDefFromMetaTypeAt

▸ **typeDefFromMetaTypeAt**(`typeIndex`: TypeIndex): TypeDef

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typeDefFromMetaTypeAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typedeffrommetatypeat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:183](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L183)*

#### Parameters:

Name | Type |
------ | ------ |
`typeIndex` | TypeIndex |

**Returns:** TypeDef

___

### typesAt

▸ **typesAt**(`indices`: TypeIndex[]): MetaType[]

*Inherited from [MetaRegistry](_packages_api_contract_src_metaregistry_.metaregistry.md).[typesAt](_packages_api_contract_src_metaregistry_.metaregistry.md#typesat)*

*Defined in [packages/api-contract/src/MetaRegistry.ts:90](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/MetaRegistry.ts#L90)*

#### Parameters:

Name | Type |
------ | ------ |
`indices` | TypeIndex[] |

**Returns:** MetaType[]

___

### validateAbi

▸ **validateAbi**(`abi`: ContractABIPre): void

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[validateAbi](_packages_api_contract_src_contractregistry_.contractregistry.md#validateabi)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:95](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L95)*

#### Parameters:

Name | Type |
------ | ------ |
`abi` | ContractABIPre |

**Returns:** void

___

### validateArgs

▸ **validateArgs**(`name`: string, `args`: ContractABIArgBasePre[]): void

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[validateArgs](_packages_api_contract_src_contractregistry_.contractregistry.md#validateargs)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:56](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L56)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`args` | ContractABIArgBasePre[] |

**Returns:** void

___

### validateConstructors

▸ **validateConstructors**(`__namedParameters`: { contract: { constructors: ContractABIMessagePre[]  }  }): void

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[validateConstructors](_packages_api_contract_src_contractregistry_.contractregistry.md#validateconstructors)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:68](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L68)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { contract: { constructors: ContractABIMessagePre[]  }  } |

**Returns:** void

___

### validateMessages

▸ **validateMessages**(`__namedParameters`: { contract: { messages: ContractABIMessagePre[]  }  }): void

*Inherited from [ContractRegistry](_packages_api_contract_src_contractregistry_.contractregistry.md).[validateMessages](_packages_api_contract_src_contractregistry_.contractregistry.md#validatemessages)*

*Defined in [packages/api-contract/src/ContractRegistry.ts:78](https://github.com/polkadot-js/api/blob/f778bf32e/packages/api-contract/src/ContractRegistry.ts#L78)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { contract: { messages: ContractABIMessagePre[]  }  } |

**Returns:** void
