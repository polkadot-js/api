// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types';

import { isBn, isNumber, isString, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { Enum } from '../codec/Enum';
import { GenericAccountId } from './AccountId';
import { GenericAccountIndex } from './AccountIndex';

function decodeMultiU8a (registry: Registry, value?: unknown): unknown {
  if (isU8a(value) && value.length <= 32) {
    if (value.length === 32) {
      return { id: value };
    } else if (value.length === 20) {
      return { Address20: value };
    } else {
      return decodeMultiAny(registry, registry.createType('AccountIndex', value));
    }
  }

  return value;
}

function decodeMultiAny (registry: Registry, value?: unknown): unknown {
  if (value instanceof GenericMultiAddress) {
    return value;
  } else if (value instanceof GenericAccountId) {
    return { Id: value };
  } else if (value instanceof GenericAccountIndex || isNumber(value) || isBn(value)) {
    return { Index: registry.createType('Compact<AccountIndex>', value) };
  } else if (isString(value)) {
    return decodeMultiU8a(registry, decodeAddress(value.toString()));
  }

  return decodeMultiU8a(registry, value);
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
