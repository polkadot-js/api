// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Struct from './codec/Struct';
import Vector from './codec/Vector';

import Extrinsic from './Extrinsic';
import Header from './Header';

// A block encoded with header and extrinsics
export default class Block extends Struct {
  constructor (value?: any) {
    super({
      header: Header,
      extrinsics: Vector.with(Extrinsic)
    }, value);
  }

  get extrinsics (): Vector<Extrinsic> {
    return this.raw.extrinsics as Vector<Extrinsic>;
  }

  get header (): Header {
    return this.raw.header as Header;
  }
}
