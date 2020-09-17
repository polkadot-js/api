[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/stakerRewards"](_packages_api_derive_src_staking_stakerrewards_.md)

# Module: "packages/api-derive/src/staking/stakerRewards"

## Index

### Functions

* [_stakerRewards](_packages_api_derive_src_staking_stakerrewards_.md#_stakerrewards)
* [_stakerRewardsEras](_packages_api_derive_src_staking_stakerrewards_.md#_stakerrewardseras)
* [stakerRewards](_packages_api_derive_src_staking_stakerrewards_.md#stakerrewards)
* [stakerRewardsMulti](_packages_api_derive_src_staking_stakerrewards_.md#stakerrewardsmulti)
* [stakerRewardsMultiEras](_packages_api_derive_src_staking_stakerrewards_.md#stakerrewardsmultieras)

## Functions

###  _stakerRewards

▸ **_stakerRewards**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:174](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/stakerRewards.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `eras`: EraIndex[], `withActive`: boolean): *Observable‹DeriveStakerReward[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  _stakerRewardsEras

▸ **_stakerRewardsEras**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:161](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/stakerRewards.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`eras`: EraIndex[], `withActive`: boolean): *Observable‹ErasResult›*

**Parameters:**

Name | Type |
------ | ------ |
`eras` | EraIndex[] |
`withActive` | boolean |

___

###  stakerRewards

▸ **stakerRewards**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:194](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/stakerRewards.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `withActive?`: undefined | false | true): *Observable‹DeriveStakerReward[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`withActive?` | undefined &#124; false &#124; true |

___

###  stakerRewardsMulti

▸ **stakerRewardsMulti**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:210](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/stakerRewards.ts#L210)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: (Uint8Array | string)[], `withActive?`: undefined | false | true): *Observable‹DeriveStakerReward[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | (Uint8Array &#124; string)[] |
`withActive?` | undefined &#124; false &#124; true |

___

###  stakerRewardsMultiEras

▸ **stakerRewardsMultiEras**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:202](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/staking/stakerRewards.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountIds`: (Uint8Array | string)[], `eras`: EraIndex[]): *Observable‹DeriveStakerReward[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountIds` | (Uint8Array &#124; string)[] |
`eras` | EraIndex[] |
