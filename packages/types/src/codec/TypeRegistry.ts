// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';
import { ArgsDef, Constructor, RegistryTypes } from '../types';
import { IFunctionArgumentMetadata, IFunctionMetadata, MethodFunction, ModulesWithMethods } from '../primitive/Method';
import Metadata from '../Metadata';
import { EventData } from '../type/Event';

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
  info: TypeDefInfo;
  meta?: {
    enumKey?: string;
  };
  module: string;
  displayName: string;
  sub?: ITypeDef | Array<ITypeDef>;
}

export default class TypeRegistry {

  protected static _TYPE_REGISTRY?: TypeRegistry;
  static get TYPE_REGISTRY (): TypeRegistry {
    assert(TypeRegistry._TYPE_REGISTRY, 'TYPE_REGISTRY is undefined, make sure it is wrapped in withRegistry()');
    return TypeRegistry._TYPE_REGISTRY as TypeRegistry;
  }

  static withRegistry (typeRegistry: TypeRegistry, wrapFn: (...args: any[]) => any) {
    const origin = TypeRegistry._TYPE_REGISTRY;
    TypeRegistry._TYPE_REGISTRY = typeRegistry;
    const ret = wrapFn();
    TypeRegistry._TYPE_REGISTRY = origin;
    return ret;
  }

  private _registry: Map<string, Constructor> = new Map();

  protected EventTypes: { [index: string]: Constructor<EventData> } = {};

  register (type: Constructor | RegistryTypes): void;
  register (name: string, type: Constructor): void;
  register (arg1: string | Constructor | RegistryTypes, arg2?: Constructor): void {
    throw new Error('todo');
  }

  get (name: string): Constructor | undefined {
    throw new Error('todo');
  }

  getOrThrow (name: string, msg?: string): Constructor {
    throw new Error('todo');
  }

  injectMethods (moduleMethods: ModulesWithMethods): void {
    throw new Error('todo');
  }

  findFunction (callIndex: string): MethodFunction {
    throw new Error('todo');
  }

  getArgsDef (meta: IFunctionMetadata): ArgsDef {
    return this.filterOrigin(meta).reduce((result, { name, type }) => {
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

  private filterOrigin (meta?: IFunctionMetadata): IFunctionArgumentMetadata[] {
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    return meta
      ? meta.arguments.filter(({ type }) =>
        type.toString() !== 'Origin'
      )
      : [];
  }

  private getTypeClass (typeDef: ITypeDef): Constructor {
    throw new Error('todo');
  }
}
