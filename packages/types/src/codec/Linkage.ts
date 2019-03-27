import { Struct, Option } from '.';
import { Constructor, Codec } from '../types';

export class Linkage<T extends Codec> extends Struct {
  constructor (Type: Constructor, value?: any) {
    super({
      previous: Option.with(Type),
      next: Option.with(Type)
    }, value);
  }

  static withKey<O extends Codec> (Type: Constructor): Constructor<Linkage<O>> {
    return class extends Linkage<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  get previous (): Option<T> {
    return this.get('previous') as Option<T>;
  }

  get next (): Option<T> {
    return this.get('next') as Option<T>;
  }
}
