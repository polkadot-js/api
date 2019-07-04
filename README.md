[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.com/polkadot-js/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api)
[![coverage](https://img.shields.io/codeclimate/coverage/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api)
[![greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)

# @polkadot/api

This library provides a clean wrapper around all the methods exposed by a Polkadot/Subtrate network client and defines all the types exposed by a node. For complete documentation around the classes, interfaces and their use, visit the [documentation portal](https://polkadot.js.org/api/).

## tutorials

Looking for tutorials to get started? Look at [examples](https://polkadot.js.org/api/examples/promise/) for guides on how to use the API to make queries and submit transactions.

## overview

The API is split up into a number of internal packages -

- [@polkadot/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- [@polkadot/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via `api.derive.*`)
- [@polkadot/rpc-core](packages/rpc-core/) Wrapper around all [JSON-RPC methods](https://polkadot.js.org/api/METHODS_RPC.html) exposed by a Polkadot network client
- [@polkadot/rpc-provider](packages/rpc-provider/) Providers for connecting to nodes, including WebSockets and Http

Type definitions for interfaces as exposed by Polkadot & Substrate clients -

- [@polkadot/metadata](packages/type-metadata/) Base extrinsic definitions & codecs; definitions for storage entries
- [@polkadot/jsonrpc](packages/type-jsonrpc/) Definitions for JSONRPC endpoints
- [@polkadot/types](packages/types/) Codecs for all Polkadot and Substrate primitives

## development

Contributions are welcome!

To start off, this repo (along with others in the [@polkadot](https://github.com/polkadot-js/) family) uses yarn workspaces to organise the code. As such, after cloning, its dependencies _should_ be installed via `yarn`, not via npm; the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/polkadot-js/api <optional local path>`
2. Ensure that you have a recent version of Node.js, for development purposes [Node 10](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >=1.10.1](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Build the everything via `yarn run build`
6. You can also launch the API Docs, via `yarn vuepress dev docs`
7. Access the docs via [http://localhost:8080](http://localhost:8080)
