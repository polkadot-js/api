// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import SessionKey from './SessionKey';

/**
 * @name SessionKeys
 * @description
 * Wrapper for the session and authority ids
 */
export default class SessionKeys extends Struct {
  public constructor (value?: any) {
    super({
      ed25519: SessionKey
    }, value);
  }

  /**
   * @description The Aura session
   */
  public get ed25519 (): SessionKey {
    return this.get('ed25519') as SessionKey;
  }
}
