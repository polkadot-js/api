// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';

import BlockNumber from './BlockNumber';
import SessionKey from './SessionKey';
import U64 from './U64';

class NextAuthority extends Tuple {
  constructor (value?: Uint8Array) {
    super({
      sessionKey: SessionKey,
      index: U64
    }, value);
  }

  get index (): U64 {
    return this.get('index') as U64;
  }

  get sessionKey (): SessionKey {
    return this.get('sessionKey') as SessionKey;
  }
}

// Stored pending change for a Grandpa events
export default class StoredPendingChange extends Struct {
  constructor (value?: Uint8Array) {
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
