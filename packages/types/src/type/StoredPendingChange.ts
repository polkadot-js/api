// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from '../types';

import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Vector from '../codec/Vector';
import U64 from '../primitive/U64';
import BlockNumber from './BlockNumber';
import SessionKey from './SessionKey';

export type NextAuthorityValue = {
  index?: AnyNumber,
  sessionKey?: AnyU8a
};

export type StoredPendingChangeValue = {
  scheduledAt: AnyNumber,
  delay: AnyNumber,
  nextAuthorities?: Array<Uint8Array | NextAuthorityValue>
};

/**
 * @name NextAuthority
 * @description
 * The next authority available as [[SessionKey]]
 */
export class NextAuthority extends Tuple {
  constructor (value?: Uint8Array | NextAuthorityValue) {
    super({
      SessionKey,
      U64
    }, value);
  }

  get index (): U64 {
    return this[1] as U64;
  }

  get sessionKey (): SessionKey {
    return this[0] as SessionKey;
  }
}

/**
 * @name StoredPendingChange
 * @description
 * Stored pending change for a Grandpa events
 */
export default class StoredPendingChange extends Struct {
  constructor (value?: Uint8Array | StoredPendingChangeValue) {
    super({
      scheduledAt: BlockNumber,
      delay: BlockNumber,
      nextAuthorities: Vector.with(NextAuthority)
    }, value);
  }

  get delay (): BlockNumber {
    return this.get('delay') as BlockNumber;
  }

  get nextAuthorities (): Vector<NextAuthority> {
    return this.get('nextAuthorities') as Vector<NextAuthority>;
  }

  get scheduledAt (): BlockNumber {
    return this.get('scheduledAt') as BlockNumber;
  }
}
