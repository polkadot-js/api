// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import CodecU8a from './U8a';
import Length from './Length';

// A CodecBytes. The significant difference between this and a normal Uint8Array is that
// this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in String and Array)
export default class CodecBytes extends CodecU8a {
  protected _length: Length;

  constructor (value: CodecU8a | Uint8Array = new Uint8Array()) {
    super(
      value instanceof CodecU8a
        ? value.raw
        : value
    );

    this._length = new Length(value.length);
  }

  byteLength (): number {
    return this._length.byteLength() +
      this._length.toNumber();
  }

  fromJSON (input: any): CodecBytes {
    super.fromJSON(input);

    this._length.setValue(this.raw.length);

    return this;
  }

  fromU8a (input: Uint8Array): CodecBytes {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    super.fromU8a(input.subarray(offset, offset + length));

    return this;
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      this.raw
    );
  }
}
