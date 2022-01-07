// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';

import { Enum } from '@polkadot/types-codec';
import { isBn, isNumber, isString, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { GenericAccountId } from './AccountId';
import { GenericAccountIndex } from './AccountIndex';

function decodeU8a (registry: CodecRegistry, u8a: Uint8Array): unknown {
  if ([0, 32].includes(u8a.length)) {
    return { Id: u8a };
  } else if (u8a.length === 20) {
    return { Address20: u8a };
  } else if (u8a.length <= 8) {
    return { Index: registry.createTypeUnsafe<GenericAccountIndex>('AccountIndex', [u8a]).toNumber() };
  }

  return u8a;
}

function decodeMultiAny (registry: CodecRegistry, value?: unknown): unknown {
  if (value instanceof GenericAccountId) {
    return { Id: value };
  } else if (isU8a(value)) {
    // NOTE This is after the AccountId check (which is U8a)
    return decodeU8a(registry, value);
  } else if (value instanceof GenericMultiAddress) {
    return value;
  } else if (value instanceof GenericAccountIndex || isBn(value) || isNumber(value)) {
    return { Index: isNumber(value) ? value : value.toNumber() };
  } else if (isString(value)) {
    return decodeU8a(registry, decodeAddress(value.toString()));
  }

  return value;
}

export class GenericMultiAddress extends Enum {
  constructor (registry: CodecRegistry, value?: unknown) {
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
  public override toString (): string {
    return this.value.toString();
  }
}
