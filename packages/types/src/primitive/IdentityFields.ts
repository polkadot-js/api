// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';

import BN from 'bn.js';

import Set from '../codec/Set';

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
    }, value, 64);
  }
}
