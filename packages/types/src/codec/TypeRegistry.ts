// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isString, isFunction, isUndefined } from '@polkadot/util';
import { ArgsDef, Codec, Constructor, RegistryTypes } from '../types';
import Text from '../primitive/Text';
import EnumType from './EnumType';
import Compact from './Compact';
import { Linkage } from './Linkage';
import Option from './Option';
import Struct from './Struct';
import Tuple from './Tuple';
import UInt from './UInt';
import Vector from './Vector';
import Method, { IFunctionMetadata, MethodFunction, ModulesWithMethods } from '../primitive/Method';
import Metadata from '../Metadata';
import { EventData } from '../type/Event';
import { getTypeDef } from './createType';
import flattenUniq from '../Metadata/util/flattenUniq';

export enum TypeDefInfo {
  Compact,
  Enum,
  Option,
  Plain,
  Struct,
  Tuple,
  Vector,
  Linkage
}

export interface ITypeDef {
  type: string;
  meta: {
    info?: TypeDefInfo;
    keyName?: string;
  };
  module?: string;
  sub?: ITypeDef | Array<ITypeDef>;
}

function isITypeDef (obj: Object): boolean {
  const keys = Object.keys(obj);
  return keys.includes('info') && keys.includes('module') && keys.includes('displayName');
}

function isPromise (promise: any): boolean {
  return typeof promise === 'object' && typeof promise.then === 'function';
}

function toTypeDefKey (typeDef: ITypeDef) {
  return `${typeDef.module}:${typeDef.type}`;
}

export default class TypeRegistry {

  protected static _TYPE_REGISTRY?: TypeRegistry;
  protected static TY_STACK: (TypeRegistry | undefined)[] = [];
  static get TYPE_REGISTRY (): TypeRegistry {
    assert(TypeRegistry._TYPE_REGISTRY, 'TYPE_REGISTRY is undefined, make sure it is wrapped in withRegistry()');
    return TypeRegistry._TYPE_REGISTRY as TypeRegistry;
  }

  static withRegistry (typeRegistry: TypeRegistry, wrapFn: (...args: any[]) => any) {
    TypeRegistry.TY_STACK.push(TypeRegistry._TYPE_REGISTRY);
    TypeRegistry._TYPE_REGISTRY = typeRegistry;
    const ret = wrapFn();
    if (isPromise(ret)) {
      return ret.then(() => { TypeRegistry._TYPE_REGISTRY = TypeRegistry.TY_STACK.pop(); },
        () => { TypeRegistry._TYPE_REGISTRY = TypeRegistry.TY_STACK.pop(); });
    } else {
      TypeRegistry._TYPE_REGISTRY = TypeRegistry.TY_STACK.pop();
    }
    return ret;
  }

  /**
   * key pattern is [module]:[type]
   */
  private _registry: Map<string, Constructor> = new Map();

  protected EventTypes: { [index: string]: Constructor<EventData> } = {};

  loadDefault () {
    const defaultTypes = require('../index.types');
    this.register({ ...defaultTypes });
  }

  register (type: Constructor | RegistryTypes): void;
  register (name: string | ITypeDef, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes | ITypeDef, arg2?: Constructor): void {
    if (isString(arg1)) {
      const name = arg1;
      const type = arg2!;

      this.registerObject({ [name]: type });
    } else if (isFunction(arg1)) {
      const name = arg1.name;
      const type = arg1;

      this.registerObject({ [name]: type });
    } else {
      if (isITypeDef(arg1)) {
        this.registerType(arg1 as ITypeDef, arg2 as Constructor);
      } else {
        this.registerObject(arg1 as RegistryTypes);
      }

    }
  }

  registerObject (obj: RegistryTypes, overwrite: boolean = true) {
    Object.entries(obj).forEach(([name, type]) => {
      if (overwrite || !this.get(name)) {
        if (isString(type)) {
          this._registry.set(name, this.createClass(type));
        } else if (isFunction(type)) {
          // This _looks_ a bit funny, but `typeof Clazz === 'function'
          this._registry.set(name, type);
        } else {
          this._registry.set(name, this.createClass(JSON.stringify(type)));
        }
      }
    });
  }

  registerType (type: ITypeDef, constructor: Constructor) {
    throw new Error('todo');
  }

  get (type: string | ITypeDef): Constructor | undefined {
    const typeDef: ITypeDef = isString(type) ? { type, meta: {} } : type;
    let typeClass = this._registry.get(toTypeDefKey(typeDef)) || this._registry.get(typeDef.type);
    if (!typeClass) {
      typeClass = this._registry.get(typeDef.type);
    }

    return typeClass;
  }

  getOrThrow (typeDef: string | ITypeDef, msg?: string): Constructor {
    const type = this.get(name);
    if (isUndefined(type)) {
      throw new Error(msg || `type ${name} not found`);
    }

    return type;
  }

  injectMethods (moduleMethods: ModulesWithMethods): void {
    throw new Error('todo');
  }

  findFunction (callIndex: string): MethodFunction {
    throw new Error('todo');
  }

  getArgsDef (meta: IFunctionMetadata): ArgsDef {
    return Method.filterOrigin(meta).reduce((result, { name, type }) => {
      const Type = this.getTypeClass(type);
      result[name.toString()] = Type;

      return result;
    }, {} as ArgsDef);
  }

  injectEvents (metadata: Metadata): void {
    throw new Error('todo');
  }

  findEventType (index: string): Constructor<EventData> {
    throw new Error('todo');
  }

  createClass (type: Text | string | ITypeDef): Constructor {
    return isITypeDef(type) ? this.getTypeClass(type as ITypeDef) : this.getTypeClass(
      getTypeDef(type.toString())
    );
  }

  createType (type: Text | string | ITypeDef, value?: any): Codec {
    // l.debug(() => ['createType', { type, value }]);

    const Type = this.createClass(type);

    return new Type(value);
  }

  getTypeClass (value: ITypeDef): Constructor {
    const Type = this.get(value);

    if (Type) {
      return Type;
    }

    switch (value.meta.info) {
      case TypeDefInfo.Compact:
        assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Compact');

        return Compact.with(
          this.getTypeClass(value.sub as ITypeDef) as Constructor<UInt>
        );
      case TypeDefInfo.Enum:
        assert(value.sub && Array.isArray(value.sub), 'Expected subtype for Enum');

        return EnumType.with(
          (value.sub as Array<ITypeDef>).reduce((result, sub, index) => {
            result[sub.meta.keyName as string] = this.getTypeClass(sub);

            return result;
          }, {} as { [index: string]: Constructor })
        );
      case TypeDefInfo.Option:
        assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Option');

        return Option.with(
          this.getTypeClass(value.sub as ITypeDef)
        );
      case TypeDefInfo.Struct:
        assert(Array.isArray(value.sub), 'Expected nested subtypes for Struct');

        return Struct.with(
          (value.sub as Array<ITypeDef>).reduce((result, sub) => {
            result[sub.meta.keyName as string] = this.getTypeClass(sub);

            return result;
          }, {} as { [index: string]: Constructor })
        );
      case TypeDefInfo.Tuple:
        assert(Array.isArray(value.sub), 'Expected nested subtypes for Tuple');

        return Tuple.with(
          (value.sub as Array<ITypeDef>).map(this.getTypeClass)
        );
      case TypeDefInfo.Vector:
        assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Vector');

        return Vector.with(
          this.getTypeClass(value.sub as ITypeDef)
        );
      case TypeDefInfo.Linkage:
        assert(value.sub && !Array.isArray(value.sub), 'Expected subtype for Linkage');
        return Linkage.withKey(
          this.getTypeClass(value.sub as ITypeDef)
        );
    }

    throw new Error(`Unable to determine type from '${value.type}'`);
  }

  validateTypes (types: Array<string>, throwError: boolean): void {
    const extractTypes = (types: Array<string>): Array<any> => {
      return types.map((type) => {
        const decoded = getTypeDef(type);

        switch (decoded.meta.info) {
          case TypeDefInfo.Plain:
            return decoded.type;

          case TypeDefInfo.Compact:
          case TypeDefInfo.Option:
          case TypeDefInfo.Vector:
            return extractTypes([(decoded.sub as ITypeDef).type]);

          case TypeDefInfo.Tuple:
            return extractTypes(
              (decoded.sub as Array<ITypeDef>).map((sub) => sub.type)
            );

          default:
            throw new Error('Unreachable');
        }
      });
    };

    const missing = flattenUniq(extractTypes(types)).filter((type) =>
      isUndefined(this.get(type))
    );

    if (missing.length !== 0) {
      const message = `Unknown types found, no types for ${missing}`;

      if (throwError) {
        throw new Error(message);
      } else {
        console.error(message);
      }
    }
  }

  // private filterOrigin (meta?: IFunctionMetadata): IFunctionArgumentMetadata[] {
  //   // FIXME should be `arg.type !== Origin`, but doesn't work...
  //   return meta
  //     ? meta.arguments.filter(({ type }) =>
  //       type.toString() !== 'Origin'
  //     )
  //     : [];
  // }
}
