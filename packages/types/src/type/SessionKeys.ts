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
  constructor (value?: any) {
    super({
      grandpaKey: SessionKey,
      auraKey: SessionKey
    }, value);
  }

  /**
   * @description The Aura session
   */
  get auraKey (): SessionKey {
    return this.get('auraKey') as SessionKey;
  }

  /**
   * @description The Grandpa Authority
   */
  get grandpaKey (): SessionKey {
    return this.get('grandpaKey') as SessionKey;
  }
}
