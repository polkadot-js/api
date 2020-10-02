**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / ISubmittableResult

# Interface: ISubmittableResult

## Hierarchy

* **ISubmittableResult**

## Index

### Properties

* [events](_packages_types_src_types_extrinsic_.isubmittableresult.md#events)
* [isCompleted](_packages_types_src_types_extrinsic_.isubmittableresult.md#iscompleted)
* [isError](_packages_types_src_types_extrinsic_.isubmittableresult.md#iserror)
* [isFinalized](_packages_types_src_types_extrinsic_.isubmittableresult.md#isfinalized)
* [isInBlock](_packages_types_src_types_extrinsic_.isubmittableresult.md#isinblock)
* [isWarning](_packages_types_src_types_extrinsic_.isubmittableresult.md#iswarning)
* [status](_packages_types_src_types_extrinsic_.isubmittableresult.md#status)

### Methods

* [filterRecords](_packages_types_src_types_extrinsic_.isubmittableresult.md#filterrecords)
* [findRecord](_packages_types_src_types_extrinsic_.isubmittableresult.md#findrecord)
* [toHuman](_packages_types_src_types_extrinsic_.isubmittableresult.md#tohuman)

## Properties

### events

• `Readonly` **events**: EventRecord[]

*Defined in [packages/types/src/types/extrinsic.ts:13](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L13)*

___

### isCompleted

• `Readonly` **isCompleted**: boolean

*Defined in [packages/types/src/types/extrinsic.ts:15](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L15)*

___

### isError

• `Readonly` **isError**: boolean

*Defined in [packages/types/src/types/extrinsic.ts:16](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L16)*

___

### isFinalized

• `Readonly` **isFinalized**: boolean

*Defined in [packages/types/src/types/extrinsic.ts:17](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L17)*

___

### isInBlock

• `Readonly` **isInBlock**: boolean

*Defined in [packages/types/src/types/extrinsic.ts:18](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L18)*

___

### isWarning

• `Readonly` **isWarning**: boolean

*Defined in [packages/types/src/types/extrinsic.ts:19](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L19)*

___

### status

• `Readonly` **status**: ExtrinsicStatus

*Defined in [packages/types/src/types/extrinsic.ts:14](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L14)*

## Methods

### filterRecords

▸ **filterRecords**(`section`: string, `method`: string): EventRecord[]

*Defined in [packages/types/src/types/extrinsic.ts:21](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** EventRecord[]

___

### findRecord

▸ **findRecord**(`section`: string, `method`: string): EventRecord \| undefined

*Defined in [packages/types/src/types/extrinsic.ts:22](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** EventRecord \| undefined

___

### toHuman

▸ **toHuman**(`isExtended?`: undefined \| false \| true): [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)

*Defined in [packages/types/src/types/extrinsic.ts:23](https://github.com/polkadot-js/api/blob/e055438c5/packages/types/src/types/extrinsic.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`isExtended?` | undefined \| false \| true |

**Returns:** [AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)
