// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import CodecNumber from './base/Number';

export default class U32 extends CodecNumber {
  constructor (value?: BN | number) {
    super(value, 32);
  }
}
