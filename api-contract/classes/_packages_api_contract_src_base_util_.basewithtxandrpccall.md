**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/base/util"](../modules/_packages_api_contract_src_base_util_.md) / BaseWithTxAndRpcCall

# Class: BaseWithTxAndRpcCall\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)\<ApiType>

  ↳ **BaseWithTxAndRpcCall**

  ↳↳ [Contract](_packages_api_contract_src_base_contract_.contract.md)

## Implements

* ContractBase\<ApiType>

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#abi)
* [api](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#api)
* [decorateMethod](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#decoratemethod)
* [registry](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#registry)

### Accessors

* [hasRpcContractsCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#hasrpccontractscall)
* [messages](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#messages)

### Methods

* [getMessage](_packages_api_contract_src_base_util_.basewithtxandrpccall.md#getmessage)

## Constructors

### constructor

\+ **new BaseWithTxAndRpcCall**(`api`: ApiObject\<ApiType>, `abi`: ContractABIPre \| Abi, `decorateMethod`: DecorateMethod\<ApiType>): [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md)

*Inherited from [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Overrides [Base](_packages_api_contract_src_base_util_.base.md).[constructor](_packages_api_contract_src_base_util_.base.md#constructor)*

*Defined in [packages/api-contract/src/base/util.ts:59](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L59)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiObject\<ApiType> |
`abi` | ContractABIPre \| Abi |
`decorateMethod` | DecorateMethod\<ApiType> |

**Returns:** [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L15)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### hasRpcContractsCall

• get **hasRpcContractsCall**(): boolean

*Defined in [packages/api-contract/src/base/util.ts:69](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L69)*

**Returns:** boolean

___

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
