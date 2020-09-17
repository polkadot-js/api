[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/base/Code"](../modules/_packages_api_contract_src_base_code_.md) › [Code](_packages_api_contract_src_base_code_.code.md)

# Class: Code ‹**ApiType**›

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)‹ApiType›

  ↳ **Code**

  ↳ [PromiseCode](_packages_api_contract_src_promise_promisecode_.promisecode.md)

  ↳ [RxCode](_packages_api_contract_src_rx_rxcode_.rxcode.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_code_.code.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_code_.code.md#readonly-abi)
* [api](_packages_api_contract_src_base_code_.code.md#readonly-api)
* [code](_packages_api_contract_src_base_code_.code.md#readonly-code)
* [decorateMethod](_packages_api_contract_src_base_code_.code.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_base_code_.code.md#readonly-registry)

### Accessors

* [messages](_packages_api_contract_src_base_code_.code.md#messages)

### Methods

* [createBlueprint](_packages_api_contract_src_base_code_.code.md#createblueprint)
* [getMessage](_packages_api_contract_src_base_code_.code.md#getmessage)

## Constructors

###  constructor

\+ **new Code**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `wasm`: string | Uint8Array): *[Code](_packages_api_contract_src_base_code_.code.md)*

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Code.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`wasm` | string &#124; Uint8Array |

**Returns:** *[Code](_packages_api_contract_src_base_code_.code.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L14)*

___

### `Readonly` api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L16)*

___

### `Readonly` code

• **code**: *Uint8Array*

*Defined in [packages/api-contract/src/base/Code.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Code.ts#L39)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#readonly-decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:18](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L18)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#readonly-registry)*

*Defined in [packages/api-contract/src/base/util.ts:20](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:31](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  createBlueprint

▸ **createBlueprint**(`maxGas`: number | BN): *[CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)‹ApiType›*

*Defined in [packages/api-contract/src/base/Code.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Code.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`maxGas` | number &#124; BN |

**Returns:** *[CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)‹ApiType›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:41](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
