// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';

import Struct from './codec/Struct';
import Vector from './codec/Vector';
import Extrinsic from './Extrinsic';
import Hash from './Hash';
import Header, { HeaderValue } from './Header';

export type BlockValue = {
  extrinsics?: Array<AnyU8a>
  header?: HeaderValue
};

// A block encoded with header and extrinsics
export default class Block extends Struct {
  constructor (value: BlockValue = {}) {
    super({
      header: Header,
      extrinsics: Vector.with(Extrinsic)
    }, value);
  }

  get extrinsics (): Vector<Extrinsic> {
    return this.raw.extrinsics as Vector<Extrinsic>;
  }

  // convenience, encodes the header and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2Asu8a(this.toU8a(), 256)
    );
  }

  get header (): Header {
    return this.raw.header as Header;
  }
}
