// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Event from './Event';
import Null from './Null';
import U32 from './U32';

/**
 * @name ApplyExtrinsic
 * @description
 * The [[Phase]] where the extrinsic is applied
 */
export class ApplyExtrinsic extends U32 {
}

/**
 * @name Finalization
 * @description
 * The [[Phase]] where the extrinsic is being Finalized
 */
export class Finalization extends Null {
}

/**
 * @name Phase
 * @description
 * An [[EnumType]] that indicates the specific phase where the [[EventRecord]] was generated
 */
export class Phase extends EnumType<ApplyExtrinsic | Finalization> {
  constructor (value: any, index?: number) {
    super([
      ApplyExtrinsic,
      Finalization
    ], value, index);
  }
}

/**
 * @name EventRecord
 * @description
 * A record for an [[Event]] (as specified by [[Metadata]]) with the specific [[Phase]] of
 * application.
 */
export default class EventRecord extends Struct {
  constructor (value: any) {
    super({
      phase: Phase,
      event: Event
    }, value);
  }

  get event (): Event {
    return this.get('event') as Event;
  }

  get phase (): Phase {
    return this.get('phase') as Phase;
  }
}
