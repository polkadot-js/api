// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U8aFixed from '../codec/U8aFixed';

/**
 * @name LockIdentifier
 * @description
 * The Substrate LockIdentifier for staking
 */
export default class LockIdentifier extends U8aFixed {
  public constructor (value?: any) {
    super(value, 64); // [u8; 8]
  }
}
