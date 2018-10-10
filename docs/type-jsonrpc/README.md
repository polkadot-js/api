
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/jsonrpc.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/jsonrpc) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc#info=devDependencies)

@polkadot/jsonrpc
=================

A definition of all the methods exposed in a general Polkadot client application. These are used not only to provide a comprehensive code-generated document of the available methods, but are also used in the API to auto-generate endpoints with the required type-checking.

For a list of currently exposed methods, see the [method documentation](docs/README.md).

Usage
-----

Installation -

```
yarn add @polkadot/jsonrpc
```

Adding methods
--------------

As methods are added, simply adding the name, inputs & output will prepare it for use.

*   Add the method to the correct file in [src/rpc/](src/rpc/) (Input/Output types as cross-referenced from the canonical implementation and match one-to-one)
*   Should a new type be required, add it to the type list, [src/types.js](src/types.js) (Required for TSLint type checking)

