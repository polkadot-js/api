// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call, ExtrinsicEra, Hash, MultiLocation } from '@polkadot/types/interfaces';
import type { ExtrinsicPayloadValue, ICompact, INumber, IOption, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';

import { Struct } from '@polkadot/types-codec';
import { compactAddLength, compactFromU8a, isHex, isObject, isU8a, objectSpread, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import { EMPTY_U8A } from '../constants.js';

interface GeneralExtrinsicValue {
  payload?: ExtrinsicPayloadValue;
  transactionExtensionVersion?: number;
}

function decodeU8a (u8a: Uint8Array) {
  if (!u8a.length) {
    return new Uint8Array();
  }

  const [offset, length] = compactFromU8a(u8a);
  const total = offset + length.toNumber();

  if (total > u8a.length) {
    throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${u8a.length}`);
  }

  const data = u8a.subarray(offset, total);

  // 69 denotes 0b01000101 which is the version and preamble for this Extrinsic
  if (data[0] !== 69) {
    throw new Error(`Extrinsic: incorrect version for General Transactions, expected 5, found ${data[0] & 0b01111111}`);
  }

  return data.subarray(1);
}

export class GeneralExtrinsic extends Struct {
  #version: number;

  constructor (registry: Registry, value?: GeneralExtrinsicValue | Uint8Array | HexString) {
    const extTypes = registry.getSignedExtensionTypes();
    const extraTypes = registry.getSignedExtensionExtra();

    // Input ordering
    // TransactionExtensionVersion
    // Call data as method
    // Payload
    super(registry, objectSpread(
      {
        // eslint-disable-next-line sort-keys
        transactionExtensionVersion: 'u8'
        // eslint-disable-next-line sort-keys

      },
      extTypes,
      extraTypes,
      {
        method: 'Call'
      }
    ), GeneralExtrinsic.decodeExtrinsic(registry, value));

    // TODO check version and error if version !== 0b01000101 || 69
    this.#version = 0b01000101; // Includes Preamble
  }

  public static decodeExtrinsic (registry: Registry, value?: GeneralExtrinsicValue | Uint8Array | HexString) {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GeneralExtrinsic) {
      return value;
    } else if (isU8a(value) || Array.isArray(value) || isHex(value)) {
      return decodeU8a(u8aToU8a(value));
    } else if (isObject(value)) {
      const { payload, transactionExtensionVersion } = value;

      return objectSpread(payload || {}, {
        transactionExtensionVersion: transactionExtensionVersion || registry.getTransactionExtensionVersion()
      });
    }

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

  public get method (): Call {
    return this.getT('method');
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
    return u8aConcat(new Uint8Array([this.version]), super.toU8a());
  }
}
