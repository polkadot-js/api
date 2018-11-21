// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import U8a from './codec/U8a';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import AuthorityId from './AuthorityId';
import Hash from './Hash';
import Signature from './Signature';
import U32 from './U32';

export type BftAuthoritySignatureValue = {
  authorityId?: AnyU8a,
  signature?: AnyU8a
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class BftAuthoritySignature extends Tuple {
  constructor (value?: BftAuthoritySignatureValue | U8a | Uint8Array) {
    super({
      authorityId: AuthorityId,
      signature: Signature
    }, value);
  }

  get authorityId (): AuthorityId {
    return this.getAtIndex(0) as AuthorityId;
  }

  get signature (): Signature {
    return this.getAtIndex(1) as Signature;
  }
}

export type BftHashSignatureValue = {
  hash?: AnyU8a,
  signature?: AnyU8a
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class BftHashSignature extends Tuple {
  constructor (value?: BftHashSignatureValue | U8a | Uint8Array) {
    super({
      hash: Hash,
      signature: Signature
    }, value);
  }

  get hash (): Hash {
    return this.getAtIndex(0) as Hash;
  }

  get signature (): Signature {
    return this.getAtIndex(1) as Signature;
  }
}

export type JustificationValue = {
  round?: AnyNumber,
  hash?: AnyU8a,
  signatures?: Array<BftAuthoritySignatureValue>
};

export class Justification extends Struct {
  constructor (value?: JustificationValue | U8a | Uint8Array) {
    super({
      // FIXME Rust returns this as "round_number", we actually want a JSON alias
      // in the structure to take care of these renames...
      round: U32,
      hash: Hash,
      signatures: Vector.with(BftAuthoritySignature)
    }, value, new Map([['round', 'round_number']]));
  }

  get hash (): Hash {
    return this.get('hash') as Hash;
  }

  get round (): U32 {
    return this.get('round') as U32;
  }

  get signatures (): Vector<BftAuthoritySignature> {
    return this.get('signatures') as Vector<BftAuthoritySignature>;
  }
}
