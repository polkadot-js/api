// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import Bytes from './Bytes';
import U64 from './U64';

/**
 * @name AccountInfo
 * @description
 * An Account information structure for contracts
 */
export default class AccountInfo extends Struct {
  public constructor (value: any) {
    super({
      trieId: Bytes,
      currentMemStored: U64
    }, value);
  }

  /**
   * @description The size of stored value in octet
   */
  public get currentMemStored (): U64 {
    return this.get('currentMemStored') as U64;
  }

  /**
   * @description Unique ID for the subtree encoded as a byte
   */
  public get trieId (): Bytes {
    return this.get('trieId') as Bytes;
  }
}
