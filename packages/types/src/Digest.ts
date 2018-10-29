// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import AuthorityId from './AuthorityId';
import Bytes from './Bytes';
import Hash from './Hash';
import Signature from './Signature';
import U32 from './U32';

class AuthoritiesChange extends Vector.with(AuthorityId) {
}

class ChangesTrieRoot extends Hash {
}

class Other extends Bytes {
}

class Seal extends Tuple {
  constructor (value: any) {
    super({
      slot: U32,
      signature: Signature
    }, value);
  }

  get signature (): Signature {
    return this.get('signature') as Signature;
  }

  get slot (): U32 {
    return this.get('slot') as U32;
  }
}

class DigestItem extends EnumType<AuthoritiesChange | ChangesTrieRoot | Other
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

export default class Digest extends Struct {
  constructor (value: any) {
    super({
      logs: Vector.with(DigestItem)
    }, value);
  }

  get logs (): Vector<DigestItem> {
    return this.get('logs') as Vector<DigestItem>;
  }
}
