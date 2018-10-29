// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import Struct from './codec/Struct';

import BlockNumber from './BlockNumber';
import Digest, { DigestItem } from './Digest';
import Hash from './Hash';

export type HeaderValue = {
  digest?: Digest | { logs: DigestItem[] },
  extrinsicsRoot?: AnyU8a,
  number?: AnyNumber,
  parentHash?: AnyU8a,
  stateRoot?: AnyU8a
};

// A block header.
export default class Header extends Struct {
  constructor (value?: HeaderValue | Uint8Array) {
    super({
      parentHash: Hash,
      number: BlockNumber,
      stateRoot: Hash,
      extrinsicsRoot: Hash,
      digest: Digest
    }, value);
  }

  get blockNumber (): BlockNumber {
    return this.get('number') as BlockNumber;
  }

  get digest (): Digest {
    return this.get('digest') as Digest;
  }

  get extrinsicsRoot (): Hash {
    return this.get('extrinsicsRoot') as Hash;
  }

  // convenience, encodes the header and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  get parentHash (): Hash {
    return this.get('parentHash') as Hash;
  }

  get stateRoot (): Hash {
    return this.get('stateRoot') as Hash;
  }
}
