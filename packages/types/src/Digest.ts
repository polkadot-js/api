// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import AuthorityId from './AuthorityId';
import Bytes from './Bytes';
import Hash from './Hash';
import Signature from './Signature';
import U64 from './U64';

/**
 * @name AuthoritiesChange
 * @description
 * Log for Authories changed
 */
export class AuthoritiesChange extends Vector.with(AuthorityId) {
}

/**
 * @name ChangesTrieRoot
 * @description
 * Log for changes to the Trie root
 */
export class ChangesTrieRoot extends Hash {
}

/**
 * @name Other
 * @description
 * Log item that is just a stream of [[Bytes]]
 */
export class Other extends Bytes {
}

/**
 * @name Seal
 * @description
 * Log item indicating a sealing event
 */
export class Seal extends Tuple {
  constructor (value: any) {
    super({
      slot: U64,
      signature: Signature
    }, value);
  }

  /**
   * @description The wrapped [[Signature]]
   */
  get signature (): Signature {
    return this.get('signature') as Signature;
  }

  /**
   * @description The wrapped [[U64]] slot
   */
  get slot (): U64 {
    return this.get('slot') as U64;
  }
}

/**
 * @name DigestItem
 * @description
 * A [[EnumType]] the specifies the specific item in the logs of a [[Digest]]
 */
export class DigestItem extends EnumType<AuthoritiesChange | ChangesTrieRoot | Other
| Seal> {
  constructor (value: any) {
    super([
      Other, // Position 0, as per Rust (encoding control)
      AuthoritiesChange,
      ChangesTrieRoot,
      Seal
    ], value);
  }
}

/**
 * @name Digest
 * @description
 * A [[Header]] Digest
 */
export default class Digest extends Struct {
  constructor (value: any) {
    super({
      logs: Vector.with(DigestItem)
    }, value);
  }

  /**
   * @description The [[DigestItem]] logs
   */
  get logs (): Vector<DigestItem> {
    return this.get('logs') as Vector<DigestItem>;
  }
}
