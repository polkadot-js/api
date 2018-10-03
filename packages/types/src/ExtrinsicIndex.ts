// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import U8aFixed from './codec/U8aFixed';

export default class ExtrinsicIndex extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 16);
  }
}
