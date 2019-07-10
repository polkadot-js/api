// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import StructAny from '../codec/StructAny';

/**
 * @name ChainProperties
 * @description
 * Wraps the properties retrieved from the chain via the `system.properties` RPC call.
 */
export default class ChainProperties extends StructAny {
  /**
   * @description The token decimals, if defined (de-facto standard only)
   */
  public get tokenDecimals (): number | undefined {
    return this.get('tokenDecimals');
  }

  /**
   * @description The token system, if defined (de-facto standard only)
   */
  public get tokenSymbol (): string | undefined {
    return this.get('tokenSymbol');
  }
}
