// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ICompact, Inspect, INumber } from '@polkadot/types-codec/types';
import type { StorageEntryMetadataLatest, StorageHasher } from '../../../interfaces/metadata/index.js';
import type { StorageKey } from '../../../primitive/index.js';
import type { StorageEntry, StorageEntryIterator } from '../../../primitive/types.js';
import type { Registry } from '../../../types/index.js';

import { Raw } from '@polkadot/types-codec';
import { compactAddLength, compactStripLength, isUndefined, objectSpread, stringCamelCase, u8aConcat, u8aToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { getSiName } from '../../util/index.js';
import { getHasher } from './getHasher.js';

export interface CreateItemOptions {
  key?: Uint8Array | string;
  skipHashing?: boolean;
}

export interface CreateItemBase {
  method: string;
  prefix: string;
}

export interface CreateItemFn extends CreateItemBase {
  meta: StorageEntryMetadataLatest;
  section: string;
}

interface IterFn {
  (): Raw;
  meta: StorageEntryMetadataLatest;
}

interface RawArgs {
  args: unknown[];
  hashers: StorageHasher[];
  keys: ICompact<INumber>[];
}

export const NO_RAW_ARGS: RawArgs = {
  args: [],
  hashers: [],
  keys: []
};

/** @internal */
function filterDefined (a: unknown): boolean {
  return !isUndefined(a);
}

/** @internal */
function assertArgs ({ method, section }: CreateItemFn, { args, keys }: RawArgs): void {
  if (!Array.isArray(args)) {
    throw new Error(`Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments`);
  } else if (args.filter(filterDefined).length !== keys.length) {
    throw new Error(`Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, found [${args.join(', ')}]`);
  }
}

/** @internal */
export function createKeyRawParts (registry: Registry, itemFn: CreateItemBase, { args, hashers, keys }: RawArgs): [Uint8Array[], Uint8Array[]] {
  const count = keys.length;
  const extra = new Array<Uint8Array>(count);

  for (let i = 0; i < count; i++) {
    extra[i] = getHasher(hashers[i])(
      registry.createTypeUnsafe(registry.createLookupType(keys[i]), [args[i]]).toU8a()
    );
  }

  return [
    [
      xxhashAsU8a(itemFn.prefix, 128),
      xxhashAsU8a(itemFn.method, 128)
    ],
    extra
  ];
}

/** @internal */
export function createKeyInspect (registry: Registry, itemFn: CreateItemFn, args: RawArgs): Inspect {
  assertArgs(itemFn, args);

  const { meta } = itemFn;
  const [prefix, extra] = createKeyRawParts(registry, itemFn, args);

  let types: string[] = [];

  if (meta.type.isMap) {
    const { hashers, key } = meta.type.asMap;

    types = hashers.length === 1
      ? [`${hashers[0].type}(${getSiName(registry.lookup, key)})`]
      : registry.lookup.getSiType(key).def.asTuple.map((k, i) =>
        `${hashers[i].type}(${getSiName(registry.lookup, k)})`
      );
  }

  const names = ['module', 'method'].concat(...args.args.map((_, i) => types[i]));

  return {
    inner: prefix
      .concat(...extra)
      .map((v, i) => ({ name: names[i], outer: [v] }))
  };
}

/** @internal */
export function createKeyRaw (registry: Registry, itemFn: CreateItemBase, args: RawArgs): Uint8Array {
  const [prefix, extra] = createKeyRawParts(registry, itemFn, args);

  return u8aConcat(
    ...prefix,
    ...extra
  );
}

/** @internal */
function createKey (registry: Registry, itemFn: CreateItemFn, args: RawArgs): Uint8Array {
  assertArgs(itemFn, args);

  // always add the length prefix (underlying it is Bytes)
  return compactAddLength(
    createKeyRaw(registry, itemFn, args)
  );
}

/** @internal */
function createStorageInspect (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): (...args: unknown[]) => Inspect {
  const { meta: { type } } = itemFn;

  return (...args: unknown[]): Inspect => {
    if (type.isPlain) {
      return options.skipHashing
        ? { inner: [], name: 'wellKnown', outer: [u8aToU8a(options.key)] }
        : createKeyInspect(registry, itemFn, NO_RAW_ARGS);
    }

    const { hashers, key } = type.asMap;

    return hashers.length === 1
      ? createKeyInspect(registry, itemFn, { args, hashers, keys: [key] })
      : createKeyInspect(registry, itemFn, { args, hashers, keys: registry.lookup.getSiType(key).def.asTuple });
  };
}

/** @internal */
function createStorageFn (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): (...args: unknown[]) => Uint8Array {
  const { meta: { type } } = itemFn;
  let cacheKey: Uint8Array | null = null;

  // Can only have zero or one argument:
  //   - storage.system.account(address)
  //   - storage.timestamp.blockPeriod()
  // For higher-map queries the params are passed in as an tuple, [key1, key2]
  return (...args: unknown[]): Uint8Array => {
    if (type.isPlain) {
      if (!cacheKey) {
        cacheKey = options.skipHashing
          ? compactAddLength(u8aToU8a(options.key))
          : createKey(registry, itemFn, NO_RAW_ARGS);
      }

      return cacheKey;
    }

    const { hashers, key } = type.asMap;

    return hashers.length === 1
      ? createKey(registry, itemFn, { args, hashers, keys: [key] })
      : createKey(registry, itemFn, { args, hashers, keys: registry.lookup.getSiType(key).def.asTuple });
  };
}

/** @internal */
function createWithMeta (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta, method, prefix, section } = itemFn;
  const storageFn = createStorageFn(registry, itemFn, options) as StorageEntry;

  storageFn.inspect = createStorageInspect(registry, itemFn, options);
  storageFn.meta = meta;
  storageFn.method = stringCamelCase(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => objectSpread({ storage: { method, prefix, section } }, meta.toJSON());

  return storageFn;
}

/** @internal */
function extendHeadMeta (registry: Registry, { meta: { docs, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (...args: unknown[]) => Raw): StorageEntryIterator {
  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  const meta = registry.createTypeUnsafe<StorageEntryMetadataLatest>('StorageEntryMetadataLatest', [{
    docs,
    fallback: registry.createTypeUnsafe('Bytes', []),
    modifier: registry.createTypeUnsafe('StorageEntryModifierLatest', [1]), // required
    name,
    type: registry.createTypeUnsafe('StorageEntryTypeLatest', [type.asMap.key, 0])
  }]);

  (iterFn as IterFn).meta = meta;

  const fn = (...args: unknown[]) =>
    registry.createTypeUnsafe<StorageKey>('StorageKey', [iterFn(...args), { method, section }]);

  fn.meta = meta;

  return fn;
}

/** @internal */
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  const { meta: { type }, method, section } = itemFn;

  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (...args: unknown[]): Raw => {
    if (args.length && (type.isPlain || (args.length >= type.asMap.hashers.length))) {
      throw new Error(`Iteration of ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs arguments to be at least one less than the full arguments, found [${args.join(', ')}]`);
    }

    if (args.length) {
      if (type.isMap) {
        const { hashers, key } = type.asMap;
        const keysVec = hashers.length === 1
          ? [key]
          : registry.lookup.getSiType(key).def.asTuple;

        return new Raw(registry, createKeyRaw(registry, itemFn, { args, hashers: hashers.slice(0, args.length), keys: keysVec.slice(0, args.length) }));
      }
    }

    return new Raw(registry, createKeyRaw(registry, itemFn, NO_RAW_ARGS));
  });

  return storageFn;
}

/** @internal */
export function createFunction (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta: { type } } = itemFn;
  const storageFn = createWithMeta(registry, itemFn, options);

  if (type.isMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }

  storageFn.keyPrefix = (...args: unknown[]): Uint8Array =>
    (storageFn.iterKey && storageFn.iterKey(...args)) ||
    compactStripLength(storageFn())[1];

  return storageFn;
}
