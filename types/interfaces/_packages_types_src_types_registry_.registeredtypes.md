**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/registry"](../modules/_packages_types_src_types_registry_.md) / RegisteredTypes

# Interface: RegisteredTypes

## Hierarchy

* **RegisteredTypes**

## Index

### Properties

* [types](_packages_types_src_types_registry_.registeredtypes.md#types)
* [typesAlias](_packages_types_src_types_registry_.registeredtypes.md#typesalias)
* [typesBundle](_packages_types_src_types_registry_.registeredtypes.md#typesbundle)
* [typesChain](_packages_types_src_types_registry_.registeredtypes.md#typeschain)
* [typesSpec](_packages_types_src_types_registry_.registeredtypes.md#typesspec)

## Properties

### types

• `Optional` **types**: [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)

*Defined in [packages/types/src/types/registry.ts:118](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/types/registry.ts#L118)*

**`description`** Additional types used by runtime modules. This is necessary if the runtime modules
uses types not available in the base Substrate runtime.

___

### typesAlias

• `Optional` **typesAlias**: Record\<string, [OverrideModuleType](../modules/_packages_types_src_types_registry_.md#overridemoduletype)>

*Defined in [packages/types/src/types/registry.ts:122](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/types/registry.ts#L122)*

**`description`** Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.

___

### typesBundle

• `Optional` **typesBundle**: [OverrideBundleType](_packages_types_src_types_registry_.overridebundletype.md)

*Defined in [packages/types/src/types/registry.ts:126](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/types/registry.ts#L126)*

**`description`** A bundle of types related to chain & spec that is injected based on what the chain contains

___

### typesChain

• `Optional` **typesChain**: Record\<string, [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)>

*Defined in [packages/types/src/types/registry.ts:130](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/types/registry.ts#L130)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### typesSpec

• `Optional` **typesSpec**: Record\<string, [RegistryTypes](../modules/_packages_types_src_types_registry_.md#registrytypes)>

*Defined in [packages/types/src/types/registry.ts:134](https://github.com/polkadot-js/api/blob/19d6165bd/packages/types/src/types/registry.ts#L134)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
