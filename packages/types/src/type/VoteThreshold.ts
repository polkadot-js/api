// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';

/**
 * @name VoteThreshold
 * @description
 * Voting threshold, used inside proposals to set change the voting tally
 */
export default class VoteThreshold extends Enum {
  constructor (index?: number | Uint8Array) {
    super([
      'Super majority approval',
      'Super majority rejection',
      'Simple majority'
    ], index);
  }
}
