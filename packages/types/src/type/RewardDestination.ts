// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';

/**
 * @name RewardDestination
 * @description
 * A destination account for payment
 */
export default class RewardDestination extends Enum {
  public constructor (value?: any) {
    super([
      // Pay into the stash account, increasing the amount at stake accordingly.
      'Staked',
      // Pay into the stash account, not increasing the amount at stake.
      'Stash',
      // Pay into the controller account.
      'Controller'
    ], value);
  }
}
