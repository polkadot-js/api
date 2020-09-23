[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/registry"](../modules/_packages_types_src_types_registry_.md) › [RegisteredTypes](_packages_types_src_types_registry_.registeredtypes.md)

# Interface: RegisteredTypes

## Hierarchy

* **RegisteredTypes**

## Index

### Properties

* [types](_packages_types_src_types_registry_.registeredtypes.md#optional-types)
* [typesAlias](_packages_types_src_types_registry_.registeredtypes.md#optional-typesalias)
* [typesBundle](_packages_types_src_types_registry_.registeredtypes.md#optional-typesbundle)
* [typesChain](_packages_types_src_types_registry_.registeredtypes.md#optional-typeschain)
* [typesSpec](_packages_types_src_types_registry_.registeredtypes.md#optional-typesspec)

## Properties

### `Optional` types

• **types**? : *[RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)*

*Defined in [packages/types/src/types/registry.ts:118](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/registry.ts#L118)*

**`description`** Additional types used by runtime modules. This is necessary if the runtime modules
uses types not available in the base Substrate runtime.

___

### `Optional` typesAlias

• **typesAlias**? : *Record‹string, [OverrideModuleType](../modules/_packages_types_src_types_registry_.md#overridemoduletype)›*

*Defined in [packages/types/src/types/registry.ts:122](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/registry.ts#L122)*

**`description`** Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.

___

### `Optional` typesBundle

• **typesBundle**? : *[OverrideBundleType](_packages_types_src_types_registry_.overridebundletype.md)*

*Defined in [packages/types/src/types/registry.ts:126](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/registry.ts#L126)*

**`description`** A bundle of types related to chain & spec that is injected based on what the chain contains

___

### `Optional` typesChain

• **typesChain**? : *Record‹string, [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:130](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/registry.ts#L130)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### `Optional` typesSpec

• **typesSpec**? : *Record‹string, [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:134](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/registry.ts#L134)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
