// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Conviction } from '../interfaces/democracy';
import type { AllConvictions } from '../interfaces/democracy/definitions';
import type { AnyJson, ArrayElementType, Registry } from '../types';

import { isBoolean, isNumber, isU8a, isUndefined } from '@polkadot/util';

import { U8aFixed } from '../codec/U8aFixed';
import { bool as Bool } from '../primitive/Bool';

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
  const vote = new Bool(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS;
  const conviction = registry.createType('Conviction', value.conviction || DEF_CONV);

  return new Uint8Array([vote | conviction.index]);
}

/** @internal */
function decodeVote (registry: Registry, value?: InputTypes): Uint8Array {
  if (isU8a(value)) {
    return decodeVoteU8a(value);
  } else if (isUndefined(value) || value instanceof Boolean || isBoolean(value)) {
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
    const decoded = decodeVote(registry, value);

    super(registry, decoded, 8);

    this.#aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this.#conviction = this.registry.createType('Conviction', decoded[0] & CON_MASK);
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
