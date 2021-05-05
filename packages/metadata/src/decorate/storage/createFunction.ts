// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Codec, Registry } from '@polkadot/types/types';

import BN from 'bn.js';

import { Raw } from '@polkadot/types/codec';
import { StorageKey, Type } from '@polkadot/types/primitive';
import { assert, compactAddLength, compactStripLength, isNull, isUndefined, stringCamelCase, stringify, stringLowerFirst, u8aConcat, u8aToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { getHasher } from './getHasher';

export interface CreateItemOptions {
  key?: string;
  skipHashing?: boolean;
}

export interface CreateItemFn {
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
}

interface IterFn {
  (): Raw;
  meta: StorageEntryMetadataLatest;
}

type CreateArgType = boolean | string | number | null | BN | BigInt | Uint8Array | Codec;

type U8aHasher = (input: Uint8Array) => Uint8Array;

function createPrefixedKey ({ method, prefix }: CreateItemFn): Uint8Array {
  return u8aConcat(xxhashAsU8a(prefix, 128), xxhashAsU8a(method, 128));
}

function createKey (registry: Registry, itemFn: CreateItemFn, keys: Type[], hashers: U8aHasher[], args: CreateArgType[]): Uint8Array {
  const { method, section } = itemFn;

  assert(Array.isArray(args) && args.length === keys.length, () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, found ${stringify(args)}`);

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return compactAddLength(
    u8aConcat(
      createPrefixedKey(itemFn),
      ...keys.map((type, index): Uint8Array => {
        const arg = args[index];

        assert(!isUndefined(arg) && !isNull(arg), () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} has a null or undefined argument at position ${index}`);

        return hashers[index](registry.createType(type.toString() as 'Raw', arg).toU8a());
      })
    )
  );
}

// attach the metadata to expand to a StorageFunction
/** @internal */
function expandWithMeta ({ meta, method, prefix, section }: CreateItemFn, _storageFn: (arg?: CreateArgType | CreateArgType[]) => Uint8Array): StorageEntry {
  const storageFn = _storageFn as StorageEntry;

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => ({
    ...(meta.toJSON() as Record<string, unknown>),
    storage: { method, prefix, section }
  });

  return storageFn;
}

/** @internal */
function extendHeadMeta (registry: Registry, { meta: { documentation, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (arg?: any) => Raw): (arg?: any) => StorageKey {
  const outputType = type.isMap
    ? type.asMap.key.toString()
    : type.asDoubleMap.key1.toString();

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = registry.createType('StorageEntryMetadataLatest', {
    documentation,
    fallback: registry.createType('Bytes', registry.createType(outputType as 'Raw').toHex()),
    modifier: registry.createType('StorageEntryModifierLatest', 1), // required
    name,
    type: registry.createType('StorageEntryTypeLatest', registry.createType('Type', type.isMap ? type.asMap.key : type.asDoubleMap.key1), 0)
  });

  const prefixKey = registry.createType('StorageKey', iterFn, { method, section });

  return (arg?: any) =>
    !isUndefined(arg) && !isNull(arg)
      ? registry.createType('StorageKey', iterFn(arg), { method, section })
      : prefixKey;
}

// attach the full list hashing for prefixed maps
/** @internal */
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  const { meta: { type } } = itemFn;

  // FIXME NMap support
  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (arg?: any): Raw => {
    assert(type.isDoubleMap || isUndefined(arg), 'Filtering arguments for keys/entries are only valid on double maps');

    return new Raw(
      registry,
      type.isDoubleMap && !isUndefined(arg) && !isNull(arg)
        ? u8aConcat(
          createPrefixedKey(itemFn),
          getHasher(type.asDoubleMap.hasher)(
            registry.createType(type.asDoubleMap.key1.toString() as 'Raw', arg).toU8a()
          )
        )
        : createPrefixedKey(itemFn)
    );
  });

  return storageFn;
}

/** @internal */
export function createFunction (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta: { type } } = itemFn;

  // Can only have zero or one argument:
  //   - storage.system.account(address)
  //   - storage.timestamp.blockPeriod()
  // For higher-map queries the params are passed in as an tuple, [key1, key2]
  const storageFn = expandWithMeta(itemFn, (arg?: CreateArgType | CreateArgType[]) =>
    type.isPlain
      ? options.skipHashing
        ? compactAddLength(u8aToU8a(options.key))
        : createKey(registry, itemFn, [], [], [])
      : type.isMap
        ? createKey(registry, itemFn, [type.asMap.key], [getHasher(type.asMap.hasher)], [arg as CreateArgType])
        : type.isDoubleMap
          ? createKey(registry, itemFn, [type.asDoubleMap.key1, type.asDoubleMap.key2], [getHasher(type.asDoubleMap.hasher), getHasher(type.asDoubleMap.key2Hasher)], arg as CreateArgType[])
          : createKey(registry, itemFn, type.asNMap.keyVec, type.asNMap.hashers.map((h) => getHasher(h)), arg as CreateArgType[])
  );

  // FIXME NMap support
  if (type.isMap || type.isDoubleMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (arg?: any): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(arg)) ||
    compactStripLength(storageFn())[1];

  return storageFn;
}
