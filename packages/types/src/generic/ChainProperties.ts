// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { Codec } from '../types';

import { Json, Option, Text, u32, Vec } from '@polkadot/types-codec';
import { isFunction, isNull, isUndefined } from '@polkadot/util';

function createValue (registry: CodecRegistry, type: string, value: unknown, asArray = true): Option<Codec> {
  // We detect codec here as well - when found, generally this is constructed from itself
  if (value && isFunction((value as Option<Codec>).unwrapOrDefault)) {
    return value as Option<Codec>;
  }

  return registry.createTypeUnsafe<Option<u32>>(
    type,
    [
      asArray
        ? isNull(value) || isUndefined(value)
          ? null
          : Array.isArray(value)
            ? value
            : [value]
        : value
    ]
  );
}

function decodeValue (registry: CodecRegistry, key: string, value: unknown): unknown {
  return key === 'ss58Format'
    ? createValue(registry, 'Option<u32>', value, false)
    : key === 'tokenDecimals'
      ? createValue(registry, 'Option<Vec<u32>>' as 'Vec<u32>', value)
      : key === 'tokenSymbol'
        ? createValue(registry, 'Option<Vec<Text>>' as 'Vec<Text>', value)
        : value;
}

function decode (registry: CodecRegistry, value?: Map<string, unknown> | Record<string, unknown> | null): Record<string, unknown> {
  return (
    // allow decoding from a map as well (ourselves)
    value && isFunction((value as Map<string, unknown>).entries)
      ? [...(value as Map<string, unknown>).entries()]
      : Object.entries(value || {})
  ).reduce((all: Record<string, unknown>, [key, value]) => {
    all[key] = decodeValue(registry, key, value);

    return all;
  }, {
    ss58Format: registry.createTypeUnsafe('Option<u32>', []),
    tokenDecimals: registry.createTypeUnsafe('Option<Vec<u32>>', []),
    tokenSymbol: registry.createTypeUnsafe('Option<Vec<Text>>', [])
  });
}

export class GenericChainProperties extends Json {
  constructor (registry: CodecRegistry, value?: Map<string, unknown> | Record<string, unknown> | null) {
    super(registry, decode(registry, value));
  }

  /**
   * @description The chain ss58Format
   */
  public get ss58Format (): Option<u32> {
    return this.getT('ss58Format');
  }

  /**
   * @description The decimals for each of the tokens
   */
  public get tokenDecimals (): Option<Vec<u32>> {
    return this.getT('tokenDecimals');
  }

  /**
   * @description The symbols for the tokens
   */
  public get tokenSymbol (): Option<Vec<Text>> {
    return this.getT('tokenSymbol');
  }
}
