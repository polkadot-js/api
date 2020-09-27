**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/base/Blueprint"](../modules/_packages_api_contract_src_base_blueprint_.md) / Blueprint

# Class: Blueprint\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)\<ApiType>

  ↳ **Blueprint**

  ↳↳ [PromiseBlueprint](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md)

  ↳↳ [RxBlueprint](_packages_api_contract_src_rx_rxblueprint_.rxblueprint.md)

## Implements

* ContractBase\<ApiType>

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_blueprint_.blueprint.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_blueprint_.blueprint.md#abi)
* [api](_packages_api_contract_src_base_blueprint_.blueprint.md#api)
* [codeHash](_packages_api_contract_src_base_blueprint_.blueprint.md#codehash)
* [decorateMethod](_packages_api_contract_src_base_blueprint_.blueprint.md#decoratemethod)
* [registry](_packages_api_contract_src_base_blueprint_.blueprint.md#registry)

### Accessors

* [messages](_packages_api_contract_src_base_blueprint_.blueprint.md#messages)

### Methods

* [deployContract](_packages_api_contract_src_base_blueprint_.blueprint.md#deploycontract)
* [getMessage](_packages_api_contract_src_base_blueprint_.blueprint.md#getmessage)

## Constructors

### constructor

\+ **new Blueprint**(`api`: ApiObject\<ApiType>, `abi`: ContractABIPre \| Abi, `decorateMethod`: DecorateMethod\<ApiType>, `codeHash`: string \| Hash): [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Blueprint.ts:38](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/Blueprint.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiObject\<ApiType> |
`abi` | ContractABIPre \| Abi |
`decorateMethod` | DecorateMethod\<ApiType> |
`codeHash` | string \| Hash |

**Returns:** [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L15)*

___

### codeHash

• `Readonly` **codeHash**: Hash

*Defined in [packages/api-contract/src/base/Blueprint.ts:38](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/Blueprint.ts#L38)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<ApiType>

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number \| BN, `maxGas`: number \| BN, ...`params`: any[]): [BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)\<ApiType>

*Defined in [packages/api-contract/src/base/Blueprint.ts:46](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/Blueprint.ts#L46)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number \| BN | - |
`maxGas` | number \| BN | - |
`...params` | any[] | - |

**Returns:** [BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)\<ApiType>

___

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/8631f68ba/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
