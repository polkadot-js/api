// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, Codec, InterfaceTypes } from '../types';

import Option from './Option';
import Struct from './Struct';
import Tuple from './Tuple';
import Vec from './Vec';

type TypeWithValues = [Constructor, any[]];

const EMPTY = new Uint8Array();

/**
 * @name Linkage
 * @description The wrapper for the result from a LinkedMap
 */
export default class Linkage<T extends Codec> extends Struct {
  public constructor (Type: Constructor | InterfaceTypes, value?: any) {
    super({
      previous: Option.with(Type),
      next: Option.with(Type)
    }, value);
  }

  public static withKey<O extends Codec> (Type: Constructor | InterfaceTypes): Constructor<Linkage<O>> {
    return class extends Linkage<O> {
      public constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  public get previous (): Option<T> {
    return this.get('previous') as Option<T>;
  }

  public get next (): Option<T> {
    return this.get('next') as Option<T>;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Linkage<${this.next.toRawType(true)}>`;
  }

  /**
   * @description Custom toU8a which with bare mode does not return the linkage if empty
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return isBare && this.isEmpty
      ? EMPTY
      : super.toU8a();
  }
}

/**
 * @name LinkageResult
 * @description A Linkage keys/Values tuple
 */
export class LinkageResult extends Tuple {
  public constructor ([TypeKey, keys]: TypeWithValues, [TypeValue, values]: TypeWithValues) {
    super({
      Keys: Vec.with(TypeKey),
      Values: Vec.with(TypeValue)
    }, [keys, values]);
  }
}
