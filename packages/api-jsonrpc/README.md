[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/api-jsonrpc)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-jsonrpc)](https://david-dm.org/polkadot-js/api?path=packages/api-jsonrpc#info=devDependencies)

# @polkadot/api-jsonrpc

A defintion of all the methods exposed in a general Polkadot client application. These are used not only to provide a comprehensive code-generated document of the available methods, but are also used in the API to auto-generate endpoints with the required type-checking.

For a list of currently exposed methods, see the [method documentation](docs/README.md).

## Usage

Installation -

```
npm install --save @polkadot/api-jsonrpc
```

## Adding methods

As methods are added, simply adding the name, inputs & output will prepare it for use.

- Add the method to the correct file in [src/rpc/](src/rpc/) (Input/Output types as cross-referenced from the canonical implementation and match one-to-one)
- Should a new type be required, add it to the type list, [src/types.js](src/types.js) (Required for flow type checking)
