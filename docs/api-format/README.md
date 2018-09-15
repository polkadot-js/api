
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api-format.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api-format) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-format)](https://david-dm.org/polkadot-js/api?path=packages/api-format) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-format)](https://david-dm.org/polkadot-js/api?path=packages/api-format#info=devDependencies)

@polkadot/api-format
====================

Formatters that are used by the application API interface, taking care of transparently formatting parameters (inputs) and the results (output) for requests made over the client RPC interfaces.

Usage
-----

Installation -

```
npm install --save @polkadot/api-format
```

## Index

### Type aliases

* [FormatterFunction](#formatterfunction)

### Functions

* [echo](#echo)
* [format](#format)
* [formatInputs](#formatinputs)
* [formatOutput](#formatoutput)

---

## Type aliases

<a id="formatterfunction"></a>

###  FormatterFunction

**Ƭ FormatterFunction**: *`function`*

*Defined in [types.d.ts:7](https://github.com/polkadot-js/api/blob/0981a30/packages/api-format/src/types.d.ts#L7)*

#### Type declaration
▸(value: *`any`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___

## Functions

<a id="echo"></a>

###  echo

▸ **echo**(value: *`any`*): `any`

*Defined in [echo.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/api-format/src/echo.ts#L10)*

A function returning any value passed to it

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `any` |  The input value |

**Returns:** `any`
The value passed as input

___
<a id="format"></a>

###  format

▸ **format**(formatters: *`FormattersFunctionMap`*, types: *`Array`<`Param$Types`>*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in [format.ts:49](https://github.com/polkadot-js/api/blob/0981a30/packages/api-format/src/format.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| formatters | `FormattersFunctionMap` |
| types | `Array`<`Param$Types`> |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatinputs"></a>

###  formatInputs

▸ **formatInputs**(params: *`Params`*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in [input.ts:22](https://github.com/polkadot-js/api/blob/0981a30/packages/api-format/src/input.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `Params` |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatoutput"></a>

###  formatOutput

▸ **formatOutput**(type: *`Param$Types`*, value?: *`any`*):  `any` &#124; `null`

*Defined in [output.ts:30](https://github.com/polkadot-js/api/blob/0981a30/packages/api-format/src/output.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `Param$Types` |
| `Optional` value | `any` |

**Returns:**  `any` &#124; `null`

___

