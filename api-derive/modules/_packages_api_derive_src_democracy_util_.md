[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/democracy/util"](_packages_api_derive_src_democracy_util_.md)

# Module: "packages/api-derive/src/democracy/util"

## Index

### Functions

* [calcPassing](_packages_api_derive_src_democracy_util_.md#calcpassing)
* [calcVotes](_packages_api_derive_src_democracy_util_.md#calcvotes)
* [compareRationals](_packages_api_derive_src_democracy_util_.md#comparerationals)
* [getStatus](_packages_api_derive_src_democracy_util_.md#getstatus)
* [parseImage](_packages_api_derive_src_democracy_util_.md#parseimage)

## Functions

###  calcPassing

▸ **calcPassing**(`threshold`: VoteThreshold, `sqrtElectorate`: BN, `__namedParameters`: object): *boolean*

*Defined in [packages/api-derive/src/democracy/util.ts:62](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/util.ts#L62)*

**Parameters:**

▪ **threshold**: *VoteThreshold*

▪ **sqrtElectorate**: *BN*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`votedAye` | BN‹› |
`votedNay` | BN‹› |
`votedTotal` | BN‹› |

**Returns:** *boolean*

___

###  calcVotes

▸ **calcVotes**(`sqrtElectorate`: BN, `referendum`: DeriveReferendum, `votes`: DeriveReferendumVote[]): *DeriveReferendumVotes*

*Defined in [packages/api-derive/src/democracy/util.ts:132](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/util.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`sqrtElectorate` | BN |
`referendum` | DeriveReferendum |
`votes` | DeriveReferendumVote[] |

**Returns:** *DeriveReferendumVotes*

___

###  compareRationals

▸ **compareRationals**(`n1`: BN, `d1`: BN, `n2`: BN, `d2`: BN): *boolean*

*Defined in [packages/api-derive/src/democracy/util.ts:35](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/util.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`n1` | BN |
`d1` | BN |
`n2` | BN |
`d2` | BN |

**Returns:** *boolean*

___

###  getStatus

▸ **getStatus**(`info`: Option‹ReferendumInfo | ReferendumInfoTo239›): *ReferendumStatus | ReferendumInfoTo239 | null*

*Defined in [packages/api-derive/src/democracy/util.ts:144](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/util.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *ReferendumStatus | ReferendumInfoTo239 | null*

___

###  parseImage

▸ **parseImage**(`api`: ApiInterfaceRx, `imageOpt`: Option‹OldPreimage› | Option‹PreimageStatus›): *DeriveProposalImage | undefined*

*Defined in [packages/api-derive/src/democracy/util.ts:173](https://github.com/polkadot-js/api/blob/4596e434d/packages/api-derive/src/democracy/util.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`imageOpt` | Option‹OldPreimage› &#124; Option‹PreimageStatus› |

**Returns:** *DeriveProposalImage | undefined*
