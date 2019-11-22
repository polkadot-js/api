// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest } from '../interfaces/metadata';
import { AnyU8a, Codec, Registry } from '../types';

import { assert, isFunction, isString, isU8a } from '@polkadot/util';

import Bytes from './Bytes';

export interface StorageEntry {
  (arg?: any): Uint8Array;
  headKey?: Uint8Array;
  meta: StorageEntryMetadataLatest;
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

interface StorageKeyExtra {
  method: string;
  section: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Text = String & Codec;

interface StorageType {
  asDoubleMap: {
    value: Text;
  };
  asMap: {
    linked: { isTrue: boolean };
    key: Text;
    value: Text;
  };
  asPlain: Text;
  isDoubleMap: boolean;
  isMap: boolean;
  isPlain: boolean;
}

// we unwrap the type here, turning into an output usable for createType
export function unwrapStorageType (type: StorageType): string {
  if (type.isDoubleMap) {
    return `DoubleMap<${type.asDoubleMap.value.toString()}>`;
  }

  if (type.isMap) {
    if (type.asMap.linked.isTrue) {
      return `(${type.asMap.value.toString()}, Linkage<${type.asMap.key.toString()}>)`;
    }

    return type.asMap.value.toString();
  }

  return type.asPlain.toString();
}

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  private _meta?: StorageEntryMetadataLatest;

  private _method?: string;

  private _outputType?: string;

  private _section?: string;

  constructor (registry: Registry, value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any], override: Partial<StorageKeyExtra> = {}) {
    const { key, method, section } = StorageKey.decodeStorageKey(value);

    super(registry, key);

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._method = override.method || method;
    this._outputType = StorageKey.getType(value as StorageKey);
    this._section = override.section || section;
  }

  public static decodeStorageKey (value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any]): Decoded {
    if (value instanceof StorageKey) {
      return {
        key: value,
        method: value.method,
        section: value.section
      };
    } else if (!value || isString(value) || isU8a(value)) {
      // let Bytes handle these inputs
      return { key: value };
    } else if (isFunction(value)) {
      return {
        key: value(),
        method: value.method,
        section: value.section
      };
    } else if (Array.isArray(value)) {
      const [fn, ...arg]: [StorageEntry, ...any[]] = value as any;

      assert(isFunction(fn), 'Expected function input for key construction');

      return {
        key: fn(...arg),
        method: fn.method,
        section: fn.section
      };
    }

    throw new Error(`Unable to convert input ${value} to StorageKey`);
  }

  public static getMeta (value: StorageKey | StorageEntry | [StorageEntry, any]): StorageEntryMetadataLatest | undefined {
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

  public static getType (value: StorageKey | StorageEntry | [StorageEntry, any]): string | undefined {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isFunction(value)) {
      return unwrapStorageType(value.meta.type);
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return unwrapStorageType(fn.meta.type);
    }

    return undefined;
  }

  /**
   * @description The metadata or `undefined` when not available
   */
  public get meta (): StorageEntryMetadataLatest | undefined {
    return this._meta;
  }

  /**
   * @description The key method or `undefined` when not specified
   */
  public get method (): string | undefined {
    return this._method;
  }

  /**
   * @description The output type, `null` when not available
   */
  public get outputType (): string | undefined {
    return this._outputType;
  }

  /**
   * @description The key section or `undefined` when not specified
   */
  public get section (): string | undefined {
    return this._section;
  }
}
