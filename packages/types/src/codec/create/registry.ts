// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, RegistryTypes } from '../../types';

import { isFunction, isString, isUndefined } from '@polkadot/util';

import { createClass } from './createClass';

export class TypeRegistry {
  public static readonly defaultRegistry: TypeRegistry = new TypeRegistry();

  private _classes: Map<string, Constructor> = new Map();

  private _definitions: Map<string, string> = new Map();

  public register (type: Constructor | RegistryTypes): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (name: string, type: Constructor): void;

  // eslint-disable-next-line no-dupe-class-members
  public register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
    if (isString(arg1)) {
      const name = arg1;
      const type = arg2!;

      this._classes.set(name, type);
    } else if (isFunction(arg1)) {
      const name = arg1.name;
      const type = arg1;

      this._classes.set(name, type);
    } else {
      this.registerObject(arg1);
    }
  }

  private registerObject (obj: RegistryTypes): void {
    Object.entries(obj).forEach(([name, type]): void => {
      if (isFunction(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        this._classes.set(name, type);
      } else {
        const def = isString(type)
          ? type
          : JSON.stringify(type);

        // we already have this type, remove the classes registered for it
        if (this._classes.has(name)) {
          this._classes.delete(name);
        }

        this._definitions.set(name, def);
      }
    });
  }

  public get <T extends Codec = Codec> (name: string): Constructor<T> | undefined {
    let Type = this._classes.get(name);

    // we have not already created the type, attempt it
    if (!Type) {
      const definition = this._definitions.get(name);

      // we have a definition, so create the class now (lazily)
      if (definition) {
        const BaseType = createClass(definition);

        // NOTE If we didn't extend here, we would have strange artifacts. An example is
        // Balance, with this, new Balance() instanceof u128 is true, but Balance !== u128
        Type = class extends BaseType {};

        this._classes.set(name, Type);
      }
    }

    return Type as Constructor<T>;
  }

  public getDefinition (name: string): string | undefined {
    return this._definitions.get(name);
  }

  public getOrThrow <T extends Codec = Codec> (name: string, msg?: string): Constructor<T> {
    const type = this.get<T>(name);

    if (isUndefined(type)) {
      throw new Error(msg || `type ${name} not found`);
    }

    return type;
  }

  public hasClass (name: string): boolean {
    return this._classes.has(name);
  }

  public hasDef (name: string): boolean {
    return this._definitions.has(name);
  }

  public hasType (name: string): boolean {
    return this.hasClass(name) || this.hasDef(name);
  }
}

export function getTypeRegistry (): TypeRegistry {
  return TypeRegistry.defaultRegistry;
}
