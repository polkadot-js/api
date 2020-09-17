[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/metadata/src/Decorated/Decorated"](../modules/_packages_metadata_src_decorated_decorated_.md) › [Decorated](_packages_metadata_src_decorated_decorated_.decorated.md)

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

* [consts](_packages_metadata_src_decorated_decorated_.decorated.md#readonly-consts)
* [metadata](_packages_metadata_src_decorated_decorated_.decorated.md#readonly-metadata)
* [query](_packages_metadata_src_decorated_decorated_.decorated.md#readonly-query)
* [registry](_packages_metadata_src_decorated_decorated_.decorated.md#readonly-registry)
* [tx](_packages_metadata_src_decorated_decorated_.decorated.md#readonly-tx)

## Constructors

###  constructor

\+ **new Decorated**(`registry`: Registry, `value?`: Uint8Array | string | [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md)): *[Decorated](_packages_metadata_src_decorated_decorated_.decorated.md)*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:27](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`value?` | Uint8Array &#124; string &#124; [Metadata](_packages_metadata_src_metadata_metadata_.metadata.md) |

**Returns:** *[Decorated](_packages_metadata_src_decorated_decorated_.decorated.md)*

## Properties

### `Readonly` consts

• **consts**: *Constants*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:19](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L19)*

___

### `Readonly` metadata

• **metadata**: *[Metadata](_packages_metadata_src_metadata_metadata_.metadata.md)*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:21](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L21)*

___

### `Readonly` query

• **query**: *Storage*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:25](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L25)*

___

### `Readonly` registry

• **registry**: *Registry*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:23](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L23)*

___

### `Readonly` tx

• **tx**: *ModulesWithCalls*

*Defined in [packages/metadata/src/Decorated/Decorated.ts:27](https://github.com/polkadot-js/api/blob/4596e434d/packages/metadata/src/Decorated/Decorated.ts#L27)*
