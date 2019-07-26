// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '../interfaces/runtime';
import { Phase } from '../interfaces/system';

import { ClassOf } from '../codec/createType';
import Struct from '../codec/Struct';
import Vec from '../codec/Vec';
import Event from './Event';

/**
 * @name EventRecord
 * @description
 * A record for an [[Event]] (as specified by [[Metadata]]) with the specific [[Phase]] of
 * application.
 */
export default class EventRecord extends Struct {
  public constructor (value: any) {
    super({
      phase: ClassOf('Phase'),
      event: Event,
      topics: ClassOf('Vec<Hash>')
    }, value);
  }

  // TODO We want these injected by createType
  public static Fallback = ClassOf('EventRecord0to76');

  /**
   * @description The [[Event]] this record refers to
   */
  public get event (): Event {
    return this.get('event') as Event;
  }

  /**
   * @description The [[Phase]] where the event was generated
   */
  public get phase (): Phase {
    return this.get('phase') as Phase;
  }

  /**
   * @description The [[Hash]] topics for this event
   */
  public get topics (): Vec<Hash> {
    return this.get('topics') as Vec<Hash>;
  }
}
