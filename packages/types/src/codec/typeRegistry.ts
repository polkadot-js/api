// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction, isString, isUndefined } from '@polkadot/util';

import { Codec, Constructor, RegistryTypes } from '../types';
import { createClass } from './createType';

export class TypeRegistry {
  public static readonly defaultRegistry: TypeRegistry = new TypeRegistry();

  private _registry: Map<string, Constructor> = new Map();

  public register (type: Constructor | RegistryTypes): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (name: string, type: Constructor): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
    if (isString(arg1)) {
      const name = arg1;
      const type = arg2!;

      this._registry.set(name, type);
    } else if (isFunction(arg1)) {
      const name = arg1.name;
      const type = arg1;

      this._registry.set(name, type);
    } else {
      this.registerObject(arg1);
    }
  }

  private registerObject (obj: RegistryTypes, overwrite: boolean = true): void {
    Object.entries(obj).forEach(([name, type]): void => {
      if (overwrite || !this.get(name)) {
        if (isString(type)) {
          this._registry.set(name, createClass(type));
        } else if (isFunction(type)) {
          // This _looks_ a bit funny, but `typeof Clazz === 'function'
          this._registry.set(name, type);
        } else {
          this._registry.set(name, createClass(JSON.stringify(type)));
        }
      }
    });
  }

  public get <T extends Codec = Codec> (name: string): Constructor<T> | undefined {
    return this._registry.get(name) as unknown as Constructor<T>;
  }

  public getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T> {
    const type = this.get<T>(name);

    if (isUndefined(type)) {
      throw new Error(msg || `type ${name} not found`);
    }

    return type;
  }
}

let defaultRegistry: TypeRegistry;

export default function getDefaultRegistry (): TypeRegistry {
  if (!defaultRegistry) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const defaultTypes = require('../index.types');

    defaultRegistry = new TypeRegistry();
    defaultRegistry.register({ ...defaultTypes });
  }

  return defaultRegistry;
}
