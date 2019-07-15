// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Struct, Option, Tuple, Vector } from '.';
import { Constructor, Codec } from '../types';

type TypeWithValues = [Constructor, any[]];

export default class Linkage<T extends Codec> extends Struct {
  public constructor (Type: Constructor, value?: any) {
    super({
      previous: Option.with(Type),
      next: Option.with(Type)
    }, value);
  }

  public static withKey<O extends Codec> (Type: Constructor): Constructor<Linkage<O>> {
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
}

export class LinkageResult extends Tuple {
  public constructor ([TypeKey, keys]: TypeWithValues, [TypeValue, values]: TypeWithValues) {
    super({
      Keys: Vector.with(TypeKey),
      Values: Vector.with(TypeValue)
    }, [keys, values]);
  }
}
