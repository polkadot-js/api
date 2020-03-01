// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest, StorageEntryTypeLatest } from '../interfaces/metadata';
import { AnyU8a, Codec, InterfaceTypes, Registry } from '../types';

import { assert, isFunction, isString, isU8a } from '@polkadot/util';

import Bytes from './Bytes';

export interface StorageEntry {
  (arg?: any): Uint8Array;
  iterKey?: Uint8Array & Codec;
  keyPrefix: Uint8Array;
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

// we unwrap the type here, turning into an output usable for createType
/** @internal */
export function unwrapStorageType (type: StorageEntryTypeLatest): keyof InterfaceTypes {
  if (type.isPlain) {
    return type.asPlain.toString() as keyof InterfaceTypes;
  } else if (type.isDoubleMap) {
    return type.asDoubleMap.value.toString() as keyof InterfaceTypes;
  }

  const map = type.asMap;

  if (map.linked.isTrue) {
    return `(${map.value.toString()}, Linkage<${map.key.toString()}>)` as keyof InterfaceTypes;
  }

  return map.value.toString() as keyof InterfaceTypes;
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

  /** @internal */
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

      if (fn.meta) {
        return unwrapStorageType(fn.meta.type);
      }
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

  /**
   * @description Sets the meta for this key
   */
  public setMeta (meta?: StorageEntryMetadataLatest): this {
    this._meta = meta;

    return this;
  }

  /**
   * @description Sets the output type for this storage key
   */
  public setOutputType (outputType?: string): this {
    this._outputType = outputType;

    return this;
  }
}
