// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import CodecNumber from './codec/Number';

export default class U64 extends CodecNumber {
  constructor (value?: CodecNumber | BN | string | number) {
    super(value, 64);
  }
}
