// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import Hash from './Hash';
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
 * An [[Enum]] that indicates the specific phase where the [[EventRecord]] was generated
 */
export class Phase extends Enum {
  constructor (value: any, index?: number) {
    super({
      ApplyExtrinsic,
      Finalization
    }, value, index);
  }

  /**
   * @description Returns the item as a [[ApplyExtrinsic]]
   */
  get asApplyExtrinsic (): ApplyExtrinsic {
    assert(this.isApplyExtrinsic, `Cannot convert '${this.type}' via asApplyExtrinsic`);

    return this.value as ApplyExtrinsic;
  }

  /**
   * @description Returns the item as a [[Finalization]]
   */
  get asFinalization (): Finalization {
    assert(this.isFinalization, `Cannot convert '${this.type}' via asFinalization`);

    return this.value as Finalization;
  }

  /**
   * @description true when this is a ApplyExtrinsic
   */
  get isApplyExtrinsic (): boolean {
    return this.type === 'ApplyExtrinsic';
  }

  /**
   * @description true when this is a ApplyExtrinsic
   */
  get isFinalization (): boolean {
    return this.type === 'Finalization';
  }
}

/**
 * @name EventRecord_0_76
 * @description
 * A record for an [[Event]] (as specified by [[Metadata]]) with the specific [[Phase]] of
 * application.
 */
// tslint:disable-next-line
export class EventRecord_0_76 extends Struct {
  constructor (value: any) {
    super({
      phase: Phase,
      event: Event
    }, value);
  }

  /**
   * @description The [[Event]] this record refers to
   */
  get event (): Event {
    return this.get('event') as Event;
  }

  /**
   * @description The [[Phase]] where the event was generated
   */
  get phase (): Phase {
    return this.get('phase') as Phase;
  }

  /**
   * @description The [[Hash]] topics for this event (empty, compat)
   */
  get topics (): Vector<Hash> {
    return new (Vector.with(Hash))();
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
      event: Event,
      topics: Vector.with(Hash)
    }, value);
  }

  static Fallback = EventRecord_0_76;

  /**
   * @description The [[Event]] this record refers to
   */
  get event (): Event {
    return this.get('event') as Event;
  }

  /**
   * @description The [[Phase]] where the event was generated
   */
  get phase (): Phase {
    return this.get('phase') as Phase;
  }

  /**
   * @description The [[Hash]] topics for this event
   */
  get topics (): Vector<Hash> {
    return this.get('topics') as Vector<Hash>;
  }
}
