// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Long from './codec/Long';

export default class U8 extends Long {
  constructor (value?: Long | BN | string | number) {
    super(value, 8);
  }
}
