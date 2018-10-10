
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api#info=devDependencies)

@polkadot/api
=============

This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

Usage
-----

Installation -

```
npm install --save @polkadot/api
```

Initialisation -

```js
import Api from '@polkadot/api';
import WsProvider from '@polkadot/api-provider/ws';

const provider = new WsProvider('http://127.0.0.1:9944');
const api = new Api(provider);
```

Making calls -

```js
api.chain
  .getHeader('0x1234567890')
  .then((header) => console.log(header))
  .catch((error) => console.error(error));
```

Retrieving the best block (once-off) -

```js
api.chain
  .getHead()
  .then((headerHash) => {
    return api.chain.getHeader(headerHash);
  })
  .then((header) => {
    console.log(`best #${header.number.toString()}`);
  })
  .catch((error) => {
    console.error('error:', error);
  });
```

Retrieving best header via subscription -

```js
api.chain
  .newHead((error, header) => {
    if (error) {
      console.error('error:', error);
    }

    console.log(`best #${header.number.toString()}`);
  })
  .then((subscriptionId) => {
    // id for the subscription, can unsubscribe via
    // api.chain.newHead.unsubscribe(subscriptionId)
  })
  .catch((error) => {
    console.error('error subscribing:', error);
  });
```

