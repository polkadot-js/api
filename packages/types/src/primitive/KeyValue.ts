// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import Tuple from '../codec/Tuple';
import StorageData from './StorageData';
import StorageKey from './StorageKey';

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
  public constructor (value?: KeyValueValue | Uint8Array) {
    super({
      key: StorageKey,
      value: StorageData
    }, value);
  }

  /**
   * @description The [[StorageKey]]
   */
  public get key (): StorageKey {
    return this[0] as StorageKey;
  }

  /**
   * @description The [[StorageData]]
   */
  public get value (): StorageData {
    return this[1] as StorageData;
  }
}
