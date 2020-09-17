[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/staking/keys"](_packages_api_derive_src_staking_keys_.md)

# Module: "packages/api-derive/src/staking/keys"

## Index

### Functions

* [keys](_packages_api_derive_src_staking_keys_.md#keys)
* [keysMulti](_packages_api_derive_src_staking_keys_.md#keysmulti)

## Functions

###  keys

▸ **keys**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/keys.ts:26](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/keys.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`stashId`: Uint8Array | string): *Observable‹DeriveStakingKeys›*

**Parameters:**

Name | Type |
------ | ------ |
`stashId` | Uint8Array &#124; string |

___

###  keysMulti

▸ **keysMulti**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/keys.ts:34](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/staking/keys.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`stashIds`: (Uint8Array | string)[]): *Observable‹DeriveStakingKeys[]›*

**Parameters:**

Name | Type |
------ | ------ |
`stashIds` | (Uint8Array &#124; string)[] |
