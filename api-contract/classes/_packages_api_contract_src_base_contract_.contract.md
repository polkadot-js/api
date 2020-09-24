**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/base/Contract"](../modules/_packages_api_contract_src_base_contract_.md) / Contract

# Class: Contract\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md)\<ApiType>

  ↳ **Contract**

  ↳↳ [PromiseContract](_packages_api_contract_src_promise_promisecontract_.promisecontract.md)

  ↳↳ [RxContract](_packages_api_contract_src_rx_rxcontract_.rxcontract.md)

## Implements

* ContractBase\<ApiType>

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_contract_.contract.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_contract_.contract.md#abi)
* [address](_packages_api_contract_src_base_contract_.contract.md#address)
* [api](_packages_api_contract_src_base_contract_.contract.md#api)
* [decorateMethod](_packages_api_contract_src_base_contract_.contract.md#decoratemethod)
* [registry](_packages_api_contract_src_base_contract_.contract.md#registry)

### Accessors

* [hasRpcContractsCall](_packages_api_contract_src_base_contract_.contract.md#hasrpccontractscall)
* [messages](_packages_api_contract_src_base_contract_.contract.md#messages)

### Methods

* [call](_packages_api_contract_src_base_contract_.contract.md#call)
* [getMessage](_packages_api_contract_src_base_contract_.contract.md#getmessage)

## Constructors

### constructor

\+ **new Contract**(`api`: ApiObject\<ApiType>, `abi`: ContractABIPre \| Abi, `decorateMethod`: DecorateMethod\<ApiType>, `address`: string \| AccountId \| Address): [Contract](_packages_api_contract_src_base_contract_.contract.md)

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Contract.ts:34](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiObject\<ApiType> |
`abi` | ContractABIPre \| Abi |
`decorateMethod` | DecorateMethod\<ApiType> |
`address` | string \| AccountId \| Address |

**Returns:** [Contract](_packages_api_contract_src_base_contract_.contract.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L13)*

___

### address

• `Readonly` **address**: Address

*Defined in [packages/api-contract/src/base/Contract.ts:34](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L34)*

___

### api

• `Readonly` **api**: ApiObject\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L15)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### hasRpcContractsCall

• get **hasRpcContractsCall**(): boolean

*Inherited from [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md).[hasRpcContractsCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#hasrpccontractscall)*

*Defined in [packages/api-contract/src/base/util.ts:69](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L69)*

**Returns:** boolean

___

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### call

▸ **call**(`as`: \"rpc\", `message`: string, `value`: BN \| number, `gasLimit`: BN \| number, ...`params`: CodecArg[]): [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<ApiType, \"rpc\">

*Defined in [packages/api-contract/src/base/Contract.ts:42](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`as` | \"rpc\" |
`message` | string |
`value` | BN \| number |
`gasLimit` | BN \| number |
`...params` | CodecArg[] |

**Returns:** [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<ApiType, \"rpc\">

▸ **call**(`as`: \"tx\", `message`: string, `value`: BN \| number, `gasLimit`: BN \| number, ...`params`: CodecArg[]): [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<ApiType, \"tx\">

*Defined in [packages/api-contract/src/base/Contract.ts:43](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`as` | \"tx\" |
`message` | string |
`value` | BN \| number |
`gasLimit` | BN \| number |
`...params` | CodecArg[] |

**Returns:** [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<ApiType, \"tx\">

___

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
