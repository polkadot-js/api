// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import U8aFixed from './codec/U8aFixed';

export default class MethodIndex extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 16);
  }

  get callIndex (): Uint8Array {
    return this.raw;
  }

  get methodIndex (): number {
    return this.callIndex[1];
  }

  get sectionIndex (): number {
    return this.callIndex[0];
  }
}
