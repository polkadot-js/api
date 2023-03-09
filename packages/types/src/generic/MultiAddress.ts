// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Inspect, Registry } from '@polkadot/types-codec/types';

import { Enum } from '@polkadot/types-codec';
import { isBn, isNumber, isString, isU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { GenericAccountId } from './AccountId.js';
import { GenericAccountIndex } from './AccountIndex.js';

function decodeU8a (registry: Registry, u8a: Uint8Array): unknown {
  if ([0, 32].includes(u8a.length)) {
    return { Id: u8a };
  } else if (u8a.length === 20) {
    return { Address20: u8a };
  } else if (u8a.length <= 8) {
    return { Index: registry.createTypeUnsafe<GenericAccountIndex>('AccountIndex', [u8a]).toNumber() };
  }

  return u8a;
}

function decodeMultiAny (registry: Registry, value?: unknown): unknown {
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
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  override inspect (): Inspect {
    const { inner, outer = [] } = this.inner.inspect();

    return {
      inner,
      outer: [new Uint8Array([this.index]), ...outer]
    };
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return this.value.toString();
  }
}
