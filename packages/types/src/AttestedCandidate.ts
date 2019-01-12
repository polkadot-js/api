// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import AccountId from './AccountId';
import Bytes from './Bytes';
import Hash from './Hash';
import Null from './Null';
import ParaId from './ParaId';
import Signature from './Signature';
import SessionKey from './SessionKey';
import U64 from './U64';

export class CandidateSignature extends Signature {
}

export class BalanceUpload extends Tuple.with({ AccountId, U64 }) {
}

export class EgressQueueRoot extends Tuple.with({ ParaId, Hash }) {
}

export class HeadData extends Bytes {
}

export class CandidateReceipt extends Struct {
  constructor (value?: any) {
    super({
      parachainIndex: ParaId,
      collator: AccountId,
      signature: CandidateSignature,
      headData: HeadData,
      balanceUploads: Vector.with(BalanceUpload),
      egressQueueRoots: Vector.with(EgressQueueRoot),
      fees: U64,
      blockDataHash: Hash
    }, value);
  }
}

export class AvailabilityVote extends Tuple.with({ SessionKey, CandidateSignature }) {
}

export class ExplicitCandidateSignature extends CandidateSignature {
}

export class ImplicitCandidateSignature extends CandidateSignature {
}

export class ValidityAttestation extends EnumType<Null | ImplicitCandidateSignature | ExplicitCandidateSignature> {
  constructor (value?: any) {
    super({
      // This Null is not in the original, however indexes start at 1, so add a
      // placeholder in the first position (which is basically non-valid)
      Null,
      ImplicitCandidateSignature, // 1
      ExplicitCandidateSignature // 2
    }, value);
  }

  /**
   * @description Returns the item as a [[ExplicitCandidateSignature]]
   */
  get asExplicitCandidateSignature (): ExplicitCandidateSignature {
    return this.value as ExplicitCandidateSignature;
  }

  /**
   * @description Returns the item as a [[ImplicitCandidateSignature]]
   */
  get asImplicitCandidateSignature (): ImplicitCandidateSignature {
    return this.value as ImplicitCandidateSignature;
  }
}

export class ValidityVote extends Tuple.with({ SessionKey, ValidityAttestation }) {
}

/**
 * @name AttestedCandidate
 * @description
 *  An attested candidate
 */
export default class AttestedCandidate extends Struct {
  constructor (value?: any) {
    super({
      candidate: CandidateReceipt,
	    validityVotes: Vector.with(ValidityVote),
	    availabilityVotes: Vector.with(AvailabilityVote)
    }, value);
  }
}
