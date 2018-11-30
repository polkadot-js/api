// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '../types';
import * as allTypes from '../index';

export default class TypeRegistry {
  static readonly defaultRegistry: TypeRegistry = new TypeRegistry();

  private _registry: Map<string, Constructor> = new Map();

  register (type: Constructor | {[name: string]: Constructor}): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | {[name: string]: Constructor}, arg2?: Constructor): void {
    if (typeof arg1 === 'string') {
      const name = arg1;
      const type = arg2!;

      this._registry.set(name, type);
    } else if (typeof arg1 === 'function') {
      const name = arg1.name;
      const type = arg1;

      this._registry.set(name, type);
    } else {
      const dict = arg1;

      for (const [name, type] of Object.entries(dict)) {
        this._registry.set(name, type);
      }
    }
  }

  get (name: string) {
    return this._registry.get(name);
  }
}

TypeRegistry.defaultRegistry.register(allTypes as any);
