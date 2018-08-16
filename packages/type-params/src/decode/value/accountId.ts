// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Decoded } from '../../types';

import encodeAddress from '@polkadot/util-keyring/address/encode';
import ExtError from '@polkadot/util/ext/error';
import u8aToHex from '@polkadot/util/u8a/toHex';

import u8a from './u8a';

export default function accountId (input: Uint8Array | null | undefined, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: input
    } as Param$Decoded;
  }

  const withoutPrefix = isStorage || version === 'poc-1';
  const offset = withoutPrefix ? 0 : 1;
  const length = withoutPrefix
    ? 256
    : (() => {
      const first = input[0];

      if (first <= 0xef) {
        return 1 * 8;
      } else if (first === 0xfc) {
        return 2 * 8;
      } else if (first === 0xfd) {
        return 4 * 8;
      } else if (first === 0xfe) {
        return 8 * 8;
      } else if (first === 0xff) {
        return 32 * 8;
      }

      throw new ExtError(`Invalid account index byte, 0x${first.toString(16)}`);
    })();

  const u8aDecoded = u8a(input, length, offset);
  const publicKey = u8aDecoded.value as Uint8Array;

  return {
    length: u8aDecoded.length,
    value: length === 256
      ? encodeAddress(publicKey)
      : u8aToHex(publicKey)
  };
}
