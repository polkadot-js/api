// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from './codec/Struct';
import Bool from './Bool';
import USize from './USize';

const JSON_MAP = new Map([
  ['isSyncing', 'is_syncing'],
  ['shouldHavePeers', 'should_have_peers']
]);

/**
 * @name Health
 * @description
 * A system health indicator, reported back over RPC
 */
export default class Health extends Struct {
  constructor (value?: any) {
    super({
      peers: USize,
      isSyncing: Bool,
      shouldHavePeers: Bool
    }, value, JSON_MAP);
  }

  /**
   * @description The sync status
   */
  get isSyncing (): Bool {
    return this.get('isSyncing') as Bool;
  }

  /**
   * @description The numbers of peers as [[U32]]
   */
  get peers (): USize {
    return this.get('peers') as USize;
  }

  /**
   * @description Should this node have peers (not active on --dev)
   */
  get shouldHavePeers (): Bool {
    return this.get('shouldHavePeers') as Bool;
  }
}
