
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/jsonrpc.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/jsonrpc) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc#info=devDependencies)

@polkadot/jsonrpc
=================

A defintion of all the methods exposed in a general Polkadot client application. These are used not only to provide a comprehensive code-generated document of the available methods, but are also used in the API to auto-generate endpoints with the required type-checking.

For a list of currently exposed methods, see the [method documentation](docs/README.md).

Usage
-----

Installation -

```
npm install --save @polkadot/jsonrpc
```

Adding methods
--------------

As methods are added, simply adding the name, inputs & output will prepare it for use.

*   Add the method to the correct file in [src/rpc/](src/rpc/) (Input/Output types as cross-referenced from the canonical implementation and match one-to-one)
*   Should a new type be required, add it to the type list, [src/types.js](src/types.js) (Required for flow type checking)

## Index

### Type aliases

* [Interface$Sections](#interface_sections)
* [Interfaces](#interfaces)
* [PrivateMethods](#privatemethods)
* [PublicMethods](#publicmethods)

---

## Type aliases

<a id="interface_sections"></a>

###  Interface$Sections

**Ƭ Interface$Sections**: *`keyof Interfaces`*

*Defined in [types.d.ts:18](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/types.d.ts#L18)*

___
<a id="interfaces"></a>

###  Interfaces

**Ƭ Interfaces**: *`object`*

*Defined in [types.d.ts:11](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/types.d.ts#L11)*

#### Type declaration

___
<a id="privatemethods"></a>

###  PrivateMethods

**Ƭ PrivateMethods**: *`object`*

*Defined in [chain.ts:50](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/chain.ts#L50)*
*Defined in [state.ts:99](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/state.ts#L99)*
*Defined in [system.ts:34](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/system.ts#L34)*
*Defined in [author.ts:32](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/author.ts#L32)*

#### Type declaration

[index: `string`]: `CreateItemOptions`

___
<a id="publicmethods"></a>

###  PublicMethods

**Ƭ PublicMethods**: *`object`*

*Defined in [chain.ts:49](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/chain.ts#L49)*
*Defined in [state.ts:100](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/state.ts#L100)*
*Defined in [system.ts:35](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/system.ts#L35)*
*Defined in [author.ts:33](https://github.com/polkadot-js/api/blob/0981a30/packages/type-jsonrpc/src/author.ts#L33)*

#### Type declaration

[index: `string`]: `CreateItemOptions`

___

