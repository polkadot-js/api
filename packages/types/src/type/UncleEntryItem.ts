// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BlockNumber from './BlockNumber';
import Enum from '../codec/Enum';
import Tuple from '../codec/Tuple';
import Option from '../codec/Option';
import AccountId from '../primitive/AccountId';
import Hash from '../primitive/Hash';

/**
 * @name InclusionHeight
 */
export class InclusionHeight extends BlockNumber {
}

/**
 * @name Uncle
 */
export class Uncle extends Tuple {
  constructor (value: any) {
    super({
      hash: Hash,
      author: Option.with(AccountId)
    }, value);
  }
}

/**
 * @name UncleEntryItem
 *
 * @description Information about an uncle to include
 */
export default class UncleEntryItem extends Enum {
  constructor (value?: any) {
    super({
      InclusionHeight,
      Uncle
    }, value);
  }
}
