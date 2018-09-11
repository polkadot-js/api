// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockNumber, BlockNumberDecoder } from './types';

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 64;

class BlockNumberImpl extends BaseNumber implements BlockNumber {
  constructor (value: BN | number) {
    super(value, BITLENGTH);
  }

  static fromJSON (input: any): BlockNumberImpl {
    return new BlockNumberImpl(
      BaseNumber.valueFromJSON(input, BITLENGTH)
    );
  }

  static fromU8a (input: Uint8Array): BlockNumberImpl {
    return new BlockNumberImpl(
      BaseNumber.valueFromU8a(input, BITLENGTH)
    );
  }
}

export default (BlockNumberImpl as BlockNumberDecoder);
