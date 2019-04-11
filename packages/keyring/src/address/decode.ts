// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from './types';

// Original implementation: https://github.com/paritytech/polka-ui/blob/4858c094684769080f5811f32b081dd7780b0880/src/polkadot.js#L6

import bs58 from 'bs58';
import { assert, bufferToU8a, isHex, isU8a, u8aToU8a } from '@plugnet/util';

import defaults from './defaults';
import sshash from './sshash';

export default function decode (encoded: string | Uint8Array, ignoreChecksum?: boolean, prefix: Prefix = defaults.prefix): Uint8Array {
  if (isU8a(encoded) || isHex(encoded)) {
    return u8aToU8a(encoded);
  }

  const decoded = bufferToU8a(bs58.decode(encoded));
  const error = (message: string) =>
    `Decoding ${encoded}: ${message}`;

  // assert(defaults.allowedPrefix.includes(decoded[0] as Prefix), error('Invalid decoded address prefix'));
  assert(defaults.allowedEncodedLengths.includes(decoded.length), error('Invalid decoded address length'));

  // TODO Unless it is an "use everywhere" prefix, throw an error
  // if (decoded[0] !== prefix) {
  //   console.log(`WARN: Expected ${prefix}, found ${decoded[0]}`);
  // }

  const isPublicKey = decoded.length === 35;

  // non-publicKeys has 1 byte checksums, else default to 2
  const endPos = decoded.length - (isPublicKey ? 2 : 1);

  // calculate the hash and do the checksum byte checks
  const hash = sshash(decoded.subarray(0, endPos));
  const checks = isPublicKey
    ? decoded[decoded.length - 2] === hash[0] && decoded[decoded.length - 1] === hash[1]
    : decoded[decoded.length - 1] === hash[0];

  assert(ignoreChecksum || checks, error('Invalid decoded address checksum'));

  return decoded.slice(1, endPos);
}
