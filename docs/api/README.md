
[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org) ![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square) [![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard) [![npm](https://img.shields.io/npm/v/@polkadot/api.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/api) [![travis](https://img.shields.io/travis/polkadot-js/api.svg?style=flat-square)](https://travis-ci.org/polkadot-js/api) [![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/api.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/api/maintainability) [![coverage](https://img.shields.io/coveralls/polkadot-js/api.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/api?branch=master) [![dependency](https://david-dm.org/polkadot-js/api.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api) [![devDependency](https://david-dm.org/polkadot-js/api/dev-status.svg?style=flat-square&path=packages/api)](https://david-dm.org/polkadot-js/api?path=packages/api#info=devDependencies)

@polkadot/api
=============

Warning - currently this does not actually do all that much, it is an attempt to put into code some thoughts about how to maintain the endpoints. This library provides a clean wrapper around all the methods exposed by a Polkadot network client.

Methods are auto-generated for the [JsonRPC interface definitions](https://github.com/polkadot-js/api/packages/type-jsonrpc), containing a full list of all sections and the methods contained within.

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

## Index

### Classes

* [Api](classes/api.md)

### Interfaces

* [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

### Type aliases

* [ApiInterface](#apiinterface)
* [ApiInterface$Section](#apiinterface_section)

### Functions

* [createInterface](#createinterface)
* [createMethodSend](#createmethodsend)
* [createParams](#createparams)
* [formatResult](#formatresult)
* [methodSubscribe](#methodsubscribe)

---

## Type aliases

<a id="apiinterface"></a>

###  ApiInterface

**Ƭ ApiInterface**: *`object`*

*Defined in [types.d.ts:18](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/types.d.ts#L18)*

#### Type declaration

___
<a id="apiinterface_section"></a>

###  ApiInterface$Section

**Ƭ ApiInterface$Section**: *`object`*

*Defined in [types.d.ts:14](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/types.d.ts#L14)*

#### Type declaration

[index: `string`]: [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

___

## Functions

<a id="createinterface"></a>

###  createInterface

▸ **createInterface**(provider: *`ProviderInterface`*, section: *`Interface$Sections`*): [ApiInterface$Section](#apiinterface_section)

*Defined in [create/interface.ts:16](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/create/interface.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | `ProviderInterface` |
| section | `Interface$Sections` |

**Returns:** [ApiInterface$Section](#apiinterface_section)

___
<a id="createmethodsend"></a>

###  createMethodSend

▸ **createMethodSend**(provider: *`ProviderInterface`*, rpcName: *`string`*, method: *`SectionItem`<`Interfaces`>*): [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

*Defined in [create/methodSend.ts:16](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/create/methodSend.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | `ProviderInterface` |
| rpcName | `string` |
| method | `SectionItem`<`Interfaces`> |

**Returns:** [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

___
<a id="createparams"></a>

###  createParams

▸ **createParams**(params: *`Params`*, values: *`Array`<`any`>*): `Array`<`any`>

*Defined in [create/params.ts:10](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/create/params.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `Params` |
| values | `Array`<`any`> |

**Returns:** `Array`<`any`>

___
<a id="formatresult"></a>

###  formatResult

▸ **formatResult**(method: *`SectionItem`<`Interfaces`>*, params: *`Array`<`any`>*, inputs: *`Array`<`any`>*, result?: *`any`*): `any`

*Defined in [create/formatResult.ts:16](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/create/formatResult.ts#L16)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `SectionItem`<`Interfaces`> |
| params | `Array`<`any`> |
| inputs | `Array`<`any`> |
| `Optional` result | `any` |

**Returns:** `any`

___
<a id="methodsubscribe"></a>

###  methodSubscribe

▸ **methodSubscribe**(provider: *`ProviderInterface`*, rpcName: *`string`*, method: *`SectionItem`<`Interfaces`>*): [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

*Defined in [create/methodSubscribe.ts:18](https://github.com/polkadot-js/api/blob/0981a30/packages/api/src/create/methodSubscribe.ts#L18)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | `ProviderInterface` |
| rpcName | `string` |
| method | `SectionItem`<`Interfaces`> |

**Returns:** [ApiInterface$Section$Method](interfaces/apiinterface_section_method.md)

___

