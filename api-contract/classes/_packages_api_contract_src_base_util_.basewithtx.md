[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-contract/src/base/util"](../modules/_packages_api_contract_src_base_util_.md) › [BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)

# Class: BaseWithTx ‹**ApiType**›

## Type parameters

▪ **ApiType**: *ApiTypes*

## Hierarchy

* [Base](_packages_api_contract_src_base_util_.base.md)‹ApiType›

  ↳ **BaseWithTx**

  ↳ [BaseWithTxAndRpcCall](_packages_api_contract_src_base_util_.basewithtxandrpccall.md)

  ↳ [Blueprint](_packages_api_contract_src_base_blueprint_.blueprint.md)

  ↳ [Code](_packages_api_contract_src_base_code_.code.md)

## Implements

* ContractBase‹ApiType›

## Index

### Constructors

* [constructor](_packages_api_contract_src_base_util_.basewithtx.md#constructor)

### Properties

* [abi](_packages_api_contract_src_base_util_.basewithtx.md#readonly-abi)
* [api](_packages_api_contract_src_base_util_.basewithtx.md#readonly-api)
* [decorateMethod](_packages_api_contract_src_base_util_.basewithtx.md#readonly-decoratemethod)
* [registry](_packages_api_contract_src_base_util_.basewithtx.md#readonly-registry)

### Accessors

* [messages](_packages_api_contract_src_base_util_.basewithtx.md#messages)

### Methods

* [getMessage](_packages_api_contract_src_base_util_.basewithtx.md#getmessage)

## Constructors

###  constructor

\+ **new BaseWithTx**(`api`: ApiObject‹ApiType›, `abi`: ContractABIPre | Abi, `decorateMethod`: DecorateMethod‹ApiType›): *[BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)*

*Overrides [Base](_packages_api_contract_src_base_util_.base.md).[constructor](_packages_api_contract_src_base_util_.base.md#constructor)*

*Defined in [packages/api-contract/src/base/util.ts:59](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiObject‹ApiType› |
`abi` | ContractABIPre &#124; Abi |
`decorateMethod` | DecorateMethod‹ApiType› |

**Returns:** *[BaseWithTx](_packages_api_contract_src_base_util_.basewithtx.md)*

## Properties

### `Readonly` abi

• **abi**: *Abi*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[abi](_packages_api_contract_src_base_util_.base.md#readonly-abi)*

*Defined in [packages/api-contract/src/base/util.ts:13](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L13)*

___

### `Readonly` api

• **api**: *ApiObject‹ApiType›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[api](_packages_api_contract_src_base_util_.base.md#readonly-api)*

*Defined in [packages/api-contract/src/base/util.ts:15](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L15)*

___

### `Readonly` decorateMethod

• **decorateMethod**: *DecorateMethod‹ApiType›*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[decorateMethod](_packages_api_contract_src_base_util_.base.md#readonly-decoratemethod)*

*Defined in [packages/api-contract/src/base/util.ts:17](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L17)*

___

### `Readonly` registry

• **registry**: *Registry*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[registry](_packages_api_contract_src_base_util_.base.md#readonly-registry)*

*Defined in [packages/api-contract/src/base/util.ts:19](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L19)*

## Accessors

###  messages

• **get messages**(): *ContractMessage[]*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[messages](_packages_api_contract_src_base_util_.base.md#messages)*

*Defined in [packages/api-contract/src/base/util.ts:30](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L30)*

**Returns:** *ContractMessage[]*

## Methods

###  getMessage

▸ **getMessage**(`nameOrIndex?`: string | number): *ContractMessage*

*Inherited from [Base](_packages_api_contract_src_base_util_.base.md).[getMessage](_packages_api_contract_src_base_util_.base.md#getmessage)*

*Defined in [packages/api-contract/src/base/util.ts:40](https://github.com/polkadot-js/api/blob/b56c1a828/packages/api-contract/src/base/util.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`nameOrIndex?` | string &#124; number |

**Returns:** *ContractMessage*
