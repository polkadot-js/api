// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from './types';

// Implements a type that does not contain anything (apart from `null`)
export default class Null implements Codec {
  get encodedLength (): number {
    return 0;
  }

  toHex (): string {
    return '0x';
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
