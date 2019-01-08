// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from './codec/Struct';
import Bool from './Bool';
import U32 from './U32';

const JSON_MAP = new Map([
  ['isSyncing', 'is_syncing']
]);

export default class Health extends Struct {
  constructor (value?: any) {
    super({
      peers: U32,
      isSyncing: Bool
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
  get peers (): U32 {
    return this.get('peers') as U32;
  }
}
