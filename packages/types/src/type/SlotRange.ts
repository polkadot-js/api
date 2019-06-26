// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';

/**
 * @name SlotRange
 * @description
 * A compactly represented sub-range from the series (0, 1, 2, 3).
 */
export default class SlotRange extends Enum {
  constructor (value?: any) {
    super([
      /// Sub range from index 0 to index 0 inclusive.
      'ZeroZero', // 0
      /// Sub range from index 0 to index 1 inclusive.
      'ZeroOne', // 1,
      /// Sub range from index 0 to index 2 inclusive.
      'ZeroTwo', // 2,
      /// Sub range from index 0 to index 3 inclusive.
      'ZeroThree', // 3,
      /// Sub range from index 1 to index 1 inclusive.
      'OneOne', // 4,
      /// Sub range from index 1 to index 2 inclusive.
      'OneTwo', // 5,
      /// Sub range from index 1 to index 3 inclusive.
      'OneThree', // 6,
      /// Sub range from index 2 to index 2 inclusive.
      'TwoTwo', // 7,
      /// Sub range from index 2 to index 3 inclusive.
      'TwoThree', // 8,
      /// Sub range from index 3 to index 3 inclusive.
      'ThreeThree' // 9,     // == SLOT_RANGE_COUNT - 1
    ], value);
  }
}
