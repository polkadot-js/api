[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.com/polkadot-js/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)
[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square)](https://david-dm.org/polkadot-js/api)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api#info=devDependencies)

# @polkadot/api

This library provides a clean wrapper around all the methods exposed by a Polkadot/Subtrate network client and defines all the types exposed by a node. For complete documentation around the classes, interfaces and their use, visit the [documentation portal](https://polkadot.js.org/api/).

## tutorials

Looking for tutorials to get started? Look at [examples](https://polkadot.js.org/api/examples/promise/) for guides on how to use the API.

## overview

The API is split up into a number of internal packages -

- [@polkadot/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces
- [@polkadot/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results
- [@polkadot/rpc-core](packages/rpc-core/) Wrapper around all [JSON-RPC methods](https://polkadot.js.org/api/METHODS_RPC.html) exposed by a Polkadot network client
- [@polkadot/rpc-provider](packages/rpc-provider/) Providers for connecting to nodes, including WebSockets and Http
- [@polkadot/rpc-rx](packages/rpc-rx/) A RxJs Observable wrapper around [@polkadot/rpc-provider](packages/rpc-provider)

Type definitions for interfaces as exposed by Polkadot & Substrate clients -

- [@polkadot/extrinsics](packages/type-extrinsics/) Base extrinsic definitions & codecs
- [@polkadot/jsonrpc](packages/type-jsonrpc/) Definitions for JSONRPC endpoints
- [@polkadot/storage](packages/type-storage/) Definitions for storage entries
- [@polkadot/types](packages/types/) Codecs for all Polkadot primitives

## development

Contributions are welcome!

To start off, this repo (along with others in the [@polkadot](https://github.com/polkadot-js/) family) uses yarn workspaces to organise the code. As such, after cloning, its dependencies _should_ be installed via `yarn`, not via npm; the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/polkadot-js/api <optional local path>`
2. Ensure that you have a recent version of Node.js, for development purposes [Node 10](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >=1.3.2](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Build the API Docs, via `yarn run build`
6. Ready! Now you can launch the API Docs, via `yarn gitbook serve`
7. Access the API Docs via [http://localhost:4000](http://localhost:4000)
