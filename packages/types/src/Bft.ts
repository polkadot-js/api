// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from './types';

import Tuple from './codec/Tuple';
import AuthorityId from './AuthorityId';
import Hash from './Hash';
import Signature from './Signature';

export type BftAuthoritySignatureValue = {
  authorityId?: AnyU8a,
  signature?: AnyU8a
};

/**
 * @name BftAuthoritySignature
 * @description
 * Represents a Bft Hash and Signature pairing, typically used in reporting
 * network behaviour.
 */
export class BftAuthoritySignature extends Tuple {
  constructor (value?: BftAuthoritySignatureValue | Uint8Array) {
    super(
      [AuthorityId, Signature],
      value
    );
  }

  get authorityId (): AuthorityId {
    return this[0] as AuthorityId;
  }

  get signature (): Signature {
    return this[1] as Signature;
  }
}

export type BftHashSignatureValue = {
  hash?: AnyU8a,
  signature?: AnyU8a
};

/**
 * @name BftHashSignature
 * @description
 * Represents a Bft Hash and Signature pairing, typically used in reporting
 * network behaviour.
 */
export class BftHashSignature extends Tuple {
  constructor (value?: BftHashSignatureValue | Uint8Array) {
    super([
      Hash,
      Signature
    ], value);
  }

  get hash (): Hash {
    return this[0] as Hash;
  }

  get signature (): Signature {
    return this[1] as Signature;
  }
}
