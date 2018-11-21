// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Struct from './codec/Struct';
import Event from './Event';
import Null from './Null';
import U32 from './U32';

class ApplyExtrinsic extends U32 {
}

class Finalization extends Null {
}

class Phase extends EnumType<ApplyExtrinsic | Finalization> {
  constructor (value: any, index?: number) {
    super([
      ApplyExtrinsic,
      Finalization
    ], value, index);
  }
}

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
