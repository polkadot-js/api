[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/democracy/referendumsInfo"](_packages_api_derive_src_democracy_referendumsinfo_.md)

# Module: "packages/api-derive/src/democracy/referendumsInfo"

## Index

### Functions

* [_referendumInfo](_packages_api_derive_src_democracy_referendumsinfo_.md#_referenduminfo)
* [_referendumVotes](_packages_api_derive_src_democracy_referendumsinfo_.md#_referendumvotes)
* [_referendumsVotes](_packages_api_derive_src_democracy_referendumsinfo_.md#_referendumsvotes)
* [referendumsInfo](_packages_api_derive_src_democracy_referendumsinfo_.md#referendumsinfo)

## Functions

###  _referendumInfo

▸ **_referendumInfo**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:122](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/referendumsInfo.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN, `info`: Option‹ReferendumInfo | ReferendumInfoTo239›): *Observable‹DeriveReferendum | null›*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

___

###  _referendumVotes

▸ **_referendumVotes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:95](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/referendumsInfo.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`referendum`: DeriveReferendum): *Observable‹DeriveReferendumVotes›*

**Parameters:**

Name | Type |
------ | ------ |
`referendum` | DeriveReferendum |

___

###  _referendumsVotes

▸ **_referendumsVotes**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:110](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/referendumsInfo.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`referendums`: DeriveReferendum[]): *Observable‹DeriveReferendumVotes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`referendums` | DeriveReferendum[] |

___

###  referendumsInfo

▸ **referendumsInfo**(`instanceId`: string, `api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:139](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/referendumsInfo.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`ids`: BN[]): *Observable‹DeriveReferendum[]›*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | BN[] |
