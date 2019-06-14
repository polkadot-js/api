// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import AuthorityId from './AuthorityId';
import SessionKey from './SessionKey';

/**
 * @name SessionKeys
 * @description
 * Wrapper for the session and authority ids
 */
export default class SessionKeys extends Struct {
  constructor (value?: any) {
    super({
      authorityId: AuthorityId,
      sessionKey: SessionKey
    }, value);
  }

  /**
   * @description The Grandpa Authority
   */
  get authorityId (): AuthorityId {
    return this.get('authorityId') as AuthorityId;
  }

  /**
   * @description The Aura session
   */
  get sessionKey (): SessionKey {
    return this.get('sessionKey') as SessionKey;
  }
}
