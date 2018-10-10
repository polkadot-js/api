[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/jsonrpc.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/jsonrpc)
[![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/type-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/type-jsonrpc#info=devDependencies)

# @polkadot/jsonrpc

A definition of all the methods exposed in a general Polkadot client application. These are used not only to provide a comprehensive code-generated document of the available methods, but are also used in the API to auto-generate endpoints with the required type-checking.

Below is a list of currently exposed methods:

| pubsub | JavaScript method name | Rust name | Rust alias | Description |
|-|-|-|-|-|
| Y | | author_extrinsicUpdate | | Submit an extrinsic to watch. |
| Y | | author_submitAndWatchExtrinsic | | |
| Y | | author_unwatchExtrinsic | | Unsubscribe from extrinsic watching. |
| | pendingExtrinsics() | author_pendingExtrinsics | | Returns all pending extrinsics, potentially grouped by sender |
| | submitExtrinsic(extrinsic: Bytes) | author_submitExtrinsic | | Submit a fully formatted hex-encoded extrinsic for block inclusion |
| | | author_submitRichExtrinsic | | Submit extrinsic for inclusion in block. |
| | getBlock(hash: Hash) | chain_getBlock | | Get header and body of a relay chain block. |
| | getBlockHash(blockNumber: number) | chain_getBlockHash | | Get hash of the n-th block in the canon chain. By default returns latest block hash. |
| | getHeader(hash: Hash) | chain_getHeader | | Get header of a relay chain block. |
| | getRuntimeVersion() | chain_getRuntimeVersion | | Get the runtime version. |
| Y | | chain_newHead() | | |
| Y | chain_subscribeNewHead() | chain_subscribeNewHead | subscribe_newHead | New head subscription to retrieve the best head |
| Y | chain_unsubscribeNewHead() | chain_unsubscribeNewHead | unsubscribe_newHead | Unsubscribe from new head subscription. |
| | callAt(method: String, data: Bytes, block: Hash) | state_call | state_callAt | Call a built-in contract on the chain at a specific block. |
| | getMetadata | state_getMetadata | | Returns the runtime metadata as an opaque blob. |
| | getStorageAt(key: Bytes, block: Hash) | state_getStorage | state_getStorageAt | Returns a storage entry for a key at a specific block. |
| | getStorageHashAt(key: Bytes, block: Hash) | state_getStorageHash | state_getStorageHashAt | Returns the hash of a storage entry at a specific block. |
| | getStorageSizeAt(key: Bytes, block: Hash) | state_getStorageSize | state_getStorageSizeAt | Returns the size of a storage entry at a specific block. |
| | | state_queryStorage | | Query historical storage entries (by key) starting from a block given as the second parameter. The first returned result contains the initial state of storage for all keys. Subsequent values in the vector represent changes to the previous state (diffs). |
| Y | | state_storage | | |
| Y | state_subscribeStorage | state_subscribeStorage | | New storage subscription subscribes to storage changes for the provided keys |
| Y | state_unsubscribeStorage | state_unsubscribeStorage | | Unsubscribe from storage subscription |
| | chain() | system_chain | | Get the chain's type. Given as a string identifier. |
| | name() | system_name | | Get the node's implementation name. Plain old string. |
| | version() | system_version | | Get the node implementation's version. Should be a semver string. |

## Usage

Installation -

```
npm install --save @polkadot/jsonrpc
```

## Adding methods

As methods are added, simply adding the name, inputs & output will prepare it for use.

- Add the method to the correct file in [src/rpc/](src/rpc/) (Input/Output types as cross-referenced from the canonical implementation and match one-to-one)
- Should a new type be required, add it to the type list, [src/types.js](src/types.js) (Required for TSLint checking)
