
Intro
-----

This is the Polkadot JS Api documentation.

Start [here](globals.html)

## Index

### Type aliases

* [RxApiInterface](#rxapiinterface)
* [RxApiInterface$Method](#rxapiinterface_method)
* [RxApiInterface$Section](#rxapiinterface_section)

### Functions

* [cached](#cached)
* [connected](#connected)
* [createInterface](#createinterface)
* [exposed](#exposed)
* [observable](#observable)
* [rxApi](#rxapi)
* [subscription](#subscription)

---

## Type aliases

<a id="rxapiinterface"></a>

###  RxApiInterface

**Ƭ RxApiInterface**: * `RxApiInterface$Keys` & `object`
*

*Defined in [types.d.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L19)*

___
<a id="rxapiinterface_method"></a>

###  RxApiInterface$Method

**Ƭ RxApiInterface$Method**: *`function`*

*Defined in [types.d.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L9)*

#### Type declaration
▸(...params: *`Array`<`any`>*):  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:**  `Observable`<`any`> &#124; `BehaviorSubject`<`any`>

___
<a id="rxapiinterface_section"></a>

###  RxApiInterface$Section

**Ƭ RxApiInterface$Section**: *`object`*

*Defined in [types.d.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/types.d.ts#L11)*

#### Type declaration

[index: `string`]: [RxApiInterface$Method](#rxapiinterface_method)

___

## Functions

<a id="cached"></a>

###  cached

▸ **cached**(subName: *`string`*, name: *`string`*, section: *`ApiInterface$Section`*): `function`

*Defined in [observable/cached.ts:19](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/observable/cached.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | `ApiInterface$Section` |

**Returns:** `function`

___
<a id="connected"></a>

###  connected

▸ **connected**(provider: *`ProviderInterface`*): `BehaviorSubject`<`boolean`>

*Defined in [api/connected.ts:9](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/api/connected.ts#L9)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | `ProviderInterface` |

**Returns:** `BehaviorSubject`<`boolean`>

___
<a id="createinterface"></a>

###  createInterface

▸ **createInterface**(api: *`ApiInterface`*, sectionName: *`Interface$Sections`*): [RxApiInterface$Section](#rxapiinterface_section)

*Defined in [interface.ts:11](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/interface.ts#L11)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `ApiInterface` |
| sectionName | `Interface$Sections` |

**Returns:** [RxApiInterface$Section](#rxapiinterface_section)

___
<a id="exposed"></a>

###  exposed

▸ **exposed**(provider: *`ProviderInterface`*): [RxApiInterface](#rxapiinterface)

*Defined in [api/index.ts:12](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/api/index.ts#L12)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| provider | `ProviderInterface` |

**Returns:** [RxApiInterface](#rxapiinterface)

___
<a id="observable"></a>

###  observable

▸ **observable**(subName: *`string`*, name: *`string`*, section: *`ApiInterface$Section`*): `function`

*Defined in [observable/index.ts:14](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/observable/index.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| subName | `string` |
| name | `string` |
| section | `ApiInterface$Section` |

**Returns:** `function`

___
<a id="rxapi"></a>

###  rxApi

▸ **rxApi**(provider?: *`ProviderInterface`*): [RxApiInterface](#rxapiinterface)

*Defined in [index.ts:17](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/index.ts#L17)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` provider | `ProviderInterface` |  new Ws(defaults.WS_URL) |

**Returns:** [RxApiInterface](#rxapiinterface)

___
<a id="subscription"></a>

###  subscription

▸ **subscription**(name: *`string`*, params: *`Array`<`any`>*, section: *`ApiInterface$Section`*, unsubCallback?: * `undefined` &#124; `function`*): `BehaviorSubject`<`any`>

*Defined in [observable/subject.ts:10](https://github.com/chevdor/polkadot-js-api/blob/4661a2e/packages/api-rx/src/observable/subject.ts#L10)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| params | `Array`<`any`> |
| section | `ApiInterface$Section` |
| `Optional` unsubCallback |  `undefined` &#124; `function`|

**Returns:** `BehaviorSubject`<`any`>

___

