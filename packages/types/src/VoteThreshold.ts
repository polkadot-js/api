// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Enum from './codec/Enum';
import U8a from './codec/U8a';

// Voting threshold, used inside proposals to set change the voting tally
export default class VoteThreshold extends Enum {
  constructor (index?: number | Uint8Array | U8a) {
    super([
      'Super majority approval',
      'Super majority rejection',
      'Simple majority'
    ], index);
  }
}
