
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api#info=devDependencies)

@polkadot/api
=============

An RxJs wrapper around [@polkadot/rpc-core](../rpc-core).

Usage
=====

Installation -

```
npm install --save @polkadot/api/rx
```

Making rpc calls -

```javascript
import ApiRx from '@polkadot/api/rx';
// alternatively
// import { ApiRx } from '@polkadot/api';

// initialise via Promise & static create
const api = await ApiRx.create().toPromise();

// make a call to retrieve the current network head
api.rpc.chain.newHead().subscribe((header) => {
  console.log(`Chain is at #${header.blockNumber}`);
});
```

Subscribing to chain state -

```javascript
import Api from '@polkadot/api';

// initialise via isReady & new
new Api().isReady.subscribe((api) => {
  // make a call to retrieve the current network head
  api.st.timestamp.now().subscribe((timestamp) => {
    console.log(`Current block timestamp ${timestamp}`);
  });
});
```

