**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/api-contract/src/base/Contract"](../modules/_packages_api_contract_src_base_contract_.md) / ContractCall

# Interface: ContractCall\<**ApiType, CallType**>

## Type parameters

Name | Type |
------ | ------ |
`ApiType` | ApiTypes |
`CallType` | ContractCallTypes |

## Hierarchy

* **ContractCall**

## Index

### Methods

* [send](_packages_api_contract_src_base_contract_.contractcall.md#send)

## Methods

### send

▸ **send**(`account`: IKeyringPair \| string \| AccountId \| Address): ContractCallResultSubscription\<ApiType, CallType>

*Defined in [packages/api-contract/src/base/Contract.ts:26](https://github.com/polkadot-js/api/blob/d3703c072/packages/api-contract/src/base/Contract.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`account` | IKeyringPair \| string \| AccountId \| Address |

**Returns:** ContractCallResultSubscription\<ApiType, CallType>
