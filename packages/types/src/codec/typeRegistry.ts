// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, RegistryTypes } from '../types';

import { isFunction, isString } from '@polkadot/util';

import { createClass } from './createType';

export class TypeRegistry {
  static readonly defaultRegistry: TypeRegistry = new TypeRegistry();

  private _registry: Map<string, Constructor> = new Map();

  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
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

  private registerObject (obj: RegistryTypes) {
    Object.entries(obj).forEach(([name, type]) => {
      if (isString(type)) {
        this._registry.set(name, createClass(type));
      } else if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this._registry.set(name, type);
      } else {
        this._registry.set(name, createClass(JSON.stringify(type)));
      }
    });
  }

  get (name: string): Constructor | undefined {
    return this._registry.get(name);
  }
}

export default TypeRegistry.defaultRegistry;
