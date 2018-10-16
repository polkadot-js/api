// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './codec/Base';

// Implements a type that does not contain anything (apart from `null`)
export default class Null extends Base<null> {
  constructor () {
    super(null);
  }

  byteLength (): number {
    return 0;
  }

  toJSON (): any {
    return null;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array();
  }

  toString (): string {
    return '';
  }
}
