// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BaseHash from './base/Hash';

const BITLENGTH = 512;

export default class H512 extends BaseHash {
  constructor (value?: Uint8Array) {
    super(value, BITLENGTH);
  }
}
