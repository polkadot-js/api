// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Decoded } from '../../types';

import encodeAddress from '@polkadot/util-keyring/address/encode';

import u8a from './u8a';

export default function accountId (input: Uint8Array | null, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  if (input === null) {
    return {
      length: 0
    } as Param$Decoded;
  }

  const u8aDecoded = u8a(input, 256, (isStorage || version === 'poc-1') ? 0 : 1);

  return {
    length: u8aDecoded.length,
    value: encodeAddress(u8aDecoded.value as Uint8Array)
  };
}
