// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';
import U8a from '../codec/U8a';

/**
 * @name NewAccountOutcome
 * @description
 * Enum to track the outcome for creation of an [[AccountId]]
 */
export default class NewAccountOutcome extends Enum {
  public constructor (index?: U8a | Uint8Array | number) {
    super([
      'NoHint',
      'GoodHint',
      'BadHint'
    ], index);
  }
}
