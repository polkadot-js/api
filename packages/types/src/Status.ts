// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Vector from './codec/Vector';
import Hash from './Hash';
import Null from './Null';
import Text from './Text';

export class Broadcast extends Vector.with(Text) {
}

export class Dropped extends Null {
}

export class Finalised extends Hash {
}

export class Usurped extends Hash {
}

export default class Status extends EnumType<Finalised | Usurped | Broadcast | Dropped> {
  constructor (index?: number) {
    super([
      Finalised,
      Usurped,
      Broadcast,
      Dropped
    ], index);
  }
}
