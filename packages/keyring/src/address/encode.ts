// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from './types';

// Original implementation: https://github.com/paritytech/polka-ui/blob/4858c094684769080f5811f32b081dd7780b0880/src/polkadot.js#L34

import bs58 from 'bs58';
import { assert, u8aConcat, u8aToBuffer, u8aToU8a } from '@plugnet/util';

import defaults from './defaults';
import sshash from './sshash';

export default function encode (_key: Uint8Array | string, prefix: Prefix = defaults.prefix): string {
  const key = u8aToU8a(_key);

  assert(defaults.allowedDecodedLengths.includes(key.length), `Expected a valid key to convert, with length ${defaults.allowedDecodedLengths}`);

  const isPublicKey = key.length === 32;

  const input = u8aConcat(new Uint8Array([prefix]), key);
  const hash = sshash(input);

  return bs58.encode(
    u8aToBuffer(
      u8aConcat(input, hash.subarray(0, isPublicKey ? 2 : 1))
    )
  );
}
