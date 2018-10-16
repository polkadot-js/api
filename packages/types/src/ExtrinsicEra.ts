// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import toU8a from '@polkadot/util/u8a/toU8a';

import U8a from './codec/U8a';

export default class ExtrinsicEra extends U8a {
  constructor (value?: AnyU8a) {
    super(
      ExtrinsicEra.decodeExtrinsicEra(value)
    );
  }

  static decodeExtrinsicEra (value?: AnyU8a): Uint8Array {
    if (value instanceof U8a) {
      return value.raw;
    } else if (value) {
      const u8a = toU8a(value);

      // If we have a zero byte, it is immortal (1 byte in length), otherwise we have
      // the era details following as another byte
      return u8a.subarray(0, (u8a[0] === 0) ? 1 : 2);
    }

    return new Uint8Array([0]);
  }

  fromU8a (input: Uint8Array): ExtrinsicEra {
    super.fromU8a(ExtrinsicEra.decodeExtrinsicEra(input));

    return this;
  }
}
