// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MultiLocation } from '@polkadot/types/interfaces';
import type { ExtrinsicEra } from '../../interfaces/extrinsics/index.js';
import type { Call, Hash } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, ICompact, INumber, IOption, Registry, SignatureOptions as EncodingOptions } from '../../types/index.js';

import { Struct } from '@polkadot/types-codec';
import { isUndefined, objectProperties, objectSpread } from '@polkadot/util';

import { EMPTY_U8A, IMMORTAL_ERA } from '../constants.js';
import { GenericExtrinsicPayloadV5 } from './ExtrinsicPayload.js';

export class GeneralExtrinsicEncoded extends Struct {
  #signKeys: string[];
  #transactionExtensionVersion: number;

  constructor (registry: Registry, value?: GeneralExtrinsicEncoded | Uint8Array) {
    const signTypes = registry.getSignedExtensionTypes();
    const signedVersion = registry.getTransactionExtensionVersion();

    super(
      registry,
      objectSpread(
        { transactionExtensionVersion: 'u8' },
        signTypes
      ),
      GeneralExtrinsicEncoded.decodeExtrinsicSignature(value)
    );

    this.#transactionExtensionVersion = signedVersion;
    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value?: GeneralExtrinsicEncoded | Uint8Array): GeneralExtrinsicEncoded | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GeneralExtrinsicEncoded) {
      return value;
    }

    return value
  }

  public override get encodedLength (): number {
    return super.encodedLength;
  }

  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  public get mode (): INumber {
    return this.getT('mode');
  }

  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }

  protected _buildEncoded (payload: GenericExtrinsicPayloadV5) {
    for (let i = 0, count = this.#signKeys.length; i < count; i++) {
      const k = this.#signKeys[i];
      const v = payload.get(k);

      if (k === 'transactionExtensionVersion') {
        this.set(k, this.registry.createType('u8', this.#transactionExtensionVersion));
      } else if (!isUndefined(v)) {
        this.set(k, v);
      }
    }

    return this;
  }

  public createPayload (method: Call, options: EncodingOptions): GenericExtrinsicPayloadV5 {
    const { era, runtimeVersion: { specVersion, transactionVersion } } = options;

    return new GenericExtrinsicPayloadV5(this.registry, objectSpread<ExtrinsicPayloadValue>({}, options, {
      era: era || IMMORTAL_ERA,
      method: method.toHex(),
      specVersion,
      transactionVersion
    }));
  }

  public encode (method: Call, options: EncodingOptions) {
    const payload = this.createPayload(method, options);

    return this._buildEncoded(
      payload
    );
  }

  public override toU8a (isBare?: boolean): Uint8Array {
    return super.toU8a(isBare);
  }
}
