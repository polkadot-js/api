// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest, StorageEntryTypeLatest, StorageHasher } from '../interfaces/metadata';
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

/** @internal */
function decodeStorageKey (value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any]): Decoded {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
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

function decodeHashers (registry: Registry, encoded: Uint8Array, hashers: [StorageHasher, string][]): Codec[] {
  let offset = 0;

  return hashers.reduce((result: Codec[], [hasher, type]): Codec[] => {
    const decoded = hasher.isTwox64Concat
      ? registry.createType(type as any, encoded.subarray(offset + 8))
      : registry.createType('Null');

    offset += hasher.isTwox64Concat ? (8 + decoded.encodedLength) : 0;
    result.push(decoded);

    return result;
  }, []);
}

/** @internal */
function decodeArgsFromMeta (registry: Registry, value: Uint8Array, meta?: StorageEntryMetadataLatest): Codec[] {
  if (!meta || !(meta.type.isDoubleMap || meta.type.isMap)) {
    return [];
  }

  // the prefix is xxhashAsU8a(prefix, 128) + xxhashAsU8a(method, 128), 256 bits total
  const encoded = value.subarray(32);

  if (meta.type.isMap) {
    const mapInfo = meta.type.asMap;

    return decodeHashers(registry, encoded, [
      [mapInfo.hasher, mapInfo.value.toString()]
    ]);
  }

  const mapInfo = meta.type.asDoubleMap;

  return decodeHashers(registry, encoded, [
    [mapInfo.hasher, mapInfo.key1.toString()],
    [mapInfo.key2Hasher, mapInfo.key2.toString()]
  ]);
}

/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */
export default class StorageKey extends Bytes {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore This is assigned via this.decodeArgsFromMeta()
  private _args: Codec[];

  private _meta?: StorageEntryMetadataLatest;

  private readonly _method?: string;

  private readonly _outputType: string;

  private readonly _section?: string;

  constructor (registry: Registry, value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any], override: Partial<StorageKeyExtra> = {}) {
    const { key, method, section } = decodeStorageKey(value);

    super(registry, key);

    this._meta = StorageKey.getMeta(value as StorageKey);
    this._method = override.method || method;
    this._outputType = StorageKey.getType(value as StorageKey);
    this._section = override.section || section;

    // decode the args (as applicable based on the key and the hashers, after all init)
    this.decodeArgsFromMeta();
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

  public static getType (value: StorageKey | StorageEntry | [StorageEntry, any]): string {
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

    // If we have no type set, default to Raw
    return 'Raw';
  }

  /**
   * @description Return the decoded arguments (applicable to map/doublemap with decodable values)
   */
  public get args (): Codec[] {
    return this._args;
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
   * @description The output type
   */
  public get outputType (): string {
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

    this.decodeArgsFromMeta();

    return this;
  }

  /**
   * @description Decode the args embedded in the key (assuming we have decodable hashers)
   */
  public decodeArgsFromMeta (meta?: StorageEntryMetadataLatest): this {
    this._args = decodeArgsFromMeta(this.registry, this.toU8a(true), meta || this.meta);

    return this;
  }
}
