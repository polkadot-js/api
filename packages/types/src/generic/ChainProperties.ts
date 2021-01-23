// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Registry } from '../types';

import { isFunction, isNull } from '@polkadot/util';

import { Json } from '../codec/Json';
import { Option } from '../codec/Option';
import { Vec } from '../codec/Vec';
import { Text } from '../primitive/Text';
import { u8 } from '../primitive/U8';

function createValue (registry: Registry, type: string, value: unknown, asArray = true): Codec {
  // We detect codec here as well - when found, generally this is constructed from itself
  if (isFunction((value as Codec).toHuman)) {
    return value as Codec;
  }

  return registry.createType(
    type as 'Option<u8>',
    asArray
      ? isNull(value)
        ? null
        : Array.isArray(value)
          ? value
          : [value]
      : value
  );
}

function decodeValue (registry: Registry, key: string, value: unknown): unknown {
  return key === 'ss58Format'
    ? createValue(registry, 'Option<u8>', value, false)
    : key === 'tokenDecimals'
      ? createValue(registry, 'Option<Vec<u8>>' as 'Vec<u8>', value)
      : key === 'tokenSymbol'
        ? createValue(registry, 'Option<Vec<Text>>' as 'Vec<Text>', value)
        : value;
}

function decode (registry: Registry, value?: Map<string, unknown> | Record<string, unknown> | null): Record<string, unknown> {
  return (
    // allow decoding from a map as well (ourselves)
    value && isFunction((value as Map<string, unknown>).entries)
      ? [...(value as Map<string, unknown>).entries()]
      : Object.entries(value || {})
  ).reduce((all: Record<string, unknown>, [key, value]) => {
    all[key] = decodeValue(registry, key, value);

    return all;
  }, {
    ss58Format: registry.createType('Option<u8>'),
    tokenDecimals: registry.createType('Option<Vec<u8>>' as 'Vec<u8>'),
    tokenSymbol: registry.createType('Option<Vec<Text>>' as 'Vec<Text>')
  });
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
