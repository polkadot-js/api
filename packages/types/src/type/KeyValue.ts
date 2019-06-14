// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import Option from '../codec/Option';
import Tuple from '../codec/Tuple';
import StorageData from '../primitive/StorageData';
import StorageKey from '../primitive/StorageKey';

type KeyValueValue = [AnyU8a, AnyU8a];

/**
 * @name KeyValue
 * @description
 * KeyValue structure. Since most of the keys and resultant values in Subtrate are
 * hashed and/or encoded, this does not wrap [[Text]], but rather a [[Bytes]]
 * for the keys and values. (Not to be confused with the KeyValue in [[Metadata]], that
 * is actually for Maps, whereas this is a representation of actual storage values)
 */
export default class KeyValue extends Tuple {
  constructor (value?: KeyValueValue | Uint8Array) {
    super({
      key: StorageKey,
      value: StorageData
    }, value);
  }

  /**
   * @description The [[StorageKey]]
   */
  get key (): StorageKey {
    return this[0] as StorageKey;
  }

  /**
   * @description The [[StorageData]]
   */
  get value (): StorageData {
    return this[1] as StorageData;
  }
}

export type KeyValueOptionValue = [AnyU8a, AnyU8a?];

/**
 * @name KeyValueOption
 * @description
 * A key/value change. This is similar to the [[KeyValue]] structure,
 * however in this case the value could be optional. Here it extends
 * from a [[Tuple]], indicating the use inside areas such as [[StorageChangeSet]]
 */
export class KeyValueOption extends Tuple {
  constructor (value?: KeyValueOptionValue | Uint8Array) {
    super({
      StorageKey,
      'Option<StorageData>': Option.with(StorageData)
    }, value);
  }

  /**
   * @description The [[StorageKey]]
   */
  get key (): StorageKey {
    return this[0] as StorageKey;
  }

  /**
   * @description The [[Option]] [[StorageData]]
   */
  get value (): Option<StorageData> {
    return this[1] as Option<StorageData>;
  }
}
