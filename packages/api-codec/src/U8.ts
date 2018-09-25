// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import UInt from './codec/UInt';

export default class U8 extends UInt {
  constructor (value?: UInt | BN | string | number) {
    super(value, 8);
  }
}
