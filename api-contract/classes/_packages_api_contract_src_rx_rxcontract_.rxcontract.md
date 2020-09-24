**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/rx/RxContract"](../modules/_packages_api_contract_src_rx_rxcontract_.md) / RxContract

# Class: RxContract

## Hierarchy

* [Contract](_packages_api_contract_src_base_contract_.contract.md)\<\"rxjs\">

  ↳ **RxContract**

## Implements

* ContractBase\<\"rxjs\">

## Index

### Constructors

* [constructor](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#constructor)

### Properties

* [abi](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#abi)
* [address](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#address)
* [api](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#api)
* [decorateMethod](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#decoratemethod)
* [registry](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#registry)

### Accessors

* [hasRpcContractsCall](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#hasrpccontractscall)
* [messages](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#messages)

### Methods

* [call](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#call)
* [getMessage](_packages_api_contract_src_rx_rxcontract_.rxcontract.md#getmessage)

## Constructors

### constructor

\+ **new RxContract**(`api`: ApiRx, `abi`: ContractABIPre \| Abi, `address`: string \| AccountId): [RxContract](_packages_api_contract_src_rx_rxcontract_.rxcontract.md)

*Overrides [Contract](_packages_api_contract_src_base_contract_.contract.md).[constructor](_packages_api_contract_src_base_contract_.contract.md#constructor)*

*Defined in [packages/api-contract/src/rx/RxContract.ts:13](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/rx/RxContract.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiRx |
`abi` | ContractABIPre \| Abi |
`address` | string \| AccountId |

**Returns:** [RxContract](_packages_api_contract_src_rx_rxcontract_.rxcontract.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L13)*

___

### address

• `Readonly` **address**: Address

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[address](_packages_api_contract_src_base_contract_.contract.md#address)*

*Defined in [packages/api-contract/src/base/Contract.ts:34](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L34)*

___

### api

• `Readonly` **api**: ApiObject\<\"rxjs\">

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/util.ts#L15)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<\"rxjs\">

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

▸ **call**(`as`: \"rpc\", `message`: string, `value`: BN \| number, `gasLimit`: BN \| number, ...`params`: CodecArg[]): [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<\"rxjs\", \"rpc\">

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[call](_packages_api_contract_src_base_contract_.contract.md#call)*

*Defined in [packages/api-contract/src/base/Contract.ts:42](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`as` | \"rpc\" |
`message` | string |
`value` | BN \| number |
`gasLimit` | BN \| number |
`...params` | CodecArg[] |

**Returns:** [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<\"rxjs\", \"rpc\">

▸ **call**(`as`: \"tx\", `message`: string, `value`: BN \| number, `gasLimit`: BN \| number, ...`params`: CodecArg[]): [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<\"rxjs\", \"tx\">

*Inherited from [Contract](_packages_api_contract_src_base_contract_.contract.md).[call](_packages_api_contract_src_base_contract_.contract.md#call)*

*Defined in [packages/api-contract/src/base/Contract.ts:43](https://github.com/polkadot-js/api/blob/05c0379f4/packages/api-contract/src/base/Contract.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`as` | \"tx\" |
`message` | string |
`value` | BN \| number |
`gasLimit` | BN \| number |
`...params` | CodecArg[] |

**Returns:** [ContractCall](../interfaces/_packages_api_contract_src_base_contract_.contractcall.md)\<\"rxjs\", \"tx\">

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
