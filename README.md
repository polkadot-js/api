![ISC](https://img.shields.io/badge/license-ISC-lightgrey.svg)
[![npm (scoped)](https://img.shields.io/npm/v/@polkadot/api.svg)](https://www.npmjs.com/package/@polkadot/api)
[![Build Status](https://travis-ci.org/polkadot-js/api.svg?branch=master)](https://travis-ci.org/polkadot-js/api)
[![Coverage Status](https://coveralls.io/repos/github/polkadot-js/api/badge.svg?branch=master)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/polkadot-js/api.svg)](https://greenkeeper.io/)

# @polkadot/client

This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

It is split up into a number of internal packages -

- [@polkadot/api](packages/api/) The API library
- [@polkadot/api-format](packages/api-format/) Input and output formatters
- [@polkadot/api-jsonrpc](packages/api-jsonrpc/) Interface definitions for RPC
- [@polkadot/api-provider](packages/api-provider/) Transport providers

## Contributing

- Make sure you have [Lerna](https://lernajs.io/) installed, `yarn install -g lerna`
- Install the wrapper dependencies, `yarn install`
- Bootstrap the dependencies, `lerna bootstrap`
- Make any changes in the relevant package, on master merges new versions will be published automatically
