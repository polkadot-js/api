// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeypairType } from '@plugnet/util-crypto/types';
import { KeyringPair$Json, KeyringPair$Meta } from '../types';

import { u8aToHex } from '@plugnet/util';

import { encodeAddress } from '../address';

type PairStateJson = KeyringPair$Meta & {
  publicKey: Uint8Array
};

export default function toJson (type: KeypairType, { publicKey, meta }: PairStateJson, encoded: Uint8Array, isEncrypted: boolean): KeyringPair$Json {
  return {
    address: encodeAddress(publicKey),
    encoded: u8aToHex(encoded),
    encoding: {
      content: ['pkcs8', type],
      type: isEncrypted
        ? 'xsalsa20-poly1305'
        : 'none',
      version: '2'
    },
    meta
  };
}
