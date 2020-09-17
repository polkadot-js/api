[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/base/Contract"](../modules/_packages_api_contract_src_base_contract_.md) › [Contract](_packages_api_contract_src_base_contract_.contract.md)

# Class: Contract ‹**ApiType**›

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md)‹ApiType›

  ↳ **Contract**

  ↳ [PromiseContract](_packages_api_contract_src_promise_promisecontract_.promisecontract.md)

  ↳ [RxContract](_packages_api_contract_src_rx_rxcontract_.rxcontract.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_contract_.contract.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_contract_.contract.md#readonly-abi)
* [address](_packages_api_contract_src_base_contract_.contract.md#readonly-address)
* [api](_packages_api_contract_src_base_contract_.contract.md#readonly-api)
* [decorateMethod](_packages_api_contract_src_base_contract_.contract.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_base_contract_.contract.md#readonly-registry)

### Accessors

* [hasRpcContractsCall](_packages_api_contract_src_base_contract_.contract.md#hasrpccontractscall)
* [messages](_packages_api_contract_src_base_contract_.contract.md#messages)

### Methods

* [call](_packages_api_contract_src_base_contract_.contract.md#call)
* [getMessage](_packages_api_contract_src_base_contract_.contract.md#getmessage)

## Constructors

###  constructor

\+ **new Contract**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `address`: string | AccountId | Address): *[Contract](_packages_api_contract_src_base_contract_.contract.md)*

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Contract.ts:35](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`address` | string &#124; AccountId &#124; Address |

**Returns:** *[Contract](_packages_api_contract_src_base_contract_.contract.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:14](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L14)*

___

### `Readonly` address

• **address**: *Address*

*Defined in [packages/api-contract/src/base/Contract.ts:35](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L35)*

___

### `Readonly` api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:16](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/util.ts#L16)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

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

▸ **call**(`as`: "rpc", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: CodecArg[]): *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹ApiType, "rpc"›*

*Defined in [packages/api-contract/src/base/Contract.ts:43](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "rpc" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | CodecArg[] |

**Returns:** *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹ApiType, "rpc"›*

▸ **call**(`as`: "tx", `message`: string, `value`: BN | number, `gasLimit`: BN | number, ...`params`: CodecArg[]): *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹ApiType, "tx"›*

*Defined in [packages/api-contract/src/base/Contract.ts:44](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-contract/src/base/Contract.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`as` | "tx" |
`message` | string |
`value` | BN &#124; number |
`gasLimit` | BN &#124; number |
`...params` | CodecArg[] |

**Returns:** *[ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)‹ApiType, "tx"›*

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
