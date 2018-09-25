// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Bytes from './codec/Bytes';
import Struct from './codec/Struct';

type KeyValueStruct = {
  key: Uint8Array,
  value: Uint8Array
};

// KeyValue structure. Since most of the keys and resultant values in Subtrate is
// hashed and/or encoded, this does not wrap a Text, but rather a Bytes
// for the keys and values. (Not to be confused with the KeyValue in Metadata, that
// is actually for Maps, whereas this is a representation of actaul storage values)
export default class KeyValue extends Struct {
  constructor (value: KeyValueStruct = {} as KeyValueStruct) {
    super({
      key: Bytes,
      value: Bytes
    }, value);
  }

  get key (): Bytes {
    return this.raw.key as Bytes;
  }

  get value (): Bytes {
    return this.raw.value as Bytes;
  }
}
