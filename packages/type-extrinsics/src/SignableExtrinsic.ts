// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsic, Index, UncheckedExtrinsic } from '@polkadot/types/index';
import { KeyringPair } from '@polkadot/util-keyring/types';
import u8aConcat from '@polkadot/util/u8a/concat';

export default class SignableExtrinsic extends UncheckedExtrinsic {
  sign (sender: KeyringPair, nonce: Index): Extrinsic {
    // Prepend sender's publicKey and nonce
    const message = u8aConcat(
      sender.publicKey(),
      nonce.toU8a(),
      this.toU8a(true)
    );

    const signature = sender.sign(message);

    return new Extrinsic(
      u8aConcat(
        new Uint8Array([255]), // FIXME works, but why?
        message,
        signature
      )
    );
  }
}
