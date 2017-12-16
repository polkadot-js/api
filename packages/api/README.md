[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api)
[![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api)
[![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api#info=devDependencies)

# @polkadot/api

Warning - currently this does not actually do all that much, it is an attempt to put into code some thoughts about how to maintain the endpoints. This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

Methods are auto-generated for the [JsonRPC interface definitions](../api-jsonrpc#readme), containing a full list of all sections and the methods cotained within.

## Usage

Installation -

```
npm install --save @polkadot/api
```

Initialisation -

```js
import Api from '@polkadot/api';
import HttpProvider from '@polkadot/api-provider/http';

const provider = new HttpProvider('http://127.0.0.1:9933');
const api = new Api(provider);
```

Making calls -

```js
api.chain
  .getHeader('0x1234567890')
  .then((header) => console.log(header))
  .catch((error) => console.error(error));
```
