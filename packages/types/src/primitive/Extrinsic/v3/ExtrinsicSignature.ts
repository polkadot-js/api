// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';

import { createType } from '../../../codec/create';
import Call from '../../Generic/Call';
import { IMMORTAL_ERA } from '../constants';
import ExtrinsicSignatureV2 from '../v2/ExtrinsicSignature';
import ExtrinsicPayloadV3 from './ExtrinsicPayload';

/**
 * @name ExtrinsicSignatureV3
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV3 extends ExtrinsicSignatureV2 {
  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): IExtrinsicSignature {
    return this.injectSignature(
      createType('Address', signer),
      createType('Signature', signature),
      new ExtrinsicPayloadV3(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, { blockHash, era, genesisHash, nonce, tip }: SignatureOptions): IExtrinsicSignature {
    const signer = createType('Address', account.publicKey);
    const payload = new ExtrinsicPayloadV3({
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      tip: tip || 0
    });
    const signature = createType('Signature', payload.sign(account));

    return this.injectSignature(signer, signature, payload);
  }
}
