// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Bool from '../primitive/Bool';
import U64 from '../primitive/U64';

/**
 * @name Health
 * @description
 * A system health indicator, reported back over RPC
 */
export default class Health extends Struct {
  constructor (value?: any) {
    super({
      peers: U64,
      isSyncing: Bool,
      shouldHavePeers: Bool
    }, value);
  }

  /**
   * @description The sync status
   */
  get isSyncing (): Bool {
    return this.get('isSyncing') as Bool;
  }

  /**
   * @description The numbers of peers as [[U64]]
   */
  get peers (): U64 {
    return this.get('peers') as U64;
  }

  /**
   * @description Should this node have peers (not active on --dev)
   */
  get shouldHavePeers (): Bool {
    return this.get('shouldHavePeers') as Bool;
  }
}
