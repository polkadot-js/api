// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../../types';
import { Conviction } from '../../interfaces/democracy';

import { isBoolean, isNumber, isU8a, isUndefined } from '@polkadot/util';

import { createType } from '../../codec/create';
import U8aFixed from '../../codec/U8aFixed';
import Bool from '../Bool';

// eslint-disable-next-line @typescript-eslint/ban-types
type InputTypes = boolean | number | Boolean | Uint8Array | {
  aye: boolean;
  conviction?: number | ('None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x');
};

// For votes, the topmost bit indicated aye/nay, the lower bits indicate the conviction
const AYE_BITS = 0b10000000;
const NAY_BITS = 0b00000000;
const CON_MASK = 0b01111111;
const DEF_CONV = 0b00000000; // the default conviction, None

/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends U8aFixed {
  private _aye: boolean;

  private _conviction: Conviction;

  constructor (registry: Registry, value?: InputTypes) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101
    const decoded = Vote.decodeVote(registry, value);

    super(registry, decoded, 8);

    this._aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this._conviction = createType(this.registry, 'Conviction', decoded[0] & CON_MASK);
  }

  private static decodeVote (registry: Registry, value?: InputTypes): Uint8Array {
    if (isUndefined(value)) {
      return Vote.decodeVoteBool(false);
    } else if (value instanceof Boolean || isBoolean(value)) {
      return Vote.decodeVoteBool(new Bool(registry, value).isTrue);
    } else if (isNumber(value)) {
      return Vote.decodeVoteBool(value < 0);
    } else if (isU8a(value)) {
      return Vote.decodeVoteU8a(value);
    }

    const vote = new Bool(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS;
    const conviction = createType(registry, 'Conviction', isUndefined(value.conviction) ? DEF_CONV : value.conviction);

    return new Uint8Array([vote | conviction.index]);
  }

  private static decodeVoteBool (value: boolean): Uint8Array {
    return value
      ? new Uint8Array([AYE_BITS | DEF_CONV])
      : new Uint8Array([NAY_BITS]);
  }

  private static decodeVoteU8a (value: Uint8Array): Uint8Array {
    return value.length
      ? value.subarray(0, 1)
      : new Uint8Array([NAY_BITS]);
  }

  /**
   * @description returns a V2 conviction
   */
  public get conviction (): Conviction {
    return this._conviction;
  }

  /**
   * @description true if the wrapped value is a positive vote
   */
  public get isAye (): boolean {
    return this._aye;
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  public get isNay (): boolean {
    return !this.isAye;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Vote';
  }
}
