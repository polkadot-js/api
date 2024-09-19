// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Address, Call, ExtrinsicSignature } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicPayloadValue, IExtrinsicSignature, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicSignatureOptions } from '../types.js';

import { isUndefined, objectSpread } from '@polkadot/util';

import { IMMORTAL_ERA } from '../constants.js';
import { GenericExtrinsicSignatureV4, toAddress } from '../v4/ExtrinsicSignature.js';
import { GenericExtrinsicPayloadV5 } from '../v5/ExtrinsicPayload.js';

export class GenericExtrinsicSignatureV5 extends GenericExtrinsicSignatureV4 {
  #signKeys: string[];

  constructor (registry: Registry, value?: GenericExtrinsicSignatureV4 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    const signTypes = registry.getSignedExtensionTypes();

    super(registry, value, { isSigned });

    this.#signKeys = Object.keys(signTypes);
  }

  protected override _injectSignature (signer: Address, signature: ExtrinsicSignature, payload: GenericExtrinsicPayloadV5): IExtrinsicSignature {
    // use the fields exposed to guide the getters
    for (let i = 0, count = this.#signKeys.length; i < count; i++) {
      const k = this.#signKeys[i];
      const v = payload.get(k);

      if (!isUndefined(v)) {
        this.set(k, v);
      }
    }

    // additional fields (exposed in struct itself)
    this.set('signer', signer);
    this.set('signature', signature);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  public override addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicSignature {
    return this._injectSignature(
      toAddress(this.registry, signer),
      this.registry.createTypeUnsafe('ExtrinsicSignature', [signature]),
      new GenericExtrinsicPayloadV5(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public override createPayload (method: Call, options: SignatureOptions): GenericExtrinsicPayloadV5 {
    const { era, runtimeVersion: { specVersion, transactionVersion } } = options;

    return new GenericExtrinsicPayloadV5(this.registry, objectSpread<ExtrinsicPayloadValue>({}, options, {
      era: era || IMMORTAL_ERA,
      method: method.toHex(),
      specVersion,
      transactionVersion
    }));
  }
}
