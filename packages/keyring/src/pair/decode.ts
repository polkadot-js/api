// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, stringToU8a, u8aFixLength } from '@plugnet/util';
import { naclDecrypt } from '@plugnet/util-crypto';
import { PairInfo } from './types';

import { NONCE_LENGTH, PKCS8_DIVIDER, PKCS8_HEADER, PUB_LENGTH, SEC_LENGTH, SEED_LENGTH } from './defaults';

const SEED_OFFSET = PKCS8_HEADER.length;

type DecodeResult = PairInfo & {
  secretKey: Uint8Array
};

export default function decode (passphrase?: string, _encrypted?: Uint8Array | null): DecodeResult {
  assert(_encrypted, `No encrypted data available to decode`);

  const encrypted = (_encrypted as Uint8Array);
  const encoded = passphrase
    ? (naclDecrypt(
        encrypted.subarray(NONCE_LENGTH),
        encrypted.subarray(0, NONCE_LENGTH),
        u8aFixLength(stringToU8a(passphrase), 256, true)
      ) as Uint8Array)
    : encrypted;

  assert(encoded, `Unable to unencrypt using the supplied passphrase`);

  const header = encoded.subarray(0, PKCS8_HEADER.length);

  assert(header.toString() === PKCS8_HEADER.toString(), 'Invalid Pkcs8 header found in body');

  let secretKey = encoded.subarray(SEED_OFFSET, SEED_OFFSET + SEC_LENGTH);
  let divOffset = SEED_OFFSET + SEC_LENGTH;
  let divider = encoded.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);

  // old-style, we have the seed here
  if (divider.toString() !== PKCS8_DIVIDER.toString()) {
    divOffset = SEED_OFFSET + SEED_LENGTH;
    secretKey = encoded.subarray(SEED_OFFSET, divOffset);
    divider = encoded.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);
  }

  assert(divider.toString() === PKCS8_DIVIDER.toString(), 'Invalid Pkcs8 divider found in body');

  const pubOffset = divOffset + PKCS8_DIVIDER.length;
  const publicKey = encoded.subarray(pubOffset, pubOffset + PUB_LENGTH);

  return {
    publicKey,
    secretKey
  };
}
