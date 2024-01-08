// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes, u32 } from '@polkadot/types-codec';
import type { AnyU8a, Registry } from '@polkadot/types-codec/types';
import type { AccountId, RawAuraPreDigest, RawBabePreDigestCompat } from '../interfaces/index.js';

import { U8aFixed } from '@polkadot/types-codec';
import { BN, bnToU8a, isNumber, stringToU8a, u8aToHex, u8aToString } from '@polkadot/util';

export const CID_AURA = /*#__PURE__*/ stringToU8a('aura');
export const CID_BABE = /*#__PURE__*/ stringToU8a('BABE');
export const CID_GRPA = /*#__PURE__*/ stringToU8a('FRNK');
export const CID_POW = /*#__PURE__*/ stringToU8a('pow_');
export const CID_NMBS = /*#__PURE__*/ stringToU8a('nmbs');

function getAuraAuthor (registry: Registry, bytes: Bytes, sessionValidators: AccountId[]): AccountId {
  return sessionValidators[
    registry.createTypeUnsafe<RawAuraPreDigest>('RawAuraPreDigest', [bytes.toU8a(true)])
      .slotNumber
      .mod(new BN(sessionValidators.length))
      .toNumber()
  ];
}

function getBabeAuthor (registry: Registry, bytes: Bytes, sessionValidators: AccountId[]): AccountId {
  const digest = registry.createTypeUnsafe<RawBabePreDigestCompat>('RawBabePreDigestCompat', [bytes.toU8a(true)]);

  return sessionValidators[
    (digest.value as u32).toNumber()
  ];
}

function getBytesAsAuthor (registry: Registry, bytes: Bytes): AccountId {
  return registry.createTypeUnsafe('AccountId', [bytes]);
}

/**
 * @name GenericConsensusEngineId
 * @description
 * A 4-byte identifier identifying the engine
 */
export class GenericConsensusEngineId extends U8aFixed {
  constructor (registry: Registry, value?: AnyU8a) {
    super(
      registry,
      isNumber(value)
        ? bnToU8a(value, { isLe: false })
        : value,
      32
    );
  }

  /**
   * @description `true` if the engine matches aura
   */
  public get isAura (): boolean {
    return this.eq(CID_AURA);
  }

  /**
   * @description `true` is the engine matches babe
   */
  public get isBabe (): boolean {
    return this.eq(CID_BABE);
  }

  /**
   * @description `true` is the engine matches grandpa
   */
  public get isGrandpa (): boolean {
    return this.eq(CID_GRPA);
  }

  /**
   * @description `true` is the engine matches pow
   */
  public get isPow (): boolean {
    return this.eq(CID_POW);
  }

  /**
   * @description `true` is the engine matches nimbus
   */
  public get isNimbus (): boolean {
    return this.eq(CID_NMBS);
  }

  /**
   * @description From the input bytes, decode into an author
   */
  public extractAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId | undefined {
    if (sessionValidators?.length) {
      if (this.isAura) {
        return getAuraAuthor(this.registry, bytes, sessionValidators);
      } else if (this.isBabe) {
        return getBabeAuthor(this.registry, bytes, sessionValidators);
      }
    }

    // For pow & Nimbus, the bytes are the actual author
    if (this.isPow || this.isNimbus) {
      return getBytesAsAuthor(this.registry, bytes);
    }

    return undefined;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (): string {
    return this.toString();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'ConsensusEngineId';
  }

  /**
   * @description Override the default toString to return a 4-byte string
   */
  public override toString (): string {
    return this.isAscii
      ? u8aToString(this)
      : u8aToHex(this);
  }
}
