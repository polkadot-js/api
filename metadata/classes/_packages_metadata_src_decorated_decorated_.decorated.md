**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/metadata/src/Decorated/Decorated"](../modules/_packages_metadata_src_decorated_decorated_.md) / Decorated

# Class: Decorated

This class represents a decorated wrapper over the [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md). The
[Metadata](_packages_metadata_src_metadata_metadata_.metadata.md) type is a Codec type returned by the node, and `Decorated`
composes it and populates the `.query`, `.tx` and `.consts` sections.

## Hierarchy

* **Decorated**

## Index

### Constructors

* [constructor](_packages_metadata_src_decorated_decorated_.decorated.md#constructor)

### Properties

* [consts](_packages_metadata_src_decorated_decorated_.decorated.md#consts)
* [metadata](_packages_metadata_src_decorated_decorated_.decorated.md#metadata)
* [query](_packages_metadata_src_decorated_decorated_.decorated.md#query)
* [registry](_packages_metadata_src_decorated_decorated_.decorated.md#registry)
* [tx](_packages_metadata_src_decorated_decorated_.decorated.md#tx)

## Constructors

### constructor

\+ **new Decorated**(`registry`: Registry, `value`: [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md)): [Decorated](_packages_metadata_src_decorated_decorated_.decorated.md)

*Defined in [packages/metadata/src/Decorated/Decorated.ts:28](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`registry` | Registry |
`value` | [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md) |

**Returns:** [Decorated](_packages_metadata_src_decorated_decorated_.decorated.md)

## Properties

### consts

• `Readonly` **consts**: Constants

*Defined in [packages/metadata/src/Decorated/Decorated.ts:20](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L20)*

___

### metadata

• `Readonly` **metadata**: [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md)

*Defined in [packages/metadata/src/Decorated/Decorated.ts:22](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L22)*

___

### query

• `Readonly` **query**: Storage

*Defined in [packages/metadata/src/Decorated/Decorated.ts:26](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L26)*

___

### registry

• `Readonly` **registry**: Registry

*Defined in [packages/metadata/src/Decorated/Decorated.ts:24](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L24)*

___

### tx

• `Readonly` **tx**: ModulesWithCalls

*Defined in [packages/metadata/src/Decorated/Decorated.ts:28](https://github.com/polkadot-js/api/blob/014fa123b/packages/metadata/src/Decorated/Decorated.ts#L28)*
