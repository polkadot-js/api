**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/create/registry"](../modules/_packages_types_src_create_registry_.md) / TypeRegistry

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_packages_types_src_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_packages_types_src_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_packages_types_src_create_registry_.typeregistry.md#chainss58)
* [chainToken](_packages_types_src_create_registry_.typeregistry.md#chaintoken)
* [knownTypes](_packages_types_src_create_registry_.typeregistry.md#knowntypes)
* [signedExtensions](_packages_types_src_create_registry_.typeregistry.md#signedextensions)

### Methods

* [createClass](_packages_types_src_create_registry_.typeregistry.md#createclass)
* [createType](_packages_types_src_create_registry_.typeregistry.md#createtype)
* [findMetaCall](_packages_types_src_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_packages_types_src_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_packages_types_src_create_registry_.typeregistry.md#findmetaevent)
* [get](_packages_types_src_create_registry_.typeregistry.md#get)
* [getChainProperties](_packages_types_src_create_registry_.typeregistry.md#getchainproperties)
* [getClassName](_packages_types_src_create_registry_.typeregistry.md#getclassname)
* [getDefinition](_packages_types_src_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_packages_types_src_create_registry_.typeregistry.md#getorthrow)
* [getOrUnknown](_packages_types_src_create_registry_.typeregistry.md#getorunknown)
* [getSignedExtensionExtra](_packages_types_src_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_packages_types_src_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_packages_types_src_create_registry_.typeregistry.md#hasclass)
* [hasDef](_packages_types_src_create_registry_.typeregistry.md#hasdef)
* [hasType](_packages_types_src_create_registry_.typeregistry.md#hastype)
* [hash](_packages_types_src_create_registry_.typeregistry.md#hash)
* [init](_packages_types_src_create_registry_.typeregistry.md#init)
* [register](_packages_types_src_create_registry_.typeregistry.md#register)
* [setChainProperties](_packages_types_src_create_registry_.typeregistry.md#setchainproperties)
* [setHasher](_packages_types_src_create_registry_.typeregistry.md#sethasher)
* [setKnownTypes](_packages_types_src_create_registry_.typeregistry.md#setknowntypes)
* [setMetadata](_packages_types_src_create_registry_.typeregistry.md#setmetadata)
* [setSignedExtensions](_packages_types_src_create_registry_.typeregistry.md#setsignedextensions)

## Constructors

### constructor

\+ **new TypeRegistry**(): [TypeRegistry](_packages_types_src_create_registry_.typeregistry.md)

*Defined in [packages/types/src/create/registry.ts:117](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L117)*

**Returns:** [TypeRegistry](_packages_types_src_create_registry_.typeregistry.md)

## Accessors

### chainDecimals

• get **chainDecimals**(): number

*Defined in [packages/types/src/create/registry.ts:150](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L150)*

**Returns:** number

___

### chainSS58

• get **chainSS58**(): number \| undefined

*Defined in [packages/types/src/create/registry.ts:156](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L156)*

**Returns:** number \| undefined

___

### chainToken

• get **chainToken**(): string

*Defined in [packages/types/src/create/registry.ts:162](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L162)*

**Returns:** string

___

### knownTypes

• get **knownTypes**(): [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)

*Defined in [packages/types/src/create/registry.ts:168](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L168)*

**Returns:** [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)

___

### signedExtensions

• get **signedExtensions**(): string[]

*Defined in [packages/types/src/create/registry.ts:172](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L172)*

**Returns:** string[]

## Methods

### createClass

▸ **createClass**\<K>(`type`: K): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<InterfaceTypes[K]>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:179](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L179)*

**`describe`** Creates an instance of the class

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

#### Parameters:

Name | Type |
------ | ------ |
`type` | K |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<InterfaceTypes[K]>

___

### createType

▸ **createType**\<K>(`type`: K, ...`params`: unknown[]): InterfaceTypes[K]

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:187](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L187)*

**`description`** Creates an instance of a type as registered

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md) |

#### Parameters:

Name | Type |
------ | ------ |
`type` | K |
`...params` | unknown[] |

**Returns:** InterfaceTypes[K]

___

### findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)): [CallFunction](../interfaces/_packages_types_src_types_calls_.callfunction.md)

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:192](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L192)*

#### Parameters:

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) |

**Returns:** [CallFunction](../interfaces/_packages_types_src_types_calls_.callfunction.md)

___

### findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| DispatchErrorModule): [RegistryError](../interfaces/_packages_types_src_types_registry_.registryerror.md)

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:202](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L202)*

#### Parameters:

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) \| DispatchErrorModule |

**Returns:** [RegistryError](../interfaces/_packages_types_src_types_registry_.registryerror.md)

___

### findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[EventData](_packages_types_src_generic_event_.eventdata.md)>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:215](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L215)*

#### Parameters:

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<[EventData](_packages_types_src_generic_event_.eventdata.md)>

___

### get

▸ **get**\<T>(`name`: string, `withUnknown?`: undefined \| false \| true): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| undefined

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:224](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L224)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined \| false \| true |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T> \| undefined

___

### getChainProperties

▸ **getChainProperties**(): ChainProperties \| undefined

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:255](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L255)*

**Returns:** ChainProperties \| undefined

___

### getClassName

▸ **getClassName**(`clazz`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)): string \| undefined

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:259](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L259)*

#### Parameters:

Name | Type |
------ | ------ |
`clazz` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) |

**Returns:** string \| undefined

___

### getDefinition

▸ **getDefinition**(`name`: string): string \| undefined

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:267](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L267)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string \| undefined

___

### getOrThrow

▸ **getOrThrow**\<T>(`name`: string, `msg?`: undefined \| string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:271](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L271)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined \| string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

___

### getOrUnknown

▸ **getOrUnknown**\<T>(`name`: string): [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:281](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L281)*

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) | Codec |

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>

___

### getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:285](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L285)*

**Returns:** Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)>

___

### getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)>

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:289](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L289)*

**Returns:** Record\<string, keyof [InterfaceTypes](../interfaces/_packages_types_src_types_registry_.interfacetypes.md)>

___

### hasClass

▸ **hasClass**(`name`: string): boolean

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:293](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L293)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** boolean

___

### hasDef

▸ **hasDef**(`name`: string): boolean

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:297](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L297)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** boolean

___

### hasType

▸ **hasType**(`name`: string): boolean

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:301](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L301)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** boolean

___

### hash

▸ **hash**(`data`: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)): [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:305](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L305)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) |

**Returns:** [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)

___

### init

▸ **init**(): this

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:134](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L134)*

**Returns:** this

___

### register

▸ **register**(`type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:309](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L309)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) \| [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes) |

**Returns:** void

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:312](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L312)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md) |

**Returns:** void

___

### setChainProperties

▸ **setChainProperties**(`properties?`: [ChainProperties](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties)): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:349](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L349)*

#### Parameters:

Name | Type |
------ | ------ |
`properties?` | [ChainProperties](../interfaces/_packages_types_src_augment_registry_._registry_.interfacetypes.md#chainproperties) |

**Returns:** void

___

### setHasher

▸ **setHasher**(`hasher`: (data: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)) => [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)): void

*Defined in [packages/types/src/create/registry.ts:355](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L355)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`hasher` | (data: [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array)) => [Uint8Array](_packages_types_src_codec_raw_.raw.md#uint8array) | blake2AsU8a |

**Returns:** void

___

### setKnownTypes

▸ **setKnownTypes**(`knownTypes`: [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md)): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:359](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L359)*

#### Parameters:

Name | Type |
------ | ------ |
`knownTypes` | [RegisteredTypes](../interfaces/_packages_types_src_types_registry_.registeredtypes.md) |

**Returns:** void

___

### setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_packages_types_src_types_registry_.registrymetadata.md), `signedExtensions?`: string[]): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:364](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L364)*

#### Parameters:

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_packages_types_src_types_registry_.registrymetadata.md) |
`signedExtensions?` | string[] |

**Returns:** void

___

### setSignedExtensions

▸ **setSignedExtensions**(`signedExtensions`: string[]): void

*Implementation of [Registry](../interfaces/_packages_types_src_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:380](https://github.com/polkadot-js/api/blob/cb93cb34b/packages/types/src/create/registry.ts#L380)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`signedExtensions` | string[] | defaultExtensions |

**Returns:** void
