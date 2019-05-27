# @plugnet/api

_This repo is a fork of [@polkadot/api](https://github.com/polkadot-js/api), up to the version which works with current plug-node_

This library provides a clean wrapper around all the methods exposed by a Plugnet/Subtrate network client and defines all the types exposed by a node. For complete documentation around the classes, interfaces and their use, visit the [documentation portal](https://www.poweredbyplug.com/).

## tutorials

Looking for tutorials to get started? Look at [examples](https://www.poweredbyplug.com/) for guides on how to use the API to make queries and submit transactions.

## overview

The API is split up into a number of internal packages -

- [@plugnet/api](packages/api/) The API library, providing both Promise and RxJS Observable-based interfaces. This is the main user-facing entry point.
- [@plugnet/api-derive](packages/api-derive/) Derived results that are injected into the API, allowing for combinations of various query results (only used internally and exposed on the Api instances via `api.derive.*`)
- [@plugnet/rpc-core](packages/rpc-core/) Wrapper around all [JSON-RPC methods](https://www.poweredbyplug.com/) exposed by a Plugnet network client
- [@plugnet/rpc-provider](packages/rpc-provider/) Providers for connecting to nodes, including WebSockets and Http
- [@plugnet/rpc-rx](packages/rpc-rx/) A RxJs Observable wrapper around [@plugnet/rpc-provider](packages/rpc-provider)

Type definitions for interfaces as exposed by Plugnet & Substrate clients -

- [@plugnet/extrinsics](packages/type-extrinsics/) Base extrinsic definitions & codecs
- [@plugnet/jsonrpc](packages/type-jsonrpc/) Definitions for JSONRPC endpoints
- [@plugnet/storage](packages/type-storage/) Definitions for storage entries
- [@plugnet/types](packages/types/) Codecs for all Plugnet primitives

## development

Contributions are welcome!

To start off, this repo (along with others in the [@plugnet](https://github.com/plugblockchain/) family) uses yarn workspaces to organise the code. As such, after cloning, its dependencies _should_ be installed via `yarn`, not via npm; the latter will result in broken dependencies.

To get started -

1. Clone the repo locally, via `git clone https://github.com/plugblockchain/api.js <optional local path>`
2. Ensure that you have a recent version of Node.js, for development purposes [Node 10](https://nodejs.org/en/) is recommended.
3. Ensure that you have a recent version of Yarn, for development purposes [Yarn >=1.10.1](https://yarnpkg.com/docs/install) is required.
4. Install the dependencies by running `yarn`
5. Build the everything via `yarn run build`
6. You can also launch the API Docs, via `yarn vuepress dev docs`
7. Access the docs via [http://localhost:8080](http://localhost:8080)
