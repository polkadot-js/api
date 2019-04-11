// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type Keypair = {
  publicKey: Uint8Array;
  secretKey: Uint8Array;
};

export type Seedpair = {
  publicKey: Uint8Array;
  seed: Uint8Array;
};

export type KeypairType = 'ed25519' | 'sr25519';
