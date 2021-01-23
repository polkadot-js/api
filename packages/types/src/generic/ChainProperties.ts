// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Registry } from '../types';

import { isFunction, isNull, isUndefined } from '@polkadot/util';

import { Json } from '../codec/Json';
import { Option } from '../codec/Option';
import { Vec } from '../codec/Vec';
import { Text } from '../primitive/Text';
import { u8 } from '../primitive/U8';

function createType (registry: Registry, type: string, value: unknown, asArray = true): Codec {
  // We detect codec here as well - when found, generally this is constructed from itself
  return isFunction((value as Codec).toHuman)
    ? value as Codec
    : registry.createType(type as 'Option<u8>', asArray
      ? isNull(value)
        ? null
        : Array.isArray(value)
          ? value
          : [value]
      : value
    );
}

function decode (registry: Registry, value?: Map<string, unknown> | Record<string, unknown> | null): Record<string, unknown> {
  // allow decoding from a map as well (ourselves)
  const mapped = (
    value && (value as Map<string, unknown>).entries
      ? [...(value as Map<string, unknown>).entries()]
      : Object.entries(value || {})
  ).reduce((all: Record<string, unknown>, [key, value]) => {
    all[key] = key === 'ss58Format'
      ? createType(registry, 'Option<u8>', value, false)
      : key === 'tokenDecimals'
        ? createType(registry, 'Option<Vec<u8>>' as 'Vec<u8>', value)
        : key === 'tokenSymbol'
          ? createType(registry, 'Option<Vec<Text>>' as 'Vec<Text>', value)
          : value;

    return all;
  }, {});

  // fill in the defaults
  if (isUndefined(mapped.ss58Format)) {
    mapped.ss58Format = registry.createType('Option<u8>');
  }

  if (isUndefined(mapped.tokenDecimals)) {
    mapped.tokenDecimals = registry.createType('Option<Vec<u8>>' as 'Vec<u8>');
  }

  if (isUndefined(mapped.tokenSymbol)) {
    mapped.tokenSymbol = registry.createType('Option<Vec<Text>>' as 'Vec<Text>');
  }

  return mapped;
}

export class GenericChainProperties extends Json {
  constructor (registry: Registry, value?: Map<string, unknown> | Record<string, unknown> | null) {
    super(registry, decode(registry, value));
  }

  /**
   * @description The chain ss58Format
   */
  public get ss58Format (): Option<u8> {
    return this.get('ss58Format') as Option<u8>;
  }

  /**
   * @description The decimals for each of the tokens
   */
  public get tokenDecimals (): Option<Vec<u8>> {
    return this.get('tokenDecimals') as Option<Vec<u8>>;
  }

  /**
   * @description The symbols for the tokens
   */
  public get tokenSymbol (): Option<Vec<Text>> {
    return this.get('tokenSymbol') as Option<Vec<Text>>;
  }
}
