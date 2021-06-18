// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, U8aFixed, Vec, u32, u64 } from '@polkadot/types';
import type { Signature } from '@polkadot/types/interfaces/extrinsics';
import type { BlockNumber, H256 } from '@polkadot/types/interfaces/runtime';

/** @name BeefyCommitment */
export interface BeefyCommitment extends Struct {
  readonly payload: BeefyPayload;
  readonly blockNumber: BlockNumber;
  readonly validatorSetId: ValidatorSetId;
}

/** @name BeefyId */
export interface BeefyId extends U8aFixed {}

/** @name BeefyNextAuthoritySet */
export interface BeefyNextAuthoritySet extends Struct {
  readonly id: u64;
  readonly len: u32;
  readonly root: H256;
}

/** @name BeefyPayload */
export interface BeefyPayload extends MmrRootHash {}

/** @name BeefySignedCommitment */
export interface BeefySignedCommitment extends Struct {
  readonly commitment: BeefyCommitment;
  readonly signatures: Vec<Option<Signature>>;
}

/** @name MmrRootHash */
export interface MmrRootHash extends H256 {}

/** @name ValidatorSetId */
export interface ValidatorSetId extends u64 {}

export type PHANTOM_BEEFY = 'beefy';
