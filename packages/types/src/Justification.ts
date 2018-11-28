// Copyright 2017-2018 @polkadot/types authors & contributors
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

// generic justification, this is specific per consensus implementation
export default class Justification extends Bytes {
}

// justification for Rhododendron
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

  get hash (): Hash {
    return this.get('hash') as Hash;
  }

  get roundNumber (): U32 {
    return this.get('roundNumber') as U32;
  }

  get signatures (): Vector<BftAuthoritySignature> {
    return this.get('signatures') as Vector<BftAuthoritySignature>;
  }
}
