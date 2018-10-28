// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import Struct from './codec/Struct';
import Extrinsics from './Extrinsics';
import Hash from './Hash';
import Header, { HeaderValue } from './Header';

export type BlockValue = {
  extrinsics?: Array<AnyU8a>
  header?: HeaderValue
};

// A block encoded with header and extrinsics
export default class Block extends Struct {
  constructor (value?: BlockValue | Uint8Array) {
    super({
      header: Header,
      extrinsics: Extrinsics
    }, value);
  }

  get extrinsics (): Extrinsics {
    return this.get('extrinsics') as Extrinsics;
  }

  // convenience, encodes the header and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  get header (): Header {
    return this.get('header') as Header;
  }
}
