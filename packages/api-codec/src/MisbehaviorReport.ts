// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import UInt from './codec/UInt';
import AuthorityId from './AuthorityId';
import { BftHashSignature, BftHashSignatureStruct } from './Bft';
import BlockNumber from './BlockNumber';
import Hash from './Hash';
import U32 from './U32';

type BftAtReportStruct = {
  round?: UInt | BN | number,
  a?: BftHashSignatureStruct,
  b?: BftHashSignatureStruct
};

// A report of a/b hash-signature pairs for a specific index. This is the same
// structure as is used in BftDoublePrepare & BftDoubleCommit
//
// FIXME It is not entirely obvious from the actual Rust code what the specific
// items in the structure is called, except a & b (one should be expected, the
// other actual)
export class BftAtReport extends Struct {
  constructor (value: BftAtReportStruct = {}) {
    super({
      round: U32,
      a: BftHashSignature,
      b: BftHashSignature
    }, value);
  }

  get a (): BftHashSignature {
    return this.raw.a as BftHashSignature;
  }

  get b (): BftHashSignature {
    return this.raw.b as BftHashSignature;
  }

  get round (): U32 {
    return this.raw.round as U32;
  }
}

// Report of a double-prepare
export class BftDoublePrepare extends BftAtReport {
}

// Report of a double-commit
export class BftDoubleCommit extends BftAtReport {
}

export class MisbehaviorKind extends EnumType<BftDoublePrepare | BftDoubleCommit> {
  constructor (index: number, value: BftAtReportStruct = {}) {
    super([
      BftDoublePrepare,
      BftDoubleCommit
    ], [], [0x11, 0x12]);

    this.setValue(index, value);
  }
}

type MisbehaviorReportStruct = {
  unstakeThreshold?: UInt | BN | number,
  validatorPayment?: UInt | BN | number
};

// A Misbehaviour report against a specific AuthorityId
export default class MisbehaviorReport extends Struct {
  constructor (value: MisbehaviorReportStruct = {}) {
    super({
      parentHash: Hash,
	    parentNumber: BlockNumber,
	    target: AuthorityId,
      misbehavior: MisbehaviorKind
    }, value);
  }

  get misbehavior (): MisbehaviorKind {
    return this.raw.misbehavior as MisbehaviorKind;
  }

  get parentHash (): Hash {
    return this.raw.parentHash as Hash;
  }

  get parentNumber (): BlockNumber {
    return this.raw.parentNumber as BlockNumber;
  }

  get target (): AuthorityId {
    return this.raw.target as AuthorityId;
  }
}
