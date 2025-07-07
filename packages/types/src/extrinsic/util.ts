// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { Registry } from '@polkadot/types-codec/types';
import type { IKeyringPair } from '../types/index.js';
import { blake2AsU8a } from '@polkadot/util-crypto';

// a helper function for both types of payloads, Raw and metadata-known
export function sign (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? blake2AsU8a(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}

export function signGeneral (registry: Registry, u8a: Uint8Array): Uint8Array {
  const encoded = blake2AsU8a(u8a);

  return encoded;
}
