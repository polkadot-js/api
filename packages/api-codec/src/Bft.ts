// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Struct from './codec/Struct';
import U8a from './codec/U8a';
import UInt from './codec/UInt';
import Vector from './codec/Vector';
import AuthorityId from './AuthorityId';
import Hash from './Hash';
import Signature from './Signature';
import U32 from './U32';

export type BftAuthoritySignatureStruct = {
  authorityId?: U8a | Uint8Array | string,
  signature?: U8a | Uint8Array | string
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class BftAuthoritySignature extends Struct {
  constructor (value: BftAuthoritySignatureStruct = {}) {
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

export type BftHashSignatureStruct = {
  hash?: U8a | Uint8Array | string,
  signature?: U8a | Uint8Array | string
};

// Represents a Bft Hash and Signature pairing, typically used in reporting
// network behaviour.
export class BftHashSignature extends Struct {
  constructor (value: BftHashSignatureStruct = {}) {
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

export type JustificationStruct = {
  round_number?: UInt | BN | number | string,
  hash?: U8a | Uint8Array | string,
  signatures?: Array<BftAuthoritySignatureStruct>
};

export class Justification extends Struct {
  constructor (value: JustificationStruct = {}) {
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
