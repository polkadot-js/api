// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from './types';

import Compact from './codec/Compact';

export default class Compact16 extends Compact {
  constructor (value?: AnyNumber) {
    super(value, 16, false);
  }
}
