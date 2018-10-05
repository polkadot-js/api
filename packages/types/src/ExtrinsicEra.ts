// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import U8aFixed from './codec/U8aFixed';

// Description of a transaction era
// FIXME should be a enum?
export default class ExtrinsicEra extends U8aFixed {
  constructor (value?: AnyU8a) {
    // FIXME this actually indicates an Immortal (i.e. 1 byte)
    super(value, 8);
  }
}
