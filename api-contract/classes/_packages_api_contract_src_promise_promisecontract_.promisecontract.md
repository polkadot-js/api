[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/promise/PromiseContract"](../modules/_packages_api_contract_src_promise_promisecontract_.md) › [PromiseContract](_packages_api_contract_src_promise_promisecontract_.promisecontract.md)

# Class: PromiseContract

## Hierarchy

  ↳ [Contract](_packages_api_contract_src_base_contract_.contract.md)‹"promise"›

  ↳ **PromiseContract**

## Implements

* ContractBase‹"promise"›

## Index

### Constructors

* [constructor](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#constructor)

### Properties

* [abi](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#readonly-abi)
* [address](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#readonly-address)
* [api](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#readonly-api)
* [decorateMethod](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#readonly-registry)

### Accessors

* [hasRpcContractsCall](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#hasrpccontractscall)
* [messages](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#messages)

### Methods

* [call](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#call)
* [getMessage](_packages_api_contract_src_promise_promisecontract_.promisecontract.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseContract**(`api`: ApiPromise, `abi`: ContractABIPre | Abi, `address`: string | AccountId): *[PromiseContract](_packages_api_contract_src_promise_promisecontract_.promisecontract.md)*

*Overrides [Contract](_packages_api_contract_src_base_contract_.contract.md).[constructor](_packages_api_contract_src_base_contract_.contract.md#constructor)*

*Defined in [packages/api-contract/src/promise/PromiseContract.ts:14](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/promise/PromiseContract.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre &#124; Abi |
`address` | string &#124; AccountId |

**Returns:** *[PromiseContract](_packages_api_contract_src_promise_promisecontract_.promisecontract.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L14)*

___

### `Readonly` address

• **address**: *Address*

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[address](_packages_api_contract_src_base_contract_.contract.md#readonly-address)*

*Defined in [packages/api-contract/src/base/Contract.ts:35](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L35)*

___

### `Readonly` api

• **api**: *ApiObject‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L16)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#readonly-decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:18](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L18)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#readonly-registry)*

*Defined in [packages/api-contract/src/base/util.ts:20](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L20)*

## Accessors

###  hasRpcContractsCall

• **get hasRpcContractsCall**(): *boolean*

*Inherited from [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md).[hasRpcContractsCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#hasrpccontractscall)*

*Defined in [packages/api-contract/src/base/util.ts:70](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L70)*

**Returns:** *boolean*

___

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:31](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L31)*

**Returns:** *ContractMessage[]*

## Methods

###  call

▸ **call**(`as`: "rpc", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: CodecArg[]): *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹"promise", "rpc"›*

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[call](_packages_api_contract_src_base_contract_.contract.md#call)*

*Defined in [packages/api-contract/src/base/Contract.ts:43](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "rpc" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | CodecArg[] |

**Returns:** *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹"promise", "rpc"›*

▸ **call**(`as`: "tx", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: CodecArg[]): *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹"promise", "tx"›*

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[call](_packages_api_contract_src_base_contract_.contract.md#call)*

*Defined in [packages/api-contract/src/base/Contract.ts:44](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "tx" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | CodecArg[] |

**Returns:** *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹"promise", "tx"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:41](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
