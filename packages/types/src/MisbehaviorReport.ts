// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from './types';

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import AuthorityId from './AuthorityId';
import { BftHashSignature, BftHashSignatureValue } from './Bft';
import BlockNumber from './BlockNumber';
import Hash from './Hash';
import U32 from './U32';

type BftAtReportValueSingle = {
  round?: AnyNumber,
  a?: BftHashSignatureValue
};

type BftAtReportValue = BftAtReportValueSingle & {
  b?: BftHashSignatureValue
};

/**
 * @name BftAtReport
 * @description
 * A report of a/b hash-signature pairs for a specific index. This is the same
 * structure as is used in BftDoublePrepare & BftDoubleCommit
 */
// FIXME It is not entirely obvious from the actual Rust code what the specific
// items in the structure is called, except a & b (one should be expected, the
// other actual)
export class BftAtReport extends Struct {
  constructor (value?: BftAtReportValue | Uint8Array) {
    super({
      round: U32,
      a: BftHashSignature,
      b: BftHashSignature
    }, value);
  }

  /**
   * @description The first report [[BftHashSignature]]
   */
  get a (): BftHashSignature {
    return this.get('a') as BftHashSignature;
  }

  /**
   * @description The second report [[BftHashSignature]]
   */
  get b (): BftHashSignature {
    return this.get('b') as BftHashSignature;
  }

  /**
   * @description The round this report applies to as [[U32]]
   */
  get round (): U32 {
    return this.get('round') as U32;
  }
}

/**
 * @name BftProposeOutOfTurn
 * @description
 * A report for out-of-turn proposals
 */
export class BftProposeOutOfTurn extends Struct {
  constructor (value?: BftAtReportValue | Uint8Array) {
    super({
      round: U32,
      a: BftHashSignature
    }, value);
  }

  /**
   * @description The [[BftHashSignature]] the report applies to
   */
  get a (): BftHashSignature {
    return this.get('a') as BftHashSignature;
  }

  /**
   * @description The round as [[u32]]
   */
  get round (): U32 {
    return this.get('round') as U32;
  }
}

/**
 * @name BftDoublePropose
 * @description
 * Report of a double-propose
 */
export class BftDoublePropose extends BftAtReport {
}

/**
 * @name BftDoublePrepare
 * @description
 * Report of a double-prepare
 */
export class BftDoublePrepare extends BftAtReport {
}

/**
 * @name BftDoubleCommit
 * @description
 * Report of a double-commit
 */
export class BftDoubleCommit extends BftAtReport {
}

/**
 * @name MisbehaviorKind
 * @description
 * An [[EnumType]] containing a Bft misbehaviour
 */
export class MisbehaviorKind extends EnumType<BftProposeOutOfTurn | BftDoublePropose | BftDoublePrepare | BftDoubleCommit> {
  constructor (value?: BftAtReportValue | Uint8Array, index?: number) {
    super({
      BftProposeOutOfTurn,
      BftDoublePropose,
      BftDoublePrepare,
      BftDoubleCommit
    }, value, index);
  }
}

type MisbehaviorReportValue = {
  misbehavior?: MisbehaviorKind | number,
  parentHash?: Hash | Uint8Array | string,
  parentNumber?: AnyNumber,
  target?: AuthorityId | string
};

/**
 * @name MisbehaviorReport
 * @description
 * A Misbehaviour report of [[MisbehavioirKind]] against a specific [[AuthorityId]]
 */
export default class MisbehaviorReport extends Struct {
  constructor (value?: MisbehaviorReportValue | Uint8Array) {
    super({
      parentHash: Hash,
      parentNumber: BlockNumber,
      target: AuthorityId,
      misbehavior: MisbehaviorKind
    }, value);
  }

  /**
   * @description The [[MisbehaviorKind]]
   */
  get misbehavior (): MisbehaviorKind {
    return this.get('misbehavior') as MisbehaviorKind;
  }

  /**
   * @description The [[Hash]] of the parent block
   */
  get parentHash (): Hash {
    return this.get('parentHash') as Hash;
  }

  /**
   * @description The [[BlockNumber]] of the parent
   */
  get parentNumber (): BlockNumber {
    return this.get('parentNumber') as BlockNumber;
  }

  /**
   * @description The [[authorityId]] the report applies to
   */
  get target (): AuthorityId {
    return this.get('target') as AuthorityId;
  }
}
