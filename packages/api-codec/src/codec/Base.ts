// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// The actual base class for any type. As it stands, this should not be used on it's own,
// so we expose the interface, but throw on anything. This allows subclasses to actaully
// only implement part (things that are unused/unexpected should just error-out)
//
// TODO
//   - This could probably be abstract, as long as we have the functions abstract as well
export default class CodecBase <T = any> {
  raw: T;

  constructor (value?: any) {
    this.raw = value;
  }

  byteLength (): number {
    throw new Error('CodecBase::byteLength: unimplemented');
  }

  fromJSON (input: any): CodecBase <T> {
    throw new Error('CodecBase::fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): CodecBase <T> {
    throw new Error('CodecBase::fromU8a: unimplemented');
  }

  toJSON (): any {
    throw new Error('CodecBase::toJSON: unimplemented');
  }

  toString (): string {
    throw new Error('CodecBase::toString: unimplemented');
  }

  toU8a (): Uint8Array {
    throw new Error('CodecBase::toU8a: unimplemented');
  }
}
