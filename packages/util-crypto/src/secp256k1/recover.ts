// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import secp256k1 from 'secp256k1';
import { u8aToBuffer, u8aToU8a } from '@plugnet/util';

/**
 * @name secp256k1Recover
 * @description Recovers a publicKey from the supplied signature
 */
export default function secp256k1Recover (message: Uint8Array, signature: Uint8Array, recovery: number): Uint8Array {
  return u8aToU8a(
    secp256k1.recover(u8aToBuffer(message), u8aToBuffer(signature), recovery)
  );
}
