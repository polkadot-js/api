[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/submittable/Result"](../modules/_packages_api_src_submittable_result_.md) › [SubmittableResult](_packages_api_src_submittable_result_.submittableresult.md)

# Class: SubmittableResult

## Hierarchy

* **SubmittableResult**

## Implements

* ISubmittableResult

## Index

### Constructors

* [constructor](_packages_api_src_submittable_result_.submittableresult.md#constructor)

### Properties

* [events](_packages_api_src_submittable_result_.submittableresult.md#readonly-events)
* [status](_packages_api_src_submittable_result_.submittableresult.md#readonly-status)

### Accessors

* [isCompleted](_packages_api_src_submittable_result_.submittableresult.md#iscompleted)
* [isError](_packages_api_src_submittable_result_.submittableresult.md#iserror)
* [isFinalized](_packages_api_src_submittable_result_.submittableresult.md#isfinalized)
* [isInBlock](_packages_api_src_submittable_result_.submittableresult.md#isinblock)
* [isWarning](_packages_api_src_submittable_result_.submittableresult.md#iswarning)

### Methods

* [filterRecords](_packages_api_src_submittable_result_.submittableresult.md#filterrecords)
* [findRecord](_packages_api_src_submittable_result_.submittableresult.md#findrecord)
* [toHuman](_packages_api_src_submittable_result_.submittableresult.md#tohuman)

## Constructors

###  constructor

\+ **new SubmittableResult**(`__namedParameters`: object): *[SubmittableResult](_packages_api_src_submittable_result_.submittableresult.md)*

*Defined in [packages/api/src/submittable/Result.ts:12](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L12)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`events` | undefined &#124; EventRecord‹›[] |
`status` | ExtrinsicStatus‹› |

**Returns:** *[SubmittableResult](_packages_api_src_submittable_result_.submittableresult.md)*

## Properties

### `Readonly` events

• **events**: *EventRecord[]*

*Defined in [packages/api/src/submittable/Result.ts:10](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L10)*

___

### `Readonly` status

• **status**: *ExtrinsicStatus*

*Defined in [packages/api/src/submittable/Result.ts:12](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L12)*

## Accessors

###  isCompleted

• **get isCompleted**(): *boolean*

*Defined in [packages/api/src/submittable/Result.ts:19](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L19)*

**Returns:** *boolean*

___

###  isError

• **get isError**(): *boolean*

*Defined in [packages/api/src/submittable/Result.ts:23](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L23)*

**Returns:** *boolean*

___

###  isFinalized

• **get isFinalized**(): *boolean*

*Defined in [packages/api/src/submittable/Result.ts:27](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L27)*

**Returns:** *boolean*

___

###  isInBlock

• **get isInBlock**(): *boolean*

*Defined in [packages/api/src/submittable/Result.ts:31](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L31)*

**Returns:** *boolean*

___

###  isWarning

• **get isWarning**(): *boolean*

*Defined in [packages/api/src/submittable/Result.ts:35](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L35)*

**Returns:** *boolean*

## Methods

###  filterRecords

▸ **filterRecords**(`section`: string, `method`: string): *EventRecord[]*

*Defined in [packages/api/src/submittable/Result.ts:42](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L42)*

**`description`** Filters EventRecords for the specified method & section (there could be multiple)

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord[]*

___

###  findRecord

▸ **findRecord**(`section`: string, `method`: string): *EventRecord | undefined*

*Defined in [packages/api/src/submittable/Result.ts:51](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L51)*

**`description`** Finds an EventRecord for the specified method & section

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`method` | string |

**Returns:** *EventRecord | undefined*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *AnyJson*

*Defined in [packages/api/src/submittable/Result.ts:60](https://github.com/polkadot-js/api/blob/4596e434d/packages/api/src/submittable/Result.ts#L60)*

**`description`** Creates a human representation of the output

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *AnyJson*
