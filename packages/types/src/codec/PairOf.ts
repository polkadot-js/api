// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Constructor, ConstructorDef } from '../types';
import Base from './Base';
import Tuple from './Tuple';

// PairOf defines a general structure that creates a Tuple pair of a specific type. These values
// are accessible via the first & second getters
export default class PairOf<
  T extends Base
> extends Tuple<{ first: Constructor<T>, second: Constructor<T> }> {
  static with<
    S extends ConstructorDef = { [index: string]: Constructor<Base> }
  > (Type: S): Constructor<Tuple<S>>;

  static with<T extends Base> (Type: Constructor<T>): Constructor<PairOf<T>> {
    return class extends PairOf<T> {
      constructor (value?: any) {
        super({
          first: Type,
          second: Type
        }, value);
      }
    };
  }

  get first (): T {
    return this.get('first') as T;
  }

  get second (): T {
    return this.get('second') as T;
  }
}
