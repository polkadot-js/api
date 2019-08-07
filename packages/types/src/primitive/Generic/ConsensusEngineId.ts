// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '../../interfaces/runtime';

import BN from 'bn.js';
import { bnToBn } from '@polkadot/util';

import createType from '../../codec/createType';
import Bytes from '../Bytes';
import U32 from '../U32';

const CID_ABRS = 0x53524241; // 'ABRS'
const CID_AURA = 0x61727561; // 'aura'
const CID_BABE = 0x45424142; // 'BABE'
const CID_GRPA = 0x4b4e5246; // 'FRNK' (don't ask, used to be afg1)

export { CID_ABRS, CID_AURA, CID_BABE, CID_GRPA };

/**
 * @name ConsensusEngineId
 * @description
 * A 4-byte identifier (actually a [u8; 4]) identifying the engine, e.g. for Aura it would be [b'a', b'u', b'r', b'a']
 */
export default class ConsensusEngineId extends U32 {
  public static idToString (input: number | BN): string {
    return bnToBn(input)
      .toArray('le')
      .map((code): string => String.fromCharCode(code))
      .join('');
  }

  public static stringToId (input: string): number {
    return input
      .split('')
      .reverse()
      .reduce((result, char): number => (result * 256) + char.charCodeAt(0), 0);
  }

  /**
   * @description `true` if the engine matches abrs
   */
  public get isAbrs (): boolean {
    return this.eq(CID_ABRS);
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

  private getAbrsAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    const pre = createType('RawAuraBorosPreDigest', bytes.toU8a(true));

    return sessionValidators[
      pre.isBabe
        ? pre.asBabe.authorityIndex.toNumber()
        : pre.asAura.slotNumber.modn(sessionValidators.length)
    ];
  }

  private getAuraAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    return sessionValidators[
      createType('RawAuraPreDigest', bytes.toU8a(true))
        .slotNumber
        .modn(sessionValidators.length)
    ];
  }

  private getBabeAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    return sessionValidators[
      createType('RawBabePreDigest', bytes.toU8a(true))
        .authorityIndex
        .toNumber()
    ];
  }

  /**
   * @description From the input bytes, decode into an author
   */
  public extractAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    if (this.isAbrs) {
      return this.getAbrsAuthor(bytes, sessionValidators);
    } else if (this.isAura) {
      return this.getAuraAuthor(bytes, sessionValidators);
    } else if (this.isBabe) {
      return this.getBabeAuthor(bytes, sessionValidators);
    }

    throw new Error('Invalid engine for extractAuthor conversion');
  }

  /**
   * @description Override the default toString to return a 4-byte string
   */
  public toString (): string {
    return ConsensusEngineId.idToString(this as BN);
  }
}
