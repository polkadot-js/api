// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import Struct from './codec/Struct';
import Vector from './codec/Vector';
import Hash from './Hash';
import { KeyValueOption, KeyValueOptionValue } from './KeyValue';

type StorageChangeSetValue = {
  hash?: AnyU8a,
  changes?: Array<KeyValueOptionValue>
};

// A set of storage changes. It contains the hash/block and
// a list of the actual changes that took place
export default class StorageChangeSet extends Struct {
  constructor (value?: StorageChangeSetValue) {
    super({
      hash: Hash,
      changes: Vector.withVector(KeyValueOption)
    }, value);
  }

  get changes (): Vector<KeyValueOption> {
    return this.get('changes') as Vector<KeyValueOption>;
  }

  get hash (): Hash {
    return this.get('hash') as Hash;
  }
}
