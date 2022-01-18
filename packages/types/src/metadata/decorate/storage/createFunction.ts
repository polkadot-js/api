// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ICompact, INumber } from '@polkadot/types-codec/types';
import type { StorageEntryMetadataLatest, StorageHasher } from '../../../interfaces/metadata';
import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';

import { Raw } from '@polkadot/types-codec';
import { assert, compactAddLength, compactStripLength, isUndefined, objectSpread, stringCamelCase, stringLowerFirst, u8aConcat, u8aToU8a } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

import { StorageKey } from '../../../primitive';
import { getHasher } from './getHasher';

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
export function createKeyRaw (registry: Registry, itemFn: CreateItemBase, { args, hashers, keys }: RawArgs): Uint8Array {
  const extra = new Array<Uint8Array>(keys.length);

  for (let i = 0; i < keys.length; i++) {
    extra[i] = getHasher(hashers[i])(
      registry.createTypeUnsafe(registry.createLookupType(keys[i]), [args[i]]).toU8a()
    );
  }

  return u8aConcat(
    xxhashAsU8a(itemFn.prefix, 128),
    xxhashAsU8a(itemFn.method, 128),
    ...extra
  );
}

/** @internal */
function filterDefined (a: unknown): boolean {
  return !isUndefined(a);
}

/** @internal */
function createKey (registry: Registry, itemFn: CreateItemFn, { args, hashers, keys }: RawArgs): Uint8Array {
  const { method, section } = itemFn;

  assert(Array.isArray(args), () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments`);
  assert(args.filter(filterDefined).length === keys.length, () => `Call to ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, found [${args.join(', ')}]`);

  // as per createKey, always add the length prefix (underlying it is Bytes)
  return compactAddLength(
    createKeyRaw(registry, itemFn, { args, hashers, keys })
  );
}

/** @internal */
function createWStorageFn (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): (...args: unknown[]) => Uint8Array {
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
      : createKey(registry, itemFn, { args, hashers, keys: (registry).lookup.getSiType(key).def.asTuple });
  };
}

/** @internal */
function createWithMeta (registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry {
  const { meta, method, prefix, section } = itemFn;
  const storageFn = createWStorageFn(registry, itemFn, options) as StorageEntry;

  storageFn.meta = meta;
  storageFn.method = stringLowerFirst(method);
  storageFn.prefix = prefix;
  storageFn.section = section;

  // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
  // instances (e.g. collective) will not work since it is only matched on param meta
  storageFn.toJSON = (): any => objectSpread({ storage: { method, prefix, section } }, meta.toJSON());

  return storageFn;
}

/** @internal */
function extendHeadMeta (registry: Registry, { meta: { docs, name, type }, section }: CreateItemFn, { method }: StorageEntry, iterFn: (...args: unknown[]) => Raw): (...args: unknown[]) => StorageKey {
  const outputType = registry.createLookupType(type.asMap.key);

  // metadata with a fallback value using the type of the key, the normal
  // meta fallback only applies to actual entry values, create one for head
  (iterFn as IterFn).meta = registry.createTypeUnsafe('StorageEntryMetadataLatest', [{
    docs,
    fallback: registry.createTypeUnsafe('Bytes', []),
    modifier: registry.createTypeUnsafe('StorageEntryModifierLatest', [1]), // required
    name,
    // FIXME???
    type: registry.createTypeUnsafe('StorageEntryTypeLatest', [outputType, 0])
  }]);

  return (...args: unknown[]) =>
    registry.createTypeUnsafe('StorageKey', [iterFn(...args), { method, section }]);
}

/** @internal */
function extendPrefixedMap (registry: Registry, itemFn: CreateItemFn, storageFn: StorageEntry): StorageEntry {
  const { meta: { type }, method, section } = itemFn;

  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (...args: unknown[]): Raw => {
    assert(
      (
        (args.length === 0) ||
        (type.isMap && args.length < type.asMap.hashers.length)
      ),
      () => `Iteration ${stringCamelCase(section || 'unknown')}.${stringCamelCase(method || 'unknown')} needs arguments to be at least one less than the full arguments, found [${args.join(', ')}]`
    );

    if (args.length) {
      if (type.isMap) {
        const { hashers, key } = type.asMap;
        const keysVec = hashers.length === 1
          ? [key]
          : (registry).lookup.getSiType(key).def.asTuple;

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
