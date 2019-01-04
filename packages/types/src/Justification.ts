// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
import Vector from './codec/Vector';
import { BftAuthoritySignature, BftAuthoritySignatureValue } from './Bft';
import Bytes from './Bytes';
import Hash from './Hash';
import U32 from './U32';

export type RhdJustificationValue = {
  roundNumber?: AnyNumber,
  hash?: AnyU8a,
  signatures?: Array<BftAuthoritySignatureValue>
};

/**
 * @name Justification
 * @description
 * A generic justification as a stream of [[Bytes]], this is specific per consensus implementation
 */
export default class Justification extends Bytes {
}

/**
 * @name RhdJustification
 * @description
 * [[Justification]] for the Rhododendron consensus algorithm
 */
export class RhdJustification extends Struct {
  constructor (value?: RhdJustificationValue | Uint8Array) {
    super({
      roundNumber: U32,
      hash: Hash,
      signatures: Vector.with(BftAuthoritySignature)
    }, value, new Map([
      ['roundNumber', 'round_number']
    ]));
  }

  /**
   * @description The justification [[Hash]]
   */
  get hash (): Hash {
    return this.get('hash') as Hash;
  }

  /**
   * @description The round this justification wraps as a [[U32]]
   */
  get roundNumber (): U32 {
    return this.get('roundNumber') as U32;
  }

  /**
   * @description The [[BftAuthoritySignature]] array
   */
  get signatures (): Vector<BftAuthoritySignature> {
    return this.get('signatures') as Vector<BftAuthoritySignature>;
  }
}
