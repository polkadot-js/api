// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '../srml/types';

import { assert } from '@polkadot/util';

import { ClassOf } from '../codec/createType';
import Enum from '../codec/Enum';
import Vector from '../codec/Vector';
import Null from '../primitive/Null';
import Text from '../primitive/Text';

/**
 * @name ExtrinsicStatus
 * @description
 * An [[Enum]] that indicates the status of the [[Extrinsic]] as been submitted
 */
export default class ExtrinsicStatus extends Enum {
  public constructor (value: any, index?: number) {
    super({
      Future: Null,
      Ready: Null,
      Finalized: ClassOf('Hash'),
      Usurped: ClassOf('Hash'),
      Broadcast: Vector.with(Text),
      Dropped: Null,
      Invalid: Null
    }, value, index);
  }

  /**
   * @description Returns the item as a [[Broadcast]]
   */
  public get asBroadcast (): Vector<Text> {
    assert(this.isBroadcast, `Cannot convert '${this.type}' via asBroadcast`);

    return this.value as Vector<Text>;
  }

  /**
   * @description Returns the item as a [[Dropped]]
   */
  public get asDropped (): Null {
    assert(this.isDropped, `Cannot convert '${this.type}' via asDropped`);

    return this.value as Null;
  }

  /**
   * @description Returns the item as a [[Finalized]]
   */
  public get asFinalized (): Hash {
    assert(this.isFinalized, `Cannot convert '${this.type}' via asFinalized`);

    return this.value as Hash;
  }

  /**
   * @description Returns the item as a [[Future]]
   */
  public get asFuture (): Null {
    assert(this.isFuture, `Cannot convert '${this.type}' via asFuture`);

    return this.value as Null;
  }

  /**
   * @description Returns the item as a [[Invalid]]
   */
  public get asInvalid (): Null {
    assert(this.isInvalid, `Cannot convert '${this.type}' via asInvalid`);

    return this.value as Null;
  }

  /**
   * @description Returns the item as a [[Ready]]
   */
  public get asReady (): Null {
    assert(this.isReady, `Cannot convert '${this.type}' via asReady`);

    return this.value as Null;
  }

  /**
   * @description Returns the item as a [[Usurped]]
   */
  public get asUsurped (): Hash {
    assert(this.isUsurped, `Cannot convert '${this.type}' via asUsurped`);

    return this.value as Hash;
  }

  /**
   * @description Returns true if the status is boadcast
   */
  public get isBroadcast (): boolean {
    return this.type === 'Broadcast';
  }

  /**
   * @description Returns true if the status is dropped
   */
  public get isDropped (): boolean {
    return this.type === 'Dropped';
  }

  /**
   * @description Returns true if the status is finalized
   */
  public get isFinalized (): boolean {
    return this.type === 'Finalized';
  }

  /**
   * @description Returns true if the status is future
   */
  public get isFuture (): boolean {
    return this.type === 'Future';
  }

  /**
   * @description Returns true if the status is invalid
   */
  public get isInvalid (): boolean {
    return this.type === 'Invalid';
  }

  /**
   * @description Returns true if the status is eady
   */
  public get isReady (): boolean {
    return this.type === 'Ready';
  }

  /**
   * @description Returns true if the status is usurped
   */
  public get isUsurped (): boolean {
    return this.type === 'Usurped';
  }
}
