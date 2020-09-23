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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:173](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/staking/stakerRewards.ts#L173)*

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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:160](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/staking/stakerRewards.ts#L160)*

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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:193](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/staking/stakerRewards.ts#L193)*

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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:209](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/staking/stakerRewards.ts#L209)*

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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:201](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/api-derive/src/staking/stakerRewards.ts#L201)*

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
