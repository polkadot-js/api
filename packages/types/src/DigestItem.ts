// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AuthorityId from './AuthorityId';
import Bytes from './Bytes';
import EnumType from './codec/EnumType';
import Hash from './Hash';
import Vector from './codec/Vector';

export class AuthoritiesChange extends Vector.with(AuthorityId) {
}

export class ChangesTrieRoot extends Hash {
}

export class Other extends Bytes {
}

export default class DigestItem extends EnumType<AuthoritiesChange | ChangesTrieRoot | Other> {
  constructor (value: any) {
    super({
      0: AuthoritiesChange,
      1: ChangesTrieRoot,
      2: Other
    }, value);
  }
}
