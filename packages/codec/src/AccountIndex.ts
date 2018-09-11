// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountIndex, AccountIndexDecoder } from './types';

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 64;

class AccountIndexImpl extends BaseNumber implements AccountIndex {
  constructor (value: BN | number) {
    super(value, BITLENGTH);
  }

  static fromJSON (input: any): AccountIndexImpl {
    return new AccountIndexImpl(
      BaseNumber.valueFromJSON(input, BITLENGTH)
    );
  }

  static fromU8a (input: Uint8Array): AccountIndexImpl {
    return new AccountIndexImpl(
      BaseNumber.valueFromU8a(input, BITLENGTH)
    );
  }
}

export default (AccountIndexImpl as AccountIndexDecoder);
