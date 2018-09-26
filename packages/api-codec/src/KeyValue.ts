// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Struct from './codec/Struct';
import U8a from './codec/U8a';

import Bytes from './Bytes';

type KeyValueValue = {
  key?: U8a | Uint8Array | string,
  value?: U8a | Uint8Array | string
};

// KeyValue structure. Since most of the keys and resultant values in Subtrate is
// hashed and/or encoded, this does not wrap a Text, but rather a Bytes
// for the keys and values. (Not to be confused with the KeyValue in Metadata, that
// is actually for Maps, whereas this is a representation of actaul storage values)
export default class KeyValue extends Struct {
  constructor (value: KeyValueValue = {}) {
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
