// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtrinsicEra, Hash, MultiLocation } from '@polkadot/types/interfaces';
import type { ExtrinsicPayloadValue, ICompact, INumber, IOption, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';

import { Struct } from '@polkadot/types-codec';
import { compactAddLength, isObject, objectSpread, u8aToHex } from '@polkadot/util';

import { EMPTY_U8A } from '../constants.js';
import { GeneralExtrinsicEncoded } from './GeneralExtrinsicEncoded.js';

interface GeneralExtValue {
  payload?: ExtrinsicPayloadValue;
  transactionExtensionVersion?: number;
}

export class GeneralExt extends Struct {
  #extTypes: string[];
  #extraTypes: string[];
  #version: number;
  #registry: Registry;
  constructor (registry: Registry, value?: GeneralExtValue) {
    const extTypes = registry.getSignedExtensionTypes();
    const extraTypes = registry.getSignedExtensionExtra();

    // Input ordering
    // TransactionExtensionVersion
    // Call data as method
    // Payload
    super(registry, objectSpread(
      {
        // eslint-disable-next-line sort-keys
        transactoinExtensionVersion: 'u8',
        // eslint-disable-next-line sort-keys
        method: 'Call'
      },
      extTypes,
      extraTypes
    ), GeneralExt.decodeExtrinsic(registry, value));

    this.#extTypes = Object.keys(extTypes);
    this.#extraTypes = Object.keys(extraTypes);
    this.#registry = registry;
    this.#version = 0b01000101; // Includes Preamble
  }

  // FIXME: isObject is not returning the correct structure for the keys
  public static decodeExtrinsic (registry: Registry, value?: GeneralExtValue) {
    if (!value) {
      return EMPTY_U8A;
    } else if (GeneralExtrinsicEncoded) {
      return value;
    } else if (isObject(value)) {
      const { payload, transactionExtensionVersion } = value;

      return objectSpread(payload || {}, {
        transactionExtensionVersion: transactionExtensionVersion || registry.getTransactionExtensionVersion()
      });
    }
    // TODO: Add decoding

    return {};
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

  public get version () {
    return this.#version;
  }

  public override toHex (isBare?: boolean): HexString {
    return u8aToHex(this.toU8a(isBare));
  }

  public override toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? this.encode()
      : compactAddLength(this.encode());
  }

  public override toRawType () {
    return 'GeneralExt';
  }

  public encode () {
    return super.toU8a({ method: true });
  }
}
