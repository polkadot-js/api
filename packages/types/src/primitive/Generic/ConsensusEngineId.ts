// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '../../interfaces/runtime';

import BN from 'bn.js';
import { bnToBn } from '@polkadot/util';

import createType from '../../codec/createType';
import Bytes from '../Bytes';
import U32 from '../U32';
import U64 from '../U64';

const CID_AURA = 0x61727561; // 'aura'
const CID_BABE = 0x45424142; // 'BABE'
const CID_GRPA = 0x4b4e5246; // 'FRNK' (don't ask, used to be afg1)

export { CID_AURA, CID_BABE, CID_GRPA };

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
   * @description From the input bytes, decode into an author
   */
  public extractAuthor (bytes: Bytes, sessionValidators: AccountId[]): AccountId {
    if (this.isAura) {
      // TODO We really want proper decoding of the digest as below (i.e. via type)
      return sessionValidators[
        new U64(bytes.toU8a(true).subarray(0, 8)).modn(sessionValidators.length)
      ];
    } else if (this.isBabe) {
      return sessionValidators[
        createType('RawBabePreDigest', bytes.toU8a(true)).authorityIndex.toNumber()
      ];
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
