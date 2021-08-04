// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { StorageEntryMetadataLatest, StorageHasher } from '../../../interfaces/metadata';
import type { SiLookupTypeId } from '../../../interfaces/scaleInfo';
import type { StorageEntry } from '../../../primitive/types';
import type { Codec, Registry } from '../../../types';

import { assert, compactAddLength, compactStripLength, isUndefined, stringCamelCase, stringLowerFirst, u8aConcat, u8aToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { Raw } from '../../../codec';
import { StorageKey } from '../../../primitive';
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
function createKeyRaw (registry: Registry, itemFn: CreateItemFn, keys: SiLookupTypeId[], hashers: StorageHasher[], args: Arg[]): Uint8Array {
  return u8aConcat(
    xxhashAsU8a(itemFn.prefix, 128),
    xxhashAsU8a(itemFn.method, 128),
    ...keys.map((type, index) =>
      getHasher(hashers[index])(
        registry.createType(registry.createLookupType(type) as 'Raw', args[index]).toU8a()
      )
    )
  );
}

/** @internal */
function createKey (registry: Registry, itemFn: CreateItemFn, keys: SiLookupTypeId[], hashers: StorageHasher[], args: Arg[]): Uint8Array {
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
function extendHeadMeta (registry: Registry, { meta: { docs, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (...args: unknown[]) => Raw): (...args: unknown[]) => StorageKey {
  const outputType = registry.createLookupType(type.asMap.key);

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = registry.createType('StorageEntryMetadataLatest', {
    docs,
    fallback: registry.createType('Bytes'),
    modifier: registry.createType('StorageEntryModifierLatest', 1), // required
    name,
    // FIXME???
    type: registry.createType('StorageEntryTypeLatest', outputType, 0)
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
        (type.isMap && args.length === (type.asMap.hashers.length - 1))
      ),
      () => `Iteration ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs arguments to be one less than the full arguments, found [${args.join(', ')}]`
    );

    if (args.length) {
      if (type.isMap) {
        const si = registry.lookup.getSiType(type.asMap.key);
        const keys = si.def.isTuple
          ? [...si.def.asTuple.map((t) => t)]
          : [type.asMap.key];
        const hashers = [...type.asMap.hashers];

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
  const storageFn = expandWithMeta(itemFn, (arg?: Arg | Arg[]): Uint8Array => {
    if (type.isMap) {
      const si = registry.lookup.getSiType(type.asMap.key);

      return si.def.isTuple
        ? createKey(registry, itemFn, si.def.asTuple.map((t) => t), type.asMap.hashers, arg as Arg[])
        : createKey(registry, itemFn, [type.asMap.key], type.asMap.hashers, arg as Arg[]);
    } else if (options.skipHashing) {
      return compactAddLength(u8aToU8a(options.key));
    } else {
      return createKey(registry, itemFn, [], [], []);
    }
  });

  if (type.isMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (...args: unknown[]): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(...args)) ||
    compactStripLength(storageFn())[1];

  return storageFn;
}
