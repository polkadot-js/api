// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicPayloadValue, IKeyringPair } from '../../types/index.js';

import { Enum } from '@polkadot/types-codec';

import { GenericExtrinsicPayloadV4 } from '../v4/ExtrinsicPayload.js';
import { signV5 } from '../util.js';

/**
 * @name GenericExtrinsicPayloadV5
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is
 * variable length based on the contents included
 */
export class GenericExtrinsicPayloadV5 extends GenericExtrinsicPayloadV4 {
  #signOptions: SignOptions;

  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | HexString) {
    super(registry, value);

    // Do detection for the type of extrinsic, in the case of MultiSignature
    // this is an enum, in the case of AnySignature, this is a Hash only
    // (which may be 64 or 65 bytes)
    this.#signOptions = {
      withType: registry.createTypeUnsafe('ExtrinsicSignature', []) instanceof Enum
    };
  }

  /**
   * @description Sign the payload with the keypair
   */
  public override sign (signerPair: IKeyringPair): Uint8Array {
    // NOTE The `toU8a({ method: true })` argument is absolutely critical, we
    // don't want the method (Bytes) to have the length prefix included. This
    // means that the data-as-signed is un-decodable, but is also doesn't need
    // the extra information, only the pure data (and is not decoded) ...
    // The same applies to V1..V3, if we have a V6, carry this comment
    return signV5(this.registry, signerPair, this.toU8a({ method: true }), this.#signOptions);
  }
}
