// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
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
export class BftAuthoritySignature extends Struct {
  constructor (value: BftAuthoritySignatureValue = {}) {
    super({
      authorityId: AuthorityId,
      signature: Signature
    }, value);
  }

  get authorityId (): AuthorityId {
    return this.raw.authorityId as AuthorityId;
  }

  get signature (): Signature {
    return this.raw.signature as Signature;
  }
}

export type BftHashSignatureValue = {
  hash?: AnyU8a,
  signature?: AnyU8a
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class BftHashSignature extends Struct {
  constructor (value: BftHashSignatureValue = {}) {
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

export type JustificationValue = {
  round_number?: AnyNumber,
  hash?: AnyU8a,
  signatures?: Array<BftAuthoritySignatureValue>
};

export class Justification extends Struct {
  constructor (value: JustificationValue = {}) {
    super({
      // FIXME Rust returns this as "round_number", we actually want a JSON alias
      // in the structure to take care of these renames...
      round_number: U32,
      hash: Hash,
      signatures: Vector.with(BftAuthoritySignature)
    }, value);
  }

  get hash (): Hash {
    return this.raw.hash as Hash;
  }

  get round (): U32 {
    return this.raw.round_number as U32;
  }

  get signatures (): Vector<BftAuthoritySignature> {
    return this.raw.signatures as Vector<BftAuthoritySignature>;
  }
}
