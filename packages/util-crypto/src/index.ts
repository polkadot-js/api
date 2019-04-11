// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import './polyfill';

import wasmCrypto from '@plugnet/wasm-crypto';

export * from './blake2';
export * from './keccak';
export * from './key';
export * from './mnemonic';
export * from './nacl';
export * from './random';
export * from './schnorrkel';
export * from './secp256k1';
export * from './sha512';
export * from './xxhash';

export function cryptoWaitReady (): Promise<boolean> {
  return wasmCrypto
    .waitReady()
    .then(() => true)
    .catch((error) => {
      console.error('Unable to initialize @polkadot/util-crypto', error);

      return false;
    });
}

// start init process immediately
cryptoWaitReady().catch(() => {
  // shouldn't happen, logged above
});
