[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/promise/PromiseBlueprint"](../modules/_packages_api_contract_src_promise_promiseblueprint_.md) › [PromiseBlueprint](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md)

# Class: PromiseBlueprint

## Hierarchy

  ↳ [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)‹"promise"›

  ↳ **PromiseBlueprint**

## Implements

* ContractBase‹"promise"›

## Index

### Constructors

* [constructor](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#constructor)

### Properties

* [abi](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#readonly-abi)
* [api](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#readonly-api)
* [codeHash](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#readonly-codehash)
* [decorateMethod](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#readonly-registry)

### Accessors

* [messages](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#messages)

### Methods

* [deployContract](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#deploycontract)
* [getMessage](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md#getmessage)

## Constructors

###  constructor

\+ **new PromiseBlueprint**(`api`: ApiPromise, `abi`: ContractABIPre | Abi, `codeHash`: string | Hash): *[PromiseBlueprint](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md)*

*Overrides [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md).[constructor](_packages_api_contract_src_base_blueprint_.blueprint.md#constructor)*

*Defined in [packages/api-contract/src/promise/PromiseBlueprint.ts:13](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/promise/PromiseBlueprint.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiPromise |
`abi` | ContractABIPre &#124; Abi |
`codeHash` | string &#124; Hash |

**Returns:** *[PromiseBlueprint](_packages_api_contract_src_promise_promiseblueprint_.promiseblueprint.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L13)*

___

### `Readonly` api

• **api**: *ApiObject‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L15)*

___

### `Readonly` codeHash

• **codeHash**: *Hash*

*Inherited from [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md).[codeHash](_packages_api_contract_src_base_blueprint_.blueprint.md#readonly-codehash)*

*Defined in [packages/api-contract/src/base/Blueprint.ts:38](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/Blueprint.ts#L38)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹"promise"›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#readonly-decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L17)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#readonly-registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L19)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L30)*

**Returns:** *ContractMessage[]*

## Methods

###  deployContract

▸ **deployContract**(`constructorIndex`: number, `endowment`: number | BN, `maxGas`: number | BN, ...`params`: any[]): *[BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)‹"promise"›*

*Inherited from [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md).[deployContract](_packages_api_contract_src_base_blueprint_.blueprint.md#deploycontract)*

*Defined in [packages/api-contract/src/base/Blueprint.ts:46](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/Blueprint.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`constructorIndex` | number | 0 |
`endowment` | number &#124; BN | - |
`maxGas` | number &#124; BN | - |
`...params` | any[] | - |

**Returns:** *[BlueprintCreate](../interfaces/_packages_api_contract_src_base_blueprint_.blueprintcreate.md)‹"promise"›*

___

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/b4cae1483/packages/api-contract/src/base/util.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
