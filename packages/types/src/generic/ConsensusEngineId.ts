// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '../interfaces/runtime';

import BN from 'bn.js';

import { bnToU8a, isAscii, u8aToHex, u8aToString } from '@polkadot/util';

import { Bytes } from '../primitive/Bytes';
import { u32 } from '../primitive/U32';

// there are all reversed since it is actually encoded as u32, LE,
// this means that FRNK has the bytes as KNRF
export const CID_AURA = 0x61727561; // 'aura'
export const CID_BABE = 0x45424142; // 'BABE'
export const CID_GRPA = 0x4b4e5246; // 'FRNK' (don't ask, used to be afg1)
export const CID_POW = 0x5f776f70; // 'pow_'

/**
 * @name GenericConsensusEngineId
 * @description
 * A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']
 */
export class GenericConsensusEngineId extends u32 {
  public static idToString (input: number | BN): string {
    const u8a = bnToU8a(input);

    return isAscii(u8a)
      ? u8aToString(u8a)
      : u8aToHex(u8a);
  }

  public static stringToId (input: string): number {
    return input
      .split('')
      .reverse()
      .reduce((result, char): number => (result * 256) + char.charCodeAt(0), 0);
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

  private _getAuraAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    return sessionValidators[
      this.registry.createType('RawAuraPreDigest', bytes.toU8a(true))
        .slotNumber
        .mod(new BN(sessionValidators.length))
        .toNumber()
    ];
  }

  private _getBabeAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    const digest = this.registry.createType('RawBabePreDigestCompat', bytes.toU8a(true));

    return sessionValidators[
      (digest.value as u32).toNumber()
    ];
  }

  private _getPowAuthor (bytes: Bytes): AccountId {
    return this.registry.createType('AccountId', bytes);
  }

  private _getH160Author (bytes: Bytes): AccountId {
    return this.registry.createType('AccountId', bytes);
  }

  /**
   * @description From the input bytes, decode into an author
   */
  public extractAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId | undefined {
    if (sessionValidators?.length) {
      if (this.isAura) {
        return this._getAuraAuthor(bytes, sessionValidators);
      } else if (this.isBabe) {
        return this._getBabeAuthor(bytes, sessionValidators);
      }
    }

    if (this.isPow) {
      return this._getPowAuthor(bytes);
    }

    // Moonbeam is neither Aura nor Babe nor Pow and uses h160 addresses
    if (bytes.length === 20) {
      return this._getH160Author(bytes);
    }

    return undefined;
  }

  /**
   * @description Override the default toString to return a 4-byte string
   */
  public toString (): string {
    return GenericConsensusEngineId.idToString(this as BN);
  }
}
