// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Enum from './codec/Enum';

export default class VoteThreshold extends Enum {
  constructor (index?: number) {
    super([
      'Super majority approval',
      'Super majority rejection',
      'Simple majority'
    ], index);
  }
}
