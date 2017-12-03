![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)

# @polkadot/api

This library provides a clean wrapper around all the methods exposed by a Polkadot network client. As part of the JsonRpc defintions, the [exposed methods are documented](packages/api-jsonrpc/docs/).

The API is split up into a number of internal packages -

- [@polkadot/api](packages/api/) The API library
- [@polkadot/api-format](packages/api-format/) Input and output formatters
- [@polkadot/api-jsonrpc](packages/api-jsonrpc/) Interface definitions for RPC
- [@polkadot/api-provider](packages/api-provider/) Transport providers

## Contributing

- Make sure you have [Lerna](https://lernajs.io/) installed, `yarn install -g lerna`
- Bootstrap the dependencies, `lerna bootstrap`
- Make any changes in the relevant package, on master merges new versions will be published automatically
