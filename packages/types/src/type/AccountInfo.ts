// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Bytes from '../primitive/Bytes';
import u64 from '../primitive/u64';

/**
 * @name AccountInfo
 * @description
 * An Account information structure for contracts
 */
export default class AccountInfo extends Struct {
  constructor (value: any) {
    super({
      trieId: Bytes,
	    currentMemStored: u64
    }, value);
  }

  /**
   * @description The size of stored value in octet
   */
  get currentMemStored (): u64 {
    return this.get('currentMemStored') as u64;
  }

  /**
   * @description Unique ID for the subtree encoded as a byte
   */
  get trieId (): Bytes {
    return this.get('trieId') as Bytes;
  }
}
