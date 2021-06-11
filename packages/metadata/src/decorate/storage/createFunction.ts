// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest, StorageHasher } from '@polkadot/types/interfaces/metadata';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Codec, Registry } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';

import { Raw } from '@polkadot/types/codec';
import { StorageKey, Type } from '@polkadot/types/primitive';
import { assert, compactAddLength, compactStripLength, isUndefined, stringCamelCase, stringLowerFirst, u8aConcat, u8aToU8a } from '@polkadot/util';
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

type Arg = boolean | string | number | null | BN | BigInt | Uint8Array | Codec;

/** @internal */
function createKeyRaw (registry: Registry, itemFn: CreateItemFn, keys: Type[], hashers: StorageHasher[], args: Arg[]): Uint8Array {
  return u8aConcat(
    xxhashAsU8a(itemFn.prefix, 128),
    xxhashAsU8a(itemFn.method, 128),
    ...keys.map((type, index) =>
      getHasher(hashers[index])(
        registry.createType(type.toString() as 'Raw', args[index]).toU8a()
      )
    )
  );
}

/** @internal */
function createKey (registry: Registry, itemFn: CreateItemFn, keys: Type[], hashers: StorageHasher[], args: Arg[]): Uint8Array {
  const { method, section } = itemFn;

  assert(Array.isArray(args), () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, provided in tuple format`);
  assert(args.filter((a) => !isUndefined(a)).length === keys.length, () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, found [${args.join(', ')}]`);

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return compactAddLength(
    createKeyRaw(registry, itemFn, keys, hashers, args)
  );
}

/** @internal */
function expandWithMeta ({ meta, method, prefix, section }: CreateItemFn, _storageFn: (arg?: Arg | Arg[]) => Uint8Array): StorageEntry {
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
function extendHeadMeta (registry: Registry, { meta: { documentation, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (...args: unknown[]) => Raw): (...args: unknown[]) => StorageKey {
  const outputType = type.isMap
    ? type.asMap.key
    : type.isDoubleMap
      ? type.asDoubleMap.key1
      : type.asNMap.keyVec[0];

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = registry.createType('StorageEntryMetadataLatest', {
    documentation,
    fallback: registry.createType('Bytes', registry.createType(outputType.toString() as 'Raw').toHex()),
    modifier: registry.createType('StorageEntryModifierLatest', 1), // required
    name,
    type: registry.createType('StorageEntryTypeLatest', registry.createType('Type', outputType), 0)
  });

  return (...args: unknown[]) =>
    registry.createType('StorageKey', iterFn(...args), { method, section });
}

/** @internal */
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  const { meta: { type }, method, section } = itemFn;

  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (...args: unknown[]): Raw => {
    assert(
      (
        (args.length === 0) ||
        (type.isDoubleMap && args.length === 1) ||
        (type.isNMap && args.length === (type.asNMap.hashers.length - 1))
      ),
      () => `Iteration ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs arguments to be one less than the full arguments, found [${args.join(', ')}]`
    );

    if (args.length) {
      if (type.isDoubleMap) {
        return new Raw(registry, createKeyRaw(registry, itemFn, [type.asDoubleMap.key1], [type.asDoubleMap.hasher], args as Arg[]));
      } else if (type.isNMap) {
        const keys = [...type.asNMap.keyVec];
        const hashers = [...type.asNMap.hashers];

        // remove the last entry
        keys.pop();
        hashers.pop();

        return new Raw(registry, createKeyRaw(registry, itemFn, keys, hashers, args as Arg[]));
      }
    }

    return new Raw(registry, createKeyRaw(registry, itemFn, [], [], []));
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
  const storageFn = expandWithMeta(itemFn, (arg?: Arg | Arg[]) =>
    type.isPlain
      ? options.skipHashing
        ? compactAddLength(u8aToU8a(options.key))
        : createKey(registry, itemFn, [], [], [])
      : type.isMap
        ? createKey(registry, itemFn, [type.asMap.key], [type.asMap.hasher], [arg as Arg])
        : type.isDoubleMap
          ? createKey(registry, itemFn, [type.asDoubleMap.key1, type.asDoubleMap.key2], [type.asDoubleMap.hasher, type.asDoubleMap.key2Hasher], arg as Arg[])
          : createKey(registry, itemFn, type.asNMap.keyVec, type.asNMap.hashers, arg as Arg[])
  );

  if (type.isMap || type.isDoubleMap || type.isNMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (...args: unknown[]): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(...args)) ||
    compactStripLength(storageFn())[1];

  return storageFn;
}
