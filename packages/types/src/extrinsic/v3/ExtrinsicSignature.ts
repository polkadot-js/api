// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Call } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../types';

import { IMMORTAL_ERA } from '../constants';
import ExtrinsicSignatureV2 from '../v2/ExtrinsicSignature';
import ExtrinsicPayloadV3 from './ExtrinsicPayload';

/**
 * @name GenericExtrinsicSignatureV3
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV3 extends ExtrinsicSignatureV2 {
  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): IExtrinsicSignature {
    return this._injectSignature(
      this.registry.createType('Address', signer),
      this.registry.createType('Signature', signature),
      new ExtrinsicPayloadV3(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, { blockHash, era, genesisHash, nonce, runtimeVersion: { specVersion }, tip }: SignatureOptions): ExtrinsicPayloadV3 {
    return new ExtrinsicPayloadV3(this.registry, {
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      specVersion,
      tip: tip || 0
    });
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', account.publicKey);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('Signature', payload.sign(account));

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Generate a payload and applies a fake signature
   */
  public signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', address);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('Signature', new Uint8Array(64).fill(0x42));

    return this._injectSignature(signer, signature, payload);
  }
}
