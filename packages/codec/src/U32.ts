// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { U32, U32Decoder } from './types';

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 32;

class U32Impl extends BaseNumber implements U32 {
  constructor (value: BN | number) {
    super(value, BITLENGTH);
  }

  static fromJSON (input: any): U32Impl {
    return new U32Impl(
      BaseNumber.valueFromJSON(input, BITLENGTH)
    );
  }

  static fromU8a (input: Uint8Array): U32Impl {
    return new U32Impl(
      BaseNumber.valueFromU8a(input, BITLENGTH)
    );
  }
}

export default (U32Impl as U32Decoder);
