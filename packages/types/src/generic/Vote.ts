// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, Registry } from '@polkadot/types-codec/types';
import type { Conviction } from '../interfaces/democracy';
import type { AllConvictions } from '../interfaces/democracy/definitions';
import type { ArrayElementType } from '../types';

import { Bool, U8aFixed } from '@polkadot/types-codec';
import { isBoolean, isNumber, isU8a, isUndefined } from '@polkadot/util';

interface VoteType {
  aye: boolean;
  conviction?: number | ArrayElementType<typeof AllConvictions>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type InputTypes = boolean | number | Boolean | Uint8Array | VoteType;

// For votes, the topmost bit indicated aye/nay, the lower bits indicate the conviction
const AYE_BITS = 0b10000000;
const NAY_BITS = 0b00000000;
const CON_MASK = 0b01111111;
const DEF_CONV = 0b00000000; // the default conviction, None

/** @internal */
function decodeVoteBool (value: boolean): Uint8Array {
  return value
    ? new Uint8Array([AYE_BITS | DEF_CONV])
    : new Uint8Array([NAY_BITS]);
}

/** @internal */
function decodeVoteU8a (value: Uint8Array): Uint8Array {
  return value.length
    ? value.subarray(0, 1)
    : new Uint8Array([NAY_BITS]);
}

/** @internal */
function decodeVoteType (registry: Registry, value: VoteType): Uint8Array {
  return new Uint8Array([
    (
      new Bool(registry, value.aye).isTrue
        ? AYE_BITS
        : NAY_BITS
    ) |
    registry.createTypeUnsafe<Conviction>('Conviction', [value.conviction || DEF_CONV]).index
  ]);
}

/** @internal */
function decodeVote (registry: Registry, value?: Exclude<InputTypes, Uint8Array>): Uint8Array {
  if (isUndefined(value) || value instanceof Boolean || isBoolean(value)) {
    return decodeVoteBool(new Bool(registry, value).isTrue);
  } else if (isNumber(value)) {
    return decodeVoteBool(value < 0);
  }

  return decodeVoteType(registry, value);
}

/**
 * @name GenericVote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export class GenericVote extends U8aFixed {
  #aye: boolean;

  #conviction: Conviction;

  constructor (registry: Registry, value?: InputTypes) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101
    const decoded = isU8a(value)
      ? decodeVoteU8a(value)
      : decodeVote(registry, value);

    super(registry, decoded, 8);

    this.#aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this.#conviction = this.registry.createTypeUnsafe('Conviction', [decoded[0] & CON_MASK]);
  }

  /**
   * @description returns a V2 conviction
   */
  public get conviction (): Conviction {
    return this.#conviction;
  }

  /**
   * @description true if the wrapped value is a positive vote
   */
  public get isAye (): boolean {
    return this.#aye;
  }

  /**
   * @description true if the wrapped value is a negative vote
   */
  public get isNay (): boolean {
    return !this.isAye;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExpanded?: boolean): AnyJson {
    return {
      conviction: this.conviction.toHuman(isExpanded),
      vote: this.isAye ? 'Aye' : 'Nay'
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'Vote';
  }
}
