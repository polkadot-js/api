**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/base/Code"](../modules/_packages_api_contract_src_base_code_.md) / Code

# Class: Code\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)\<ApiType>

  ↳ **Code**

  ↳↳ [PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)

  ↳↳ [RxCode](_packages_api_contract_src_rx_rxcode_.rxcode.md)

## Implements

* ContractBase\<ApiType>

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_code_.code.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_code_.code.md#abi)
* [api](_packages_api_contract_src_base_code_.code.md#api)
* [code](_packages_api_contract_src_base_code_.code.md#code)
* [decorateMethod](_packages_api_contract_src_base_code_.code.md#decoratemethod)
* [registry](_packages_api_contract_src_base_code_.code.md#registry)

### Accessors

* [messages](_packages_api_contract_src_base_code_.code.md#messages)

### Methods

* [createBlueprint](_packages_api_contract_src_base_code_.code.md#createblueprint)
* [getMessage](_packages_api_contract_src_base_code_.code.md#getmessage)

## Constructors

### constructor

\+ **new Code**(`api`: ApiObject\<ApiType>, `abi`: ContractABIPre \| Abi, `decorateMethod`: DecorateMethod\<ApiType>, `wasm`: string \| Uint8Array): [Code](_packages_api_contract_src_base_code_.code.md)

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Code.ts:38](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/Code.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiObject\<ApiType> |
`abi` | ContractABIPre \| Abi |
`decorateMethod` | DecorateMethod\<ApiType> |
`wasm` | string \| Uint8Array |

**Returns:** [Code](_packages_api_contract_src_base_code_.code.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L15)*

___

### code

• `Readonly` **code**: Uint8Array

*Defined in [packages/api-contract/src/base/Code.ts:38](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/Code.ts#L38)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### createBlueprint

▸ **createBlueprint**(`maxGas`: number \| BN): [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<ApiType>

*Defined in [packages/api-contract/src/base/Code.ts:46](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/Code.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`maxGas` | number \| BN |

**Returns:** [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<ApiType>

___

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/73ffb034d/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
