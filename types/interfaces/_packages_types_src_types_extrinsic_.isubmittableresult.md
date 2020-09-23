[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) › [ISubmittableResult](_packages_types_src_types_extrinsic_.isubmittableresult.md)

# Interface: ISubmittableResult

## Hierarchy

* **ISubmittableResult**

## Index

### Properties

* [events](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-events)
* [isCompleted](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-iscompleted)
* [isError](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-iserror)
* [isFinalized](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-isfinalized)
* [isInBlock](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-isinblock)
* [isWarning](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-iswarning)
* [status](_packages_types_src_types_extrinsic_.isubmittableresult.md#readonly-status)

### Methods

* [filterRecords](_packages_types_src_types_extrinsic_.isubmittableresult.md#filterrecords)
* [findRecord](_packages_types_src_types_extrinsic_.isubmittableresult.md#findrecord)
* [toHuman](_packages_types_src_types_extrinsic_.isubmittableresult.md#tohuman)

## Properties

### `Readonly` events

• **events**: *EventRecord[]*

*Defined in [packages/types/src/types/extrinsic.ts:13](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L13)*

___

### `Readonly` isCompleted

• **isCompleted**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:15](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L15)*

___

### `Readonly` isError

• **isError**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:16](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L16)*

___

### `Readonly` isFinalized

• **isFinalized**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:17](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L17)*

___

### `Readonly` isInBlock

• **isInBlock**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:18](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L18)*

___

### `Readonly` isWarning

• **isWarning**: *boolean*

*Defined in [packages/types/src/types/extrinsic.ts:19](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L19)*

___

### `Readonly` status

• **status**: *ExtrinsicStatus*

*Defined in [packages/types/src/types/extrinsic.ts:14](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L14)*

## Methods

###  filterRecords

▸ **filterRecords**(`section`: string, `method`: string): *EventRecord[]*

*Defined in [packages/types/src/types/extrinsic.ts:21](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord[]*

___

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [packages/types/src/types/extrinsic.ts:22](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*

*Defined in [packages/types/src/types/extrinsic.ts:23](https://github.com/polkadot-js/api/blob/41f1d8f36/packages/types/src/types/extrinsic.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_packages_types_src_types_helpers_.md#anyjson)*
