// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IKeyringPair } from '../../types';

import { sign } from '../util';
import ExtrinsicPayloadV4 from '../v4/ExtrinsicPayload';

/**
 * @name GenericExtrinsicPayloadV3
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class ExtrinsicPayloadV3 extends ExtrinsicPayloadV4 {
  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(this.registry, signerPair, this.toU8a({ method: true }));
  }
}
