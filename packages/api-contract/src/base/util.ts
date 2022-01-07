// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Bytes } from '@polkadot/types';
import { compactAddLength, u8aToU8a } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

export const EMPTY_SALT = new Uint8Array();

export function encodeSalt (salt: Uint8Array | string | null = randomAsU8a()): Uint8Array {
  return salt instanceof Bytes
    ? salt
    : salt && salt.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}
