// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SignOptions } from '@polkadot/keyring/types';
import { IKeyringPair } from '../../types';

import { blake2AsU8a } from '@polkadot/util-crypto';

// a helper function for both types of payloads, Raw and metadata-known
export function sign (signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? blake2AsU8a(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}
