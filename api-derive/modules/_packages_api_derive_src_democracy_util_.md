**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / "packages/api-derive/src/democracy/util"

# Module: "packages/api-derive/src/democracy/util"

## Index

### Functions

* [calcPassing](_packages_api_derive_src_democracy_util_.md#calcpassing)
* [calcVotes](_packages_api_derive_src_democracy_util_.md#calcvotes)
* [compareRationals](_packages_api_derive_src_democracy_util_.md#comparerationals)
* [getStatus](_packages_api_derive_src_democracy_util_.md#getstatus)
* [parseImage](_packages_api_derive_src_democracy_util_.md#parseimage)

## Functions

### calcPassing

▸ **calcPassing**(`threshold`: VoteThreshold, `sqrtElectorate`: BN, `__namedParameters`: { votedAye: BN ; votedNay: BN ; votedTotal: BN  }): boolean

*Defined in [packages/api-derive/src/democracy/util.ts:61](https://github.com/polkadot-js/api/blob/cc926596e/packages/api-derive/src/democracy/util.ts#L61)*

#### Parameters:

Name | Type |
------ | ------ |
`threshold` | VoteThreshold |
`sqrtElectorate` | BN |
`__namedParameters` | { votedAye: BN ; votedNay: BN ; votedTotal: BN  } |

**Returns:** boolean

___

### calcVotes

▸ **calcVotes**(`sqrtElectorate`: BN, `referendum`: DeriveReferendum, `votes`: DeriveReferendumVote[]): DeriveReferendumVotes

*Defined in [packages/api-derive/src/democracy/util.ts:131](https://github.com/polkadot-js/api/blob/cc926596e/packages/api-derive/src/democracy/util.ts#L131)*

#### Parameters:

Name | Type |
------ | ------ |
`sqrtElectorate` | BN |
`referendum` | DeriveReferendum |
`votes` | DeriveReferendumVote[] |

**Returns:** DeriveReferendumVotes

___

### compareRationals

▸ **compareRationals**(`n1`: BN, `d1`: BN, `n2`: BN, `d2`: BN): boolean

*Defined in [packages/api-derive/src/democracy/util.ts:34](https://github.com/polkadot-js/api/blob/cc926596e/packages/api-derive/src/democracy/util.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`n1` | BN |
`d1` | BN |
`n2` | BN |
`d2` | BN |

**Returns:** boolean

___

### getStatus

▸ **getStatus**(`info`: Option\<ReferendumInfo \| ReferendumInfoTo239>): ReferendumStatus \| ReferendumInfoTo239 \| null

*Defined in [packages/api-derive/src/democracy/util.ts:143](https://github.com/polkadot-js/api/blob/cc926596e/packages/api-derive/src/democracy/util.ts#L143)*

#### Parameters:

Name | Type |
------ | ------ |
`info` | Option\<ReferendumInfo \| ReferendumInfoTo239> |

**Returns:** ReferendumStatus \| ReferendumInfoTo239 \| null

___

### parseImage

▸ **parseImage**(`api`: ApiInterfaceRx, `imageOpt`: Option\<OldPreimage> \| Option\<PreimageStatus>): DeriveProposalImage \| undefined

*Defined in [packages/api-derive/src/democracy/util.ts:172](https://github.com/polkadot-js/api/blob/cc926596e/packages/api-derive/src/democracy/util.ts#L172)*

#### Parameters:

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`imageOpt` | Option\<OldPreimage> \| Option\<PreimageStatus> |

**Returns:** DeriveProposalImage \| undefined
