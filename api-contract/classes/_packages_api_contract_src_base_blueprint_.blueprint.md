[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/base/Blueprint"](../modules/_packages_api_contract_src_base_blueprint_.md) › [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)

# Class: Blueprint ‹**ApiType**›

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

  ↳ [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)‹ApiType›

  ↳ **Blueprint**

  ↳ [PromiseBlueprint](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md)

  ↳ [RxBlueprint](_packages_api_contract_src_rx_rxblueprint_.rxblueprint.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_blueprint_.blueprint.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-abi)
* [api](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-api)
* [codeHash](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-codehash)
* [decorateMethod](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-registry)

### Accessors

* [messages](_packages_api_contract_src_base_blueprint_.blueprint.md#messages)

### Methods

* [deployContract](_packages_api_contract_src_base_blueprint_.blueprint.md#deploycontract)
* [getMessage](_packages_api_contract_src_base_blueprint_.blueprint.md#getmessage)

## Constructors

###  constructor

\+ **new Blueprint**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›, `codeHash`: string | Hash): *[Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)*

*Overrides [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md).[constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)*

*Defined in [packages/api-contract/src/base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Blueprint.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |
`codeHash` | string &#124; Hash |

**Returns:** *[Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)*

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

### `Readonly` codeHash

• **codeHash**: *Hash*

*Defined in [packages/api-contract/src/base/Blueprint.ts:39](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Blueprint.ts#L39)*

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

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)‹ApiType›*

*Defined in [packages/api-contract/src/base/Blueprint.ts:47](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-contract/src/base/Blueprint.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)‹ApiType›*

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
