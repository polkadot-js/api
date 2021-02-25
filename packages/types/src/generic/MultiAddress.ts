// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types';

import { isBn, isNumber, isString, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { Enum } from '../codec/Enum';
import { GenericAccountId } from './AccountId';
import { GenericAccountIndex } from './AccountIndex';

function decodeU8a (registry: Registry, u8a: Uint8Array): unknown {
  if ([0, 32].includes(u8a.length)) {
    return { Id: u8a };
  } else if (u8a.length === 20) {
    return { Address20: u8a };
  } else if (u8a.length <= 8) {
    return { Index: registry.createType('AccountIndex', u8a).toNumber() };
  }

  return u8a;
}

function decodeMultiAny (registry: Registry, value?: unknown): unknown {
  if (value instanceof GenericMultiAddress) {
    return value;
  } else if (value instanceof GenericAccountId) {
    return { Id: value };
  } else if (value instanceof GenericAccountIndex || isBn(value) || isNumber(value)) {
    return { Index: isNumber(value) ? value : value.toNumber() };
  } else if (isString(value)) {
    return decodeU8a(registry, decodeAddress(value.toString()));
  } else if (isU8a(value)) {
    return decodeU8a(registry, value);
  }

  return value;
}

export class GenericMultiAddress extends Enum {
  constructor (registry: Registry, value?: unknown) {
    super(registry, {
      Id: 'AccountId',
      Index: 'Compact<AccountIndex>',
      Raw: 'Bytes',
      // eslint-disable-next-line sort-keys
      Address32: 'H256',
      // eslint-disable-next-line sort-keys
      Address20: 'H160'
    }, decodeMultiAny(registry, value));
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.value.toString();
  }
}
