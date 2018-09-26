// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from './types';

import UInt from './codec/UInt';

export default class U128 extends UInt {
  constructor (value?: AnyNumber) {
    super(value, 128);
  }
}
