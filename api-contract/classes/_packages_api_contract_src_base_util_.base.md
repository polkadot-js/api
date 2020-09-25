**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/base/util"](../modules/_packages_api_contract_src_base_util_.md) / Base

# Class: Base\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* **Base**

  ↳ [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)

## Implements

* ContractBase\<ApiType>

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_util_.base.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_util_.base.md#abi)
* [api](_packages_api_contract_src_base_util_.base.md#api)
* [decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)
* [registry](_packages_api_contract_src_base_util_.base.md#registry)

### Accessors

* [messages](_packages_api_contract_src_base_util_.base.md#messages)

### Methods

* [getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)

## Constructors

### constructor

\+ **new Base**(`api`: ApiObject\<ApiType>, `abi`: ContractABIPre \| Abi, `decorateMethod`: DecorateMethod\<ApiType>): [Base](_packages_api_contract_src_base_util_.base.md)

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiObject\<ApiType> |
`abi` | ContractABIPre \| Abi |
`decorateMethod` | DecorateMethod\<ApiType> |

**Returns:** [Base](_packages_api_contract_src_base_util_.base.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<ApiType>

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L15)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<ApiType>

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### messages

• get **messages**(): ContractMessage[]

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/5ce3524cc/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
