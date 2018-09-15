
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/storage.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/storage) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/type-storage)](https://david-dm.org/polkadot-js/api?path=packages/type-storage) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/type-storage)](https://david-dm.org/polkadot-js/api?path=packages/type-storage#info=devDependencies)

@polkadot/storage
=================

An base interface to the storage layer

## Index

### Type aliases

* [Keygen](#keygen)
* [Storage$Key$Value](#storage_key_value)
* [Storage$Sections](#storage_sections)
* [Storages](#storages)

### Functions

* [bindKey](#bindkey)
* [formatParams](#formatparams)

---

## Type aliases

<a id="keygen"></a>

###  Keygen

**Ƭ Keygen**: *`function`*

*Defined in [key/index.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/key/index.ts#L14)*

#### Type declaration
▸(...keyParams: *`Array`<[Storage$Key$Value](#storage_key_value)>*): `Uint8Array`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` keyParams | `Array`<[Storage$Key$Value](#storage_key_value)> |

**Returns:** `Uint8Array`

___
<a id="storage_key_value"></a>

###  Storage$Key$Value

**Ƭ Storage$Key$Value**: * `number` &#124; `BN` &#124; `Uint8Array` &#124; `string`
*

*Defined in [types.d.ts:8](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/types.d.ts#L8)*

___
<a id="storage_sections"></a>

###  Storage$Sections

**Ƭ Storage$Sections**: *`keyof Storages`*

*Defined in [types.d.ts:23](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/types.d.ts#L23)*

___
<a id="storages"></a>

###  Storages

**Ƭ Storages**: *`object`*

*Defined in [types.d.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/types.d.ts#L10)*

#### Type declaration

___

## Functions

<a id="bindkey"></a>

###  bindKey

▸ **bindKey**<`T`>(__namedParameters: *`object`*): [Keygen](#keygen)

*Defined in [key/index.ts:16](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/key/index.ts#L16)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| __namedParameters | `object` |

**Returns:** [Keygen](#keygen)

___
<a id="formatparams"></a>

###  formatParams

▸ **formatParams**(params: *`Params`*, values?: *[Storage$Key$Value](#storage_key_value)[]*): `Array`<`Uint8Array`>

*Defined in [key/params.ts:15](https://github.com/polkadot-js/api/blob/0981a30/packages/type-storage/src/key/params.ts#L15)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| params | `Params` | - |
| `Default value` values | [Storage$Key$Value](#storage_key_value)[] |  [] |

**Returns:** `Array`<`Uint8Array`>

___

