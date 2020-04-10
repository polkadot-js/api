// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { H256 } from '../interfaces/runtime';
import { Registry } from '../types';

import { isString, isU8a, u8aToU8a } from '@polkadot/util';

import Enum from '../codec/Enum';
import Bytes from './Bytes';

/** @internal */
function decodeDataU8a (registry: Registry, value: Uint8Array): [any, number | undefined] {
  if (!value.length) {
    return [undefined, undefined];
  }

  const indicator = value[0];

  if (indicator === 0) {
    return [null, 0];
  } else if (indicator >= 1 && indicator <= 33) {
    const length = indicator - 1;
    const data = value.subarray(1, length + 1);

    // in this case, we are passing a Raw back (since we have no length)
    return [registry.createType('Raw', data), 1];
  } else if (indicator >= 34 && indicator <= 37) {
    return [value.subarray(1, 32 + 1), indicator - 32]; // 34 becomes 2
  }

  throw new Error(`Unable to decode Data, invalid indicator byte ${indicator}`);
}

/** @internal */
function decodeData (registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string): [any, number | undefined] {
  if (!value) {
    return [undefined, undefined];
  } else if (isString(value)) {
    return decodeDataU8a(registry, u8aToU8a(value));
  } else if (isU8a(value)) {
    return decodeDataU8a(registry, value);
  }

  // assume we have an Enum or an  object input, handle this via the normal Enum decoding
  return [value, undefined];
}

/**
 * @name Data
 * @description
 * A [[Data]] container with node, raw or hashed data
 */
export default class Data extends Enum {
  constructor (registry: Registry, value?: Record<string, any> | Uint8Array | Enum | string) {
    super(registry, {
      None: 'Null', // 0
      Raw: 'Bytes', // 1
      // eslint-disable-next-line sort-keys
      BlakeTwo256: 'H256', // 2
      Sha256: 'H256', // 3
      // eslint-disable-next-line sort-keys
      Keccak256: 'H256', // 4
      ShaThree256: 'H256' // 5
    }, ...decodeData(registry, value));
  }

  get asRaw (): Bytes {
    return this._raw as Bytes;
  }

  get asSha256 (): H256 {
    return this._raw as H256;
  }

  get isRaw (): boolean {
    return this.index === 1;
  }

  get isSha256 (): boolean {
    return this.index === 3;
  }

  /**
   * @description The encoded length
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (): Uint8Array {
    if (this.index === 0) {
      return new Uint8Array(1);
    } else if (this.index === 1) {
      // don't add the length, just the data
      const data = this._raw.toU8a(true);
      const length = Math.min(data.length, 32);
      const u8a = new Uint8Array(length + 1);

      u8a.set([data.length + 1], 0);
      u8a.set(data.subarray(0, length), 1);

      return u8a;
    }

    // otherwise we simply have a hash
    const u8a = new Uint8Array(33);

    u8a.set([this.index + 32], 0);
    u8a.set(this._raw.toU8a(), 1);

    return u8a;
  }
}
