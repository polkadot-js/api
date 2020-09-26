**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api-contract/src/rx/RxCode"](../modules/_packages_api_contract_src_rx_rxcode_.md) / RxCode

# Class: RxCode

## Hierarchy

* [Code](_packages_api_contract_src_base_code_.code.md)\<\"rxjs\">

  ↳ **RxCode**

## Implements

* ContractBase\<\"rxjs\">

## Index

### Constructors

* [constructor](_packages_api_contract_src_rx_rxcode_.rxcode.md#constructor)

### Properties

* [abi](_packages_api_contract_src_rx_rxcode_.rxcode.md#abi)
* [api](_packages_api_contract_src_rx_rxcode_.rxcode.md#api)
* [code](_packages_api_contract_src_rx_rxcode_.rxcode.md#code)
* [decorateMethod](_packages_api_contract_src_rx_rxcode_.rxcode.md#decoratemethod)
* [registry](_packages_api_contract_src_rx_rxcode_.rxcode.md#registry)

### Accessors

* [messages](_packages_api_contract_src_rx_rxcode_.rxcode.md#messages)

### Methods

* [createBlueprint](_packages_api_contract_src_rx_rxcode_.rxcode.md#createblueprint)
* [getMessage](_packages_api_contract_src_rx_rxcode_.rxcode.md#getmessage)

## Constructors

### constructor

\+ **new RxCode**(`api`: ApiRx, `abi`: ContractABIPre \| Abi, `wasm`: string \| Uint8Array): [RxCode](_packages_api_contract_src_rx_rxcode_.rxcode.md)

*Overrides [Code](_packages_api_contract_src_base_code_.code.md).[constructor](_packages_api_contract_src_base_code_.code.md#constructor)*

*Defined in [packages/api-contract/src/rx/RxCode.ts:12](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/rx/RxCode.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiRx |
`abi` | ContractABIPre \| Abi |
`wasm` | string \| Uint8Array |

**Returns:** [RxCode](_packages_api_contract_src_rx_rxcode_.rxcode.md)

## Properties

### abi

• `Readonly` **abi**: Abi

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L13)*

___

### api

• `Readonly` **api**: ApiObject\<\"rxjs\">

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L15)*

___

### code

• `Readonly` **code**: Uint8Array

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[code](_packages_api_contract_src_base_code_.code.md#code)*

*Defined in [packages/api-contract/src/base/Code.ts:38](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/Code.ts#L38)*

___

### decorateMethod

• `Readonly` **decorateMethod**: DecorateMethod\<\"rxjs\">

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L17)*

___

### registry

• `Readonly` **registry**: Registry

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L19)*

## Accessors

### messages

• get **messages**(): ContractMessage[]

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L30)*

**Returns:** ContractMessage[]

## Methods

### createBlueprint

▸ **createBlueprint**(`maxGas`: number \| BN): [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<\"rxjs\">

*Inherited from [Code](_packages_api_contract_src_base_code_.code.md).[createBlueprint](_packages_api_contract_src_base_code_.code.md#createblueprint)*

*Defined in [packages/api-contract/src/base/Code.ts:46](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/Code.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`maxGas` | number \| BN |

**Returns:** [CodePutCode](../interfaces/_packages_api_contract_src_base_code_.codeputcode.md)\<\"rxjs\">

___

### getMessage

▸ **getMessage**(`nameOrIndex?`: string \| number): ContractMessage

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/c27e41be3/packages/api-contract/src/base/util.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`nameOrIndex?` | string \| number |

**Returns:** ContractMessage
