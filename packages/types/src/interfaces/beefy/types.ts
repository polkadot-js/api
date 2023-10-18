// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { EcdsaSignature, Signature } from '@polkadot/types/interfaces/extrinsics';
import type { BlockNumber, H256 } from '@polkadot/types/interfaces/runtime';

/** @name BeefyAuthoritySet */
export interface BeefyAuthoritySet extends Struct {
  readonly id: u64;
  readonly len: u32;
  readonly root: H256;
}

/** @name BeefyCommitment */
export interface BeefyCommitment extends Struct {
  readonly payload: BeefyPayload;
  readonly blockNumber: BlockNumber;
  readonly validatorSetId: ValidatorSetId;
}

/** @name BeefyEquivocationProof */
export interface BeefyEquivocationProof extends Struct {
  readonly first: BeefyVoteMessage;
  readonly second: BeefyVoteMessage;
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
export interface BeefyPayload extends Vec<ITuple<[BeefyPayloadId, Bytes]>> {}

/** @name BeefyPayloadId */
export interface BeefyPayloadId extends U8aFixed {}

/** @name BeefySignedCommitment */
export interface BeefySignedCommitment extends Struct {
  readonly commitment: BeefyCommitment;
  readonly signatures: Vec<Option<EcdsaSignature>>;
}

/** @name BeefyVersionedFinalityProof */
export interface BeefyVersionedFinalityProof extends Enum {
  readonly isV0: boolean;
  readonly isV1: boolean;
  readonly asV1: BeefySignedCommitment;
  readonly type: 'V0' | 'V1';
}

/** @name BeefyVoteMessage */
export interface BeefyVoteMessage extends Struct {
  readonly commitment: BeefyCommitment;
  readonly id: AuthorityId;
  readonly signature: Signature;
}

/** @name MmrRootHash */
export interface MmrRootHash extends H256 {}

/** @name ValidatorSet */
export interface ValidatorSet extends Struct {
  readonly validators: Vec<AuthorityId>;
  readonly id: ValidatorSetId;
}

/** @name ValidatorSetId */
export interface ValidatorSetId extends u64 {}

export type PHANTOM_BEEFY = 'beefy';
