// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Null from './Null';
import U32 from './U32';

class ApplyExtrinsic extends Tuple {
  constructor (value: any) {
    super({
      index: U32
    }, value);
  }

  get index (): U32 {
    return this.getAtIndex(0) as U32;
  }
}

class Finalization extends Null {
}

class Phase extends EnumType<ApplyExtrinsic | Finalization> {
  constructor (value: any) {
    super({
      0: ApplyExtrinsic,
      1: Finalization
    }, value);
  }
}

// FIXME Once we have actual data from Events, have a look on how to decode them
class Event extends Null {
}

export class EventRecord extends Struct {
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
