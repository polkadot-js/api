**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/promise/PromiseCode"](../modules/_packages_api_contract_src_promise_promisecode_.md) / PromiseCode

# Class: PromiseCode

## Hierarchy

* [Code](_packages_api_contract_src_base_code_.code.md)\<\"promise\">

  ↳ **PromiseCode**

## Implements

* ContractBase\<\"promise\">

## Index

### Constructors

* [constructor](_packages_api_contract_src_promise_promisecode_.promisecode.md#constructor)

### Properties

* [abi](_packages_api_contract_src_promise_promisecode_.promisecode.md#abi)
* [api](_packages_api_contract_src_promise_promisecode_.promisecode.md#api)
* [code](_packages_api_contract_src_promise_promisecode_.promisecode.md#code)
* [decorateMethod](_packages_api_contract_src_promise_promisecode_.promisecode.md#decoratemethod)
* [registry](_packages_api_contract_src_promise_promisecode_.promisecode.md#registry)

### Accessors

* [messages](_packages_api_contract_src_promise_promisecode_.promisecode.md#messages)

### Methods

* [createBlueprint](_packages_api_contract_src_promise_promisecode_.promisecode.md#createblueprint)
* [getMessage](_packages_api_contract_src_promise_promisecode_.promisecode.md#getmessage)

## Constructors

### constructor

\+ **new PromiseCode**(`api`: ApiPromise, `abi`: ContractABIPre \| Abi, `wasm`: string \| Uint8Array): [PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)

*Overrides [Code](_packages_api_contract_src_base_code_.code.md).[constructor](_packages_api_contract_src_base_code_.code.md#constructor)*

*Defined in [packages/api-contract/src/promise/PromiseCode.ts:12](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/promise/PromiseCode.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre \| Abi |
`wasm` | string \| Uint8Array |

**Returns:** [PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<\"promise\">

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L15)*

___

### code

• `Readonly` **code**: Uint8Array

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[code](_packages_api_contract_src_base_code_.code.md#code)*

*Defined in [packages/api-contract/src/base/Code.ts:38](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/Code.ts#L38)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<\"promise\">

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### createBlueprint

▸ **createBlueprint**(`maxGas`: number \| BN): [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<\"promise\">

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[createBlueprint](_packages_api_contract_src_base_code_.code.md#createblueprint)*

*Defined in [packages/api-contract/src/base/Code.ts:46](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/Code.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`maxGas` | number \| BN |

**Returns:** [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<\"promise\">

___

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
