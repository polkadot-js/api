// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';

import BN from 'bn.js';
import { isString, isU8a, u8aToU8a } from '@polkadot/util';

import Set from '../codec/Set';
import { createType } from '../create/createType';

/** @internal */
function decodeFields (registry: Registry, value?: any): any {
  if (isString(value)) {
    return decodeFields(registry, u8aToU8a(value.toString()));
  } else if (isU8a(value)) {
    return createType(registry, 'u64', value);
  }

  return value;
}

/**
 * @name IdentityFields
 * @description
 * Encoder/Decoder class fo registry IdentityFields
 */
export default class IdentityFields extends Set {
  constructor (registry: Registry, value?: any) {
    super(registry, {
      Display: new BN(0b0000000000000000000000000000000000000000000000000000000000000001),
      Legal: new BN(0b0000000000000000000000000000000000000000000000000000000000000010),
      Web: new BN(0b0000000000000000000000000000000000000000000000000000000000000100),
      Riot: new BN(0b0000000000000000000000000000000000000000000000000000000000001000),
      Email: new BN(0b0000000000000000000000000000000000000000000000000000000000010000),
      PgpFingerprint: new BN(0b0000000000000000000000000000000000000000000000000000000000100000),
      Image: new BN(0b0000000000000000000000000000000000000000000000000000000001000000),
      Twitter: new BN(0b0000000000000000000000000000000000000000000000000000000010000000)
    }, decodeFields(registry, value));
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 8;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (): Uint8Array {
    return createType(this.registry, 'u64', this.valueEncoded).toU8a();
  }
}
