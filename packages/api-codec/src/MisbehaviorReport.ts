// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import U8a from './codec/U8a';
import UInt from './codec/UInt';
import AuthorityId from './AuthorityId';
import BlockNumber from './BlockNumber';
import Hash from './Hash';
import Signature from './Signature';
import U32 from './U32';

type HashSignatureStruct = {
  hash?: U8a | Uint8Array | string,
  signature?: U8a | Uint8Array | string
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class HashSignature extends Struct {
  constructor (value: HashSignatureStruct = {}) {
    super({
      hash: Hash,
      signature: Signature
    }, value);
  }

  get hash (): Hash {
    return this.raw.hash as Hash;
  }

  get signature (): Signature {
    return this.raw.signature as Signature;
  }
}

type BftAtReportStruct = {
  round?: UInt | BN | number,
  a?: HashSignatureStruct,
  b?: HashSignatureStruct
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
      a: HashSignature,
      b: HashSignature
    }, value);
  }

  get a (): HashSignature {
    return this.raw.a as HashSignature;
  }

  get b (): HashSignature {
    return this.raw.b as HashSignature;
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
