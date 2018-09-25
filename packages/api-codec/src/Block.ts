// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecArray from './codec/Array';
import CodecStruct from './codec/Struct';

import Extrinsic from './Extrinsic';
import Header from './Header';

// A block encoded with header and extrinsics
export default class Block extends CodecStruct {
  constructor (value?: any) {
    super({
      header: Header,
      extrinsics: CodecArray.with(Extrinsic)
    }, value);
  }

  get extrinsics (): CodecArray<Extrinsic> {
    return this.raw.extrinsics as CodecArray<Extrinsic>;
  }

  get header (): Header {
    return this.raw.header as Header;
  }
}
