// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import { assert, isFunction, isString, isU8a } from '@plugnet/util';

import Bytes from './Bytes';
import { StorageFunctionMetadata as MetaV4 } from '../Metadata/v4/Storage';

export interface StorageFunction {
  (arg?: any): Uint8Array;
  meta: MetaV4;
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
  private _meta?: MetaV4;
  private _outputType?: string;

  constructor (value?: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]) {
    super(StorageKey.decodeStorageKey(value));

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._outputType = StorageKey.getType(value as StorageKey);
  }

  static decodeStorageKey (value?: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]): Uint8Array | string | undefined {
    if (!value || isU8a(value) || isString(value)) {
      // let Bytes handle these inputs
      return value;
    } else if (isFunction(value)) {
      return value();
    } else if (Array.isArray(value)) {
      const [fn, ...arg] = value;

      assert(isFunction(fn), 'Expected function input for key construction');

      return (fn as Function)(...arg);
    }

    throw new Error(`Unable to convert input ${value} to StorageKey`);
  }

  static getMeta (value: StorageKey | StorageFunction | [StorageFunction, any]): MetaV4 | undefined {
    if (value instanceof StorageKey) {
      return value.meta;
    } else if (isFunction(value)) {
      return value.meta;
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return fn.meta;
    }

    return undefined;
  }

  static getType (value: StorageKey | StorageFunction | [StorageFunction, any]): string | undefined {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isFunction(value)) {
      return value.meta.type.toString();
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return fn.meta.type.toString();
    }

    return undefined;
  }

  /**
   * @description The metadata or `null` when not available
   */
  get meta (): MetaV4 | undefined {
    return this._meta;
  }

  /**
   * @description The output type, `null` when not available
   */
  get outputType (): string | undefined {
    return this._outputType;
  }
}
