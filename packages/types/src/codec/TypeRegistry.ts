// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction, isString } from '@polkadot/util';

import { Constructor } from '../types';

export class TypeRegistry {
  static readonly defaultRegistry: TypeRegistry = new TypeRegistry();

  private _registry: Map<string, Constructor> = new Map();

  register (type: Constructor | {[name: string]: Constructor}): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | {[name: string]: Constructor}, arg2?: Constructor): void {
    if (isString(arg1)) {
      const name = arg1;
      const type = arg2!;

      this._registry.set(name, type);
    } else if (isFunction(arg1)) {
      const name = arg1.name;
      const type = arg1;

      this._registry.set(name, type);
    } else {
      Object.entries(arg1).forEach(([name, type]) => {
        this._registry.set(name, type);
      });
    }
  }

  get (name: string) {
    throw new Error([...this._registry.entries()].toString());
    return this._registry.get(name);
  }
}

export default TypeRegistry.defaultRegistry;
