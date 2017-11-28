# @polkadot/client

This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

It is split up into a number of internal packages -

- [packages/api](packages/api/) The API library
- [packages/api-format](packages/api-format/) Input and output formatters
- [packages/api-provider](packages/api-provider/) Transport providers

## Contributing

- Make sure you have [Lerna](https://lernajs.io/) installed, `yarn install -g lerna`
- Install the wrapper dependencies, `yarn install`
- Bootstrap the dependencies, `lerna bootstrap --hoist`
- Make any changes in the relevant package, on master merges new versions will be published automatically
