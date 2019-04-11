// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Option from '../codec/Option';
import Struct from '../codec/Struct';
import Bytes from '../primitive/Bytes';
import Null from '../primitive/Null';
import U32 from '../primitive/U32';

class PrefabWasmModuleReserved extends Option<Null> {
}

/**
 * @name PrefabWasmModule
 * @description Struct to encode the vesting schedule of an individual account
 */
export default class PrefabWasmModule extends Struct {
  constructor (value?: any) {
    super({
      scheduleVersion: Compact.with(U32),
      initial: Compact.with(U32),
      maximum: Compact.with(U32),
      _reserved: PrefabWasmModuleReserved,
      code: Bytes
    }, value);
  }

  /**
   * @description The code as [[Bytes]]
   */
  get code (): Bytes {
    return this.get('code') as Bytes;
  }

  /**
   * @description The initial as [[Compact]]
   */
  get initial (): Compact {
    return this.get('initial') as Compact;
  }

  /**
   * @description The maximum as [[Compact]]
   */
  get maximum (): Compact {
    return this.get('maximum') as Compact;
  }

  /**
   * @description The scheduleVersion value as [[Compact]]
   */
  get scheduleVersion (): Compact {
    return this.get('scheduleVersion') as Compact;
  }
}
