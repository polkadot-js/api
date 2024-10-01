// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtrinsicEra, Hash, MultiLocation } from '@polkadot/types/interfaces';
import type { ExtrinsicPayloadValue, ICompact, INumber, IOption, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';

import { Struct } from '@polkadot/types-codec';
import { compactAddLength, compactFromU8a, hexToU8a, isHex, isObject, isU8a, objectSpread, u8aConcat, u8aToHex } from '@polkadot/util';

import { EMPTY_U8A } from '../constants.js';

interface GeneralExtValue {
  payload?: ExtrinsicPayloadValue;
  transactionExtensionVersion?: number;
}

function decodeU8a (u8a: Uint8Array) {
  if (!u8a.length) {
    return {};
  }

  const [offset, length] = compactFromU8a(u8a);
  const total = offset + length.toNumber();

  return {};
}

export class GeneralExt extends Struct {
  #version: number;

  constructor (registry: Registry, value?: GeneralExtValue | Uint8Array | HexString) {
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

    this.#version = 0b01000101; // Includes Preamble
  }

  // FIXME: isObject is not returning the correct structure for the keys
  public static decodeExtrinsic (registry: Registry, value?: GeneralExtValue | Uint8Array | HexString) {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GeneralExt) {
      return value;
    } else if (isU8a(value)) {
      return decodeU8a(value);
    } else if (isHex(value)) {
      return decodeU8a(hexToU8a(value));
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
    return u8aConcat(new Uint8Array([this.version]), super.toU8a({ method: true }));
  }
}
