// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntryMetadataLatest, StorageEntryTypeLatest, StorageHasher } from '../interfaces/metadata';
import { AnyJson, AnyU8a, Codec, InterfaceTypes, Registry } from '../types';

import { assert, isFunction, isString, isU8a } from '@polkadot/util';

import { AllHashers } from '@polkadot/types/interfaces/metadata/definitions';
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

const HASHER_MAP: Record<keyof typeof AllHashers, [number, boolean]> = {
  // opaque
  Blake2_128: [16, false], // eslint-disable-line @typescript-eslint/camelcase
  Blake2_128Concat: [16, true], // eslint-disable-line @typescript-eslint/camelcase
  Blake2_256: [32, false], // eslint-disable-line @typescript-eslint/camelcase
  Identity: [0, true],
  Twox128: [16, false],
  Twox256: [32, false],
  Twox64Concat: [8, true]
};

function getStorageType (type: StorageEntryTypeLatest, isOptionalLinked?: boolean): [boolean, string] {
  if (type.isPlain) {
    return [false, type.asPlain.toString()];
  } else if (type.isDoubleMap) {
    return [false, type.asDoubleMap.value.toString()];
  }

  const map = type.asMap;

  if (map.linked.isTrue) {
    const [pre, post] = isOptionalLinked
      ? ['Option<', '>']
      : ['', ''];

    return [true, `(${pre}${map.value.toString()}${post}, Linkage<${map.key.toString()}>)`];
  }

  return [false, map.value.toString()];
}

// we unwrap the type here, turning into an output usable for createType
/** @internal */
export function unwrapStorageType (type: StorageEntryTypeLatest, isOptional?: boolean): keyof InterfaceTypes {
  const [hasWrapper, outputType] = getStorageType(type, isOptional);

  return isOptional && !hasWrapper
    ? `Option<${outputType}>` as keyof InterfaceTypes
    : outputType as keyof InterfaceTypes;
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

function decodeHashers (registry: Registry, value: Uint8Array, hashers: [StorageHasher, string][]): Codec[] {
  // the storage entry is xxhashAsU8a(prefix, 128) + xxhashAsU8a(method, 128), 256 bits total
  let offset = 32;

  return hashers.reduce((result: Codec[], [hasher, type]): Codec[] => {
    const [hashLen, canDecode] = HASHER_MAP[hasher.type as 'Identity'];
    const decoded = canDecode
      ? registry.createType(type as 'Raw', value.subarray(offset + hashLen))
      : registry.createType('Raw', value.subarray(offset, offset + hashLen));

    offset += hashLen + (canDecode ? decoded.encodedLength : 0);
    result.push(decoded);

    return result;
  }, []);
}

/** @internal */
function decodeArgsFromMeta (registry: Registry, value: Uint8Array, meta?: StorageEntryMetadataLatest): Codec[] {
  if (!meta || !(meta.type.isDoubleMap || meta.type.isMap)) {
    return [];
  }

  if (meta.type.isMap) {
    const mapInfo = meta.type.asMap;

    return decodeHashers(registry, value, [
      [mapInfo.hasher, mapInfo.key.toString()]
    ]);
  }

  const mapInfo = meta.type.asDoubleMap;

  return decodeHashers(registry, value, [
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

  private _outputType: string;

  private readonly _method?: string;

  private readonly _section?: string;

  constructor (registry: Registry, value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any], override: Partial<StorageKeyExtra> = {}) {
    const { key, method, section } = decodeStorageKey(value);

    super(registry, key);

    this._method = override.method || method;
    this._section = override.section || section;
    this._outputType = StorageKey.getType(value as StorageKey);

    // decode the args (as applicable based on the key and the hashers, after all init)
    this.setMeta(StorageKey.getMeta(value as StorageKey));
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

    if (meta) {
      this._outputType = unwrapStorageType(meta.type);
    }

    try {
      this._args = decodeArgsFromMeta(this.registry, this.toU8a(true), this.meta);
    } catch (error) {
      // ignore...
    }

    return this;
  }

  /**
   * @description Returns the Human representation for this type
   */
  public toHuman (): AnyJson {
    return this._args.length
      ? this._args.map((arg) => arg.toHuman())
      : super.toHuman();
  }

  /**
   * @description Returns the raw type for this
   */
  public toRawType (): string {
    return 'StorageKey';
  }
}
