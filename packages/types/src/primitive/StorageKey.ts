// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, StorageModifier } from '../types';

import { isFunction } from '@polkadot/util';

import { ITypeDef } from '../codec/TypeRegistry';
import Bytes from './Bytes';

export interface IMapType {
  key: ITypeDef;
  value: ITypeDef;
  isLinked: boolean;
}

export interface IDoubleMapType {
  key1: ITypeDef;
  key2: ITypeDef;
  value: ITypeDef;
  keyHasher: string;
}
export interface IStorageFunctionType {
  isMap: boolean;
  isLinked: boolean;
  isDoubleMap: boolean;
  asMap (): IMapType;
  asType (): ITypeDef;
  asDoubleMap (): IDoubleMapType;
}

export interface IStorageFunctionMetadata {
  name: string;
  modifier: StorageModifier;
  type: IStorageFunctionType;
  fallback: Bytes;
  documentation: string[];
}

export interface StorageFunction {
  (arg?: any): Uint8Array;
  meta: IStorageFunctionMetadata;
  method: string;
  section: string;
  toJSON: () => any;
  headKey?: Uint8Array;
}

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageFunction with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  private _meta: IStorageFunctionMetadata | null;
  private _outputType: ITypeDef | null;

  constructor (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]) {
    super(StorageKey.decodeStorageKey(value));

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._outputType = StorageKey.getType(value as StorageKey);
  }

  static decodeStorageKey (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]): Uint8Array {
    if (isFunction(value)) {
      return value();
    } else if (Array.isArray(value)) {
      const [fn, ...arg] = value;

      if (isFunction(fn)) {
        return fn(...arg);
      }
    }

    return value as Uint8Array;
  }

  static getMeta (value: StorageKey | StorageFunction | [StorageFunction, any]): IStorageFunctionMetadata | null {
    if (value instanceof StorageKey) {
      return value.meta;
    } else if (isFunction(value)) {
      return value.meta;
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return fn.meta;
    }

    return null;
  }

  static getType (value: StorageKey | StorageFunction | [StorageFunction, any]): ITypeDef | null {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isFunction(value)) {
      return value.meta.type.asType();
    } else if (Array.isArray(value)) {
      const [fn] = value;
      if (fn.meta.type.isMap) {
        return fn.meta.type.asMap().value;
      } else {
        return fn.meta.type.asType();
      }
    }

    return null;
  }

  /**
   * @description The metadata or `null` when not available
   */
  get meta (): IStorageFunctionMetadata | null {
    return this._meta;
  }

  /**
   * @description The output type, `null` when not available
   */
  get outputType (): ITypeDef | null {
    return this._outputType;
  }
}
