
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api-provider.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api-provider) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api-provider)](https://david-dm.org/polkadot-js/api?path=packages/api-provider#info=devDependencies)

@polkadot/api-provider
======================

Generic transport providers to handle the transport of method calls to and from Polkadot clients from applications interacting with it. Generally, unless you are operating at a low-level and taking care of encoding and decoding of parameters/results, it won't be directly used. API interfaces building on top these providers can support various transports with the same underlying interfaces.

Usage
-----

Installation -

```
npm install --save @polkadot/api-provider
```

Initialisation -

```js
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const version = await provider.send('client_version', []);

console.log('clientVersion', version);
```

