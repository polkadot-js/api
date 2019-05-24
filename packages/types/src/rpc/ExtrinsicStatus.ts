// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';

import Enum from '../codec/Enum';
import Vector from '../codec/Vector';
import Hash from '../primitive/Hash';
import Null from '../primitive/Null';
import Text from '../primitive/Text';

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
 * @name Finalized
 * @description
 * An [[ExtrinsicStatus] indicating that the [[Extrinsic]]] has been finalized and included
 */
export class Finalized extends Hash {
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
export class Invalid extends Null {
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
 * An [[Enum]] that indicates the status of the [[Extrinsic]] as been submitted
 */
export default class ExtrinsicStatus extends Enum {
  constructor (value: any, index?: number) {
    super({
      Future,
      Ready,
      Finalized,
      Usurped,
      Broadcast,
      Dropped,
      Invalid
    }, value, index);
  }

  /**
   * @description Returns the item as a [[Broadcast]]
   */
  get asBroadcast (): Broadcast {
    assert(this.isBroadcast, `Cannot convert '${this.type}' via asBroadcast`);

    return this.value as Broadcast;
  }

  /**
   * @description Returns the item as a [[Dropped]]
   */
  get asDropped (): Dropped {
    assert(this.isDropped, `Cannot convert '${this.type}' via asDropped`);

    return this.value as Dropped;
  }

  /**
   * @description Returns the item as a [[Finalized]]
   */
  get asFinalized (): Finalized {
    assert(this.isFinalized, `Cannot convert '${this.type}' via asFinalized`);

    return this.value as Finalized;
  }

  /**
   * @description Returns the item as a [[Future]]
   */
  get asFuture (): Future {
    assert(this.isFuture, `Cannot convert '${this.type}' via asFuture`);

    return this.value as Future;
  }

  /**
   * @description Returns the item as a [[Invalid]]
   */
  get asInvalid (): Invalid {
    assert(this.isInvalid, `Cannot convert '${this.type}' via asInvalid`);

    return this.value as Invalid;
  }

  /**
   * @description Returns the item as a [[Ready]]
   */
  get asReady (): Ready {
    assert(this.isReady, `Cannot convert '${this.type}' via asReady`);

    return this.value as Ready;
  }

  /**
   * @description Returns the item as a [[Usurped]]
   */
  get asUsurped (): Usurped {
    assert(this.isUsurped, `Cannot convert '${this.type}' via asUsurped`);

    return this.value as Usurped;
  }

  /**
   * @description Returns true if the status is boadcast
   */
  get isBroadcast (): boolean {
    return this.type === 'Broadcast';
  }

  /**
   * @description Returns true if the status is dropped
   */
  get isDropped (): boolean {
    return this.type === 'Dropped';
  }

  /**
   * @description Returns true if the status is finalized
   */
  get isFinalized (): boolean {
    return this.type === 'Finalized';
  }

  /**
   * @description Returns true if the status is future
   */
  get isFuture (): boolean {
    return this.type === 'Future';
  }

  /**
   * @description Returns true if the status is invalid
   */
  get isInvalid (): boolean {
    return this.type === 'Invalid';
  }

  /**
   * @description Returns true if the status is eady
   */
  get isReady (): boolean {
    return this.type === 'Ready';
  }

  /**
   * @description Returns true if the status is usurped
   */
  get isUsurped (): boolean {
    return this.type === 'Usurped';
  }
}
