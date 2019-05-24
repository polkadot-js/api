// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import Hash from '../primitive/Hash';
import { KeyValueOption, KeyValueOptionValue } from '../type/KeyValue';

type StorageChangeSetValue = {
  block?: AnyU8a,
  changes?: Array<KeyValueOptionValue>
};

/**
 * @name StorageChangeSet
 * @description
 * A set of storage changes. It contains the [[Block]] hash and
 * a list of the actual changes that took place as an array of
 * [[KeyValueOption]]
 */
export default class StorageChangeSet extends Struct {
  constructor (value?: StorageChangeSetValue | Uint8Array) {
    super({
      block: Hash,
      changes: Vector.with(KeyValueOption)
    }, value);
  }

  /**
   * @description The applicable changes as [[KeyValueOption]]
   */
  get changes (): Vector<KeyValueOption> {
    return this.get('changes') as Vector<KeyValueOption>;
  }

  /**
   * @description The block [[Hash]]
   */
  get block (): Hash {
    return this.get('block') as Hash;
  }
}
