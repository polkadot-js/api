// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isFunction, isString, isU8a } from '@polkadot/util';

import { StorageEntryMetadata as MetaV6 } from '../Metadata/v6/Storage';
import { AnyU8a } from '../types';
import Bytes from './Bytes';

export interface StorageEntry {
  (arg?: any): Uint8Array;
  headKey?: Uint8Array;
  meta: MetaV6;
  method: string;
  prefix: string;
  section: string;
  toJSON: () => any;
}

interface Decoded {
  key?: Uint8Array | string;
  method?: string;
  section?: string;
}

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  private _meta?: MetaV6;
  private _method?: string;
  private _outputType?: string;
  private _section?: string;

  constructor (value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any]) {
    const { key, method, section } = StorageKey.decodeStorageKey(value);

    super(key);

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._method = method;
    this._outputType = StorageKey.getType(value as StorageKey);
    this._section = section;
  }

  static decodeStorageKey (value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any]): Decoded {
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
      const [fn, ...arg]: [StorageEntry, ...Array<any>] = value as any;

      assert(isFunction(fn), 'Expected function input for key construction');

      return {
        key: fn(...arg),
        method: fn.method,
        section: fn.section
      };
    }

    throw new Error(`Unable to convert input ${value} to StorageKey`);
  }

  static getMeta (value: StorageKey | StorageEntry | [StorageEntry, any]): MetaV6 | undefined {
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

  static getType (value: StorageKey | StorageEntry | [StorageEntry, any]): string | undefined {
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
  get meta (): MetaV6 | undefined {
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
