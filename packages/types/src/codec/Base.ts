// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { logger } from '@polkadot/util';

export const l = logger('codec');

// The actual base class for any type. As it stands, this should not be used on it's own,
// so we expose the interface, but throw on anything. This allows subclasses to actaully
// only implement part (things that are unused/unexpected should just error-out)
//
// TODO
//   - This could probably be abstract, as long as we have the functions abstract as well
//   - Not convinced about abstract - there are a number of extensions to this class that
//     don't provide some implementations (e.g. Length, good example and should not be
//     used-as-is). In those case it just relies in the throw in here.
export default class Base<T = any> {
  raw: T;

  constructor (value?: any) {
    this.raw = value;
  }

  get encodedLength (): number {
    throw new Error('Base::encodedLength: unimplemented');
  }

  toJSON (): any {
    throw new Error('Base::toJSON: unimplemented');
  }

  toString (): string {
    throw new Error('Base::toString: unimplemented');
  }

  toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Base::toU8a: unimplemented');
  }
}
