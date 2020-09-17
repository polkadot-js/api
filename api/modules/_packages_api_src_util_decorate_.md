[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/util/decorate"](_packages_api_src_util_decorate_.md)

# Module: "packages/api/src/util/decorate"

## Index

### Type aliases

* [DeriveAllSections](_packages_api_src_util_decorate_.md#deriveallsections)

### Functions

* [decorateSections](_packages_api_src_util_decorate_.md#decoratesections)

## Type aliases

###  DeriveAllSections

Ƭ **DeriveAllSections**: *object*

*Defined in [packages/api/src/util/decorate.ts:13](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/util/decorate.ts#L13)*

#### Type declaration:

## Functions

###  decorateSections

▸ **decorateSections**‹**ApiType**, **AllSections**›(`allSections`: AllSections, `decorateMethod`: [DecorateMethod](_packages_api_src_types_base_.md#decoratemethod)‹ApiType›): *[DeriveAllSections](_packages_api_src_util_decorate_.md#deriveallsections)‹ApiType, AllSections›*

*Defined in [packages/api/src/util/decorate.ts:44](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api/src/util/decorate.ts#L44)*

This is a section decorator which keeps all type information.

**Type parameters:**

▪ **ApiType**: *[ApiTypes](_packages_api_src_types_base_.md#apitypes)*

▪ **AllSections**: *AnyDerive*

**Parameters:**

Name | Type |
------ | ------ |
`allSections` | AllSections |
`decorateMethod` | [DecorateMethod](_packages_api_src_types_base_.md#decoratemethod)‹ApiType› |

**Returns:** *[DeriveAllSections](_packages_api_src_util_decorate_.md#deriveallsections)‹ApiType, AllSections›*
