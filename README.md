[![Build Status](https://travis-ci.org/polkadot-js/api.svg?branch=master)](https://travis-ci.org/polkadot-js/api)
[![Coverage Status](https://coveralls.io/repos/github/polkadot-js/api/badge.svg?branch=master)](https://coveralls.io/github/polkadot-js/api?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/polkadot-js/api.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/polkadot-js/api.svg)](https://david-dm.org/polkadot-js/api)
[![devDependency Status](https://david-dm.org/polkadot-js/api/dev-status.svg)](https://david-dm.org/polkadot-js/api#info=devDependencies)

# @polkadot/api

Warning - currently this does not actually do all that much, it is an attempt to put into code some thoughts about how to maintain the endpoints. This library provides a clean wrapper around all the methods exposed by a Polkadot network client. Methods are auto-generated for the [JsonRPC interface definitions](https://github.com/polkadot-js/jsonrpc).

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

## Available methods

For a list of currently exposed methods, see the [@polkadot/jsonrpc](https://github.com/polkadot-js/jsonrpc#readme) repository.
