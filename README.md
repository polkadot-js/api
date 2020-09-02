[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@polkadot/api?logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![beta](https://img.shields.io/npm/v/@polkadot/api/beta?label=beta&logo=npm&&style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability-percentage/polkadot-js/api?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/api)
[![coverage](https://img.shields.io/codeclimate/coverage/polkadot-js/api?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/api)

# @polkadot/api

This library provides a clean wrapper around all the methods exposed by a Polkadot/Substrate network client and defines all the types exposed by a node. For complete documentation around the classes, interfaces and their use, visit the [documentation portal](https://polkadot.js.org/api/).

If you are an existing user, please be sure to track the [CHANGELOG](CHANGELOG.md) and [UPGRADING](UPGRADING.md) guides when changing versions.

## tutorials

Looking for tutorials to get started? Look at [examples](https://polkadot.js.org/api/examples/promise/) for guides on how to use the API to make queries and submit transactions.

## overview

The API is split up into a number of internal packages -

- [@polkadot/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- [@polkadot/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via `api.derive.*`)
- [@polkadot/api-metadata](packages/api-metadata/) Base extrinsic, storage and constant injectors for injection
- [@polkadot/rpc-core](packages/rpc-core/) Wrapper around all [JSON-RPC methods](https://polkadot.js.org/api/substrate/rpc.html) exposed by a Polkadot network client
- [@polkadot/rpc-provider](packages/rpc-provider/) Providers for connecting to nodes, including WebSockets and Http

Type definitions for interfaces as exposed by Polkadot & Substrate clients -

- [@polkadot/jsonrpc](packages/jsonrpc/) Definitions for JSONRPC endpoints
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
