// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem } from '@polkadot/params/types';

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aFromString from '@polkadot/util/u8a/fromString';
import xxhash from '@polkadot/util-crypto/xxhash/asU8a';

import formatParams from './params';

export type Keygen = (...keyParams: Array<any>) => Uint8Array;

export default function bindKey <T> ({ isUnhashed, key, params }: SectionItem<T>): Keygen {
  const prefix = u8aFromString(key);

  return (...keyParams: Array<any>): Uint8Array => {
    const postfix = keyParams.length !== 0
      ? u8aConcat.apply(null, formatParams(params, keyParams))
      : new Uint8Array([]);
    const prefixedKey = u8aConcat(prefix, postfix);

    return isUnhashed
      ? prefixedKey
      : xxhash(prefixedKey, 128);
  };
}
