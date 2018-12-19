// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './codec/EnumType';
import Vector from './codec/Vector';
import Hash from './Hash';
import Null from './Null';
import Text from './Text';

/**
 * @name Broadcast
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] has been boradcast to peers
 */
export class Broadcast extends Vector.with(Text) {
}

/**
 * @name Dropped
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] has been dropped
 */
export class Dropped extends Null {
}

/**
 * @name Finalised
 * @description
 * An [[ExtrinsicStats] indicating that the [[Extrinsic]]] has been finalised and included
 */
export class Finalised extends Hash {
}

/**
 * @name Future
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] has been added to the future queue
 */
export class Future extends Null {
}

/**
 * @name Ready
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] has been added to the ready queue
 */
export class Ready extends Null {
}

/**
 * @name Invalid
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] is invalid
 */
export class Invalid extends Hash {
}

/**
 * @name Usurped
 * @description
 * An [[ExtrinsicStatus]] indicating that the [[Extrinsic]] has been usurped
 */
export class Usurped extends Hash {
}

/**
 * @name ExtrinsicStatus
 * @description
 * An [[EnumType]] that indicates the status of the [[Extrinsic]] as been submitted
 */
export default class ExtrinsicStatus extends EnumType<Future | Ready | Finalised | Usurped | Broadcast | Dropped | Invalid> {
  constructor (value: any, index?: number) {
    super({
      Future,
      Ready,
      Finalised,
      Usurped,
      Broadcast,
      Dropped,
      Invalid
    }, value, index);
  }
}
