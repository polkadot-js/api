
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api-rx.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api-rx) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-rx)](https://david-dm.org/polkadot-js/api?path=packages/api-rx) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-rx)](https://david-dm.org/polkadot-js/api?path=packages/api-rx#info=devDependencies)

@polkadot/api-rx
================

An RxJs wrapper around the [@polkadot/api](../api).

## Index

### Classes

* [RxApi](classes/rxapi.md)

### Type aliases

* [RxApiInterface](#rxapiinterface)
* [RxApiInterface$Method](#rxapiinterface_method)
* [RxApiInterface$Section](#rxapiinterface_section)

### Functions

* [cached](#cached)
* [createInterface](#createinterface)
* [observable](#observable)
* [subscription](#subscription)

---

## Type aliases

<a id="rxapiinterface"></a>

###  RxApiInterface

**Ƭ RxApiInterface**: * `RxApiInterface$Keys` & `object`
*

*Defined in [types.d.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/types.d.ts#L19)*

___
<a id="rxapiinterface_method"></a>

###  RxApiInterface$Method

**Ƭ RxApiInterface$Method**: *`function`*

*Defined in [types.d.ts:9](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/types.d.ts#L9)*

#### Type declaration
▸(...params: *`Array`<`any`>*):  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:**  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

___
<a id="rxapiinterface_section"></a>

###  RxApiInterface$Section

**Ƭ RxApiInterface$Section**: *`object`*

*Defined in [types.d.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/types.d.ts#L11)*

#### Type declaration

[index: `string`]: [RxApiInterface$Method](#rxapiinterface_method)

___

## Functions

<a id="cached"></a>

###  cached

▸ **cached**(subName: *`string`*, name: *`string`*, section: *`ApiInterface$Section`*): `function`

*Defined in [observable/cached.ts:19](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/observable/cached.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | `ApiInterface$Section` |

**Returns:** `function`

___
<a id="createinterface"></a>

###  createInterface

▸ **createInterface**(api: *`ApiInterface`*, sectionName: *`Interface$Sections`*): [RxApiInterface$Section](#rxapiinterface_section)

*Defined in [interface.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/interface.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `ApiInterface` |
| sectionName | `Interface$Sections` |

**Returns:** [RxApiInterface$Section](#rxapiinterface_section)

___
<a id="observable"></a>

###  observable

▸ **observable**(subName: *`string`*, name: *`string`*, section: *`ApiInterface$Section`*): `function`

*Defined in [observable/index.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/observable/index.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | `ApiInterface$Section` |

**Returns:** `function`

___
<a id="subscription"></a>

###  subscription

▸ **subscription**(name: *`string`*, params: *`Array`<`any`>*, section: *`ApiInterface$Section`*, unsubCallback?: * `undefined` &#124; `function`*): `BehaviorSubject`<`any`>

*Defined in [observable/subject.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/api-rx/src/observable/subject.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| params | `Array`<`any`> |
| section | `ApiInterface$Section` |
| `Optional` unsubCallback |  `undefined` &#124; `function`|

**Returns:** `BehaviorSubject`<`any`>

___

