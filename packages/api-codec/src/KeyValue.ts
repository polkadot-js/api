// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import Option from './codec/Option';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import StorageData from './StorageData';
import StorageKey from './StorageKey';

type KeyValueValue = {
  key?: AnyU8a,
  value?: AnyU8a
};

// KeyValue structure. Since most of the keys and resultant values in Subtrate is
// hashed and/or encoded, this does not wrap a Text, but rather a Bytes
// for the keys and values. (Not to be confused with the KeyValue in Metadata, that
// is actually for Maps, whereas this is a representation of actaul storage values)
export default class KeyValue extends Struct {
  constructor (value?: KeyValueValue) {
    super({
      key: StorageKey,
      value: StorageData
    }, value);
  }

  get key (): StorageKey {
    return this.raw.key as StorageKey;
  }

  get value (): StorageData {
    return this.raw.value as StorageData;
  }
}

export type KeyValueOptionValue = {
  key?: AnyU8a,
  value?: AnyU8a
};

// A key/value change. This is similar to the KeyValue structure,
// however in this case the value could be optional. Here it extends
// from a Tuple, indicating the use inside areas such as StorageChangeSet
export class KeyValueOption extends Tuple {
  constructor (value?: KeyValueOptionValue) {
    super({
      key: StorageKey,
      value: Option.with(StorageData)
    }, value);
  }

  get key (): StorageKey {
    return this.raw.key as StorageKey;
  }

  get value (): Option<StorageData> {
    return this.raw.value as Option<StorageData>;
  }
}
