// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { Registry } from '@polkadot/types-codec/types';
import type { IKeyringPair } from '../types/index.js';
import type { SignV5Options } from './types.js';

// a helper function for both types of payloads, Raw and metadata-known
export function sign (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array {
  const encoded = u8a.length > 256
    ? registry.hash(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
}

// a helper function for both types of payloads, Raw and metadata-known
export function signV5 (registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignV5Options): Uint8Array {
  // if (options?.subVersionV5 === 'general') {
  //   return signerPair.sign(registry.hash(u8a), options);
  // } else {
  const encoded = u8a.length > 256
    ? registry.hash(u8a)
    : u8a;

  return signerPair.sign(encoded, options);
  // }
}
