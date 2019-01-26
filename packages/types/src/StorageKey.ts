// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { isFunction } from '@polkadot/util';

import Bytes from './Bytes';
import { StorageFunctionMetadata } from './Metadata/v0/Modules';

export interface StorageFunction {
  (arg?: any): Uint8Array;
  meta: StorageFunctionMetadata;
  method: string;
  section: string;
  toJSON: () => any;
}

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageFunction with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  private _meta: StorageFunctionMetadata | null;
  private _outputType: string | null;

  constructor (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]) {
    super(StorageKey.decodeStorageKey(value));

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._outputType = StorageKey.getType(value as StorageKey);
  }

  static decodeStorageKey (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]): Uint8Array {
    if (isFunction(value)) {
      return value();
    } else if (Array.isArray(value)) {
      const [fn, arg] = value;

      if (isFunction(fn)) {
        return fn(arg);
      }
    }

    return value as Uint8Array;
  }

  static getMeta (value: StorageKey | StorageFunction | [StorageFunction, any]): StorageFunctionMetadata | null {
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

  static getType (value: StorageKey | StorageFunction | [StorageFunction, any]): string | null {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isFunction(value)) {
      return value.meta.type.toString();
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return fn.meta.type.toString();
    }

    return null;
  }

  /**
   * @description The metadata or `null` when not available
   */
  get meta (): StorageFunctionMetadata | null {
    return this._meta;
  }

  /**
   * @description The output type, `null` when not available
   */
  get outputType (): string | null {
    return this._outputType;
  }
}
