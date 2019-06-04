// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U128 from '../primitive/U128';

/**
 * @name Balance
 * @description
 * The Substrate Balance representation as a [[U128]].
 */
export default class Balance extends U128 {
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    // NOTE Balance we treat as a special case, don't return the base u128 - there
    // is typically special processing downstream, i.e. different inputs, it gets
    // treated as a primitive in this case
    return 'Balance';
  }
}

/**
 * @name BalanceOf
 * @description
 * The Substrate BalanceOf representation as a [[Balance]].
 */
export class BalanceOf extends Balance {
}
