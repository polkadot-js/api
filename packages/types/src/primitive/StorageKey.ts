// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isFunction, isString, isU8a } from '@plugnet/util';

import { StorageFunctionMetadata as MetaV4 } from '../Metadata/v4/Storage';
import { AnyU8a } from '../types';
import Bytes from './Bytes';

export interface StorageFunction {
  (arg?: any): Uint8Array;
  headKey?: Uint8Array;
  meta: MetaV4;
  method: string;
  section: string;
  toJSON: () => any;
}

type Decoded = {
  key?: Uint8Array | string;
  method?: string;
  section?: string;
};

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageFunction with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  private _meta?: MetaV4;
  private _method?: string;
  private _outputType?: string;
  private _section?: string;

  constructor (value?: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]) {
    const { key, method, section } = StorageKey.decodeStorageKey(value);

    super(key);

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._method = method;
    this._outputType = StorageKey.getType(value as StorageKey);
    this._section = section;
  }

  static decodeStorageKey (value?: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]): Decoded {
    if (value instanceof StorageKey) {
      return {
        key: value,
        method: value.method,
        section: value.section
      };
    } else if (!value || isString(value) || isU8a(value)) {
      // let Bytes handle these inputs
      return {
        key: value
      };
    } else if (isFunction(value)) {
      return {
        key: value(),
        method: value.method,
        section: value.section
      };
    } else if (Array.isArray(value)) {
      const [fn, ...arg]: [StorageFunction, ...Array<any>] = value as any;

      assert(isFunction(fn), 'Expected function input for key construction');

      return {
        key: fn(...arg),
        method: fn.method,
        section: fn.section
      };
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
   * @description The metadata or `undefined` when not available
   */
  get meta (): MetaV4 | undefined {
    return this._meta;
  }

  /**
   * @description The key method or `undefined` when not specified
   */
  get method (): string | undefined {
    return this._method;
  }

  /**
   * @description The output type, `null` when not available
   */
  get outputType (): string | undefined {
    return this._outputType;
  }

  /**
   * @description The key section or `undefined` when not specified
   */
  get section (): string | undefined {
    return this._section;
  }
}
