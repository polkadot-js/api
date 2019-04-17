// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert } from '@polkadot/util';
import { ArgsDef, Constructor, RegistryTypes } from '../types';
import { IFunctionMetadata, MethodFunction, ModulesWithMethods } from '../primitive/Method';
import Metadata from '../Metadata';
import { EventData } from '../type/Event';

export interface ITypeDef {
}

export default class TypeRegistry {

  protected static _TYPE_REGISTRY?: TypeRegistry;
  static get TYPE_REGISTRY (): TypeRegistry {
    assert(TypeRegistry.TYPE_REGISTRY, 'TYPE_REGISTRY is undefined, make sure it is wrapped in withRegistry()');
    return TypeRegistry.TYPE_REGISTRY as TypeRegistry;
  }

  static withRegistry (typeRegistry: TypeRegistry, wrapFn: (...args: any[]) => any) {
    TypeRegistry._TYPE_REGISTRY = typeRegistry;
    const ret = wrapFn();
    TypeRegistry._TYPE_REGISTRY = undefined;
    return ret;
  }

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
    throw new Error('todo');
  }

  injectEvents (metadata: Metadata): void {
    throw new Error('todo');
  }

  findEventType (index: string): Constructor<EventData> {
    throw new Error('todo');
  }
}
