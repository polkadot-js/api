// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import { u8aToU8a } from '@polkadot/util';

import U8a from '../codec/U8a';

/**
 * @name ExtrinsicEra
 * @description
 * The era for an extrinsic, indicating either a mortal or immortal extrinsic
 */
export default class ExtrinsicEra extends U8a {
  constructor (value?: AnyU8a) {
    super(
      ExtrinsicEra.decodeExtrinsicEra(value)
    );
  }

  static decodeExtrinsicEra (value?: AnyU8a): Uint8Array {
    if (value) {
      const u8a = u8aToU8a(value);

      // If we have a zero byte, it is immortal (1 byte in length), otherwise we have
      // the era details following as another byte
      return u8a.subarray(0, (u8a[0] === 0) ? 1 : 2);
    }

    return new Uint8Array([0]);
  }
}
