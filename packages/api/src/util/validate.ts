// Copyright 2017-2019 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SiLookupTypeId } from '@polkadot/types/interfaces';
import type { StorageEntry } from '@polkadot/types/primitive/types';
import type { Registry } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';

function sig ({ lookup }: Registry, { method, section }: StorageEntry, args: SiLookupTypeId[]): string {
  return `${section}.${method}(${args.map((a) => lookup.getTypeDef(a).type).join(', ')})`;
}

function doMap (registry: Registry, creator: StorageEntry, args: unknown[]): [StorageEntry, any[]] {
  const { hashers, key } = creator.meta.type.asMap;
  const keyVec = hashers.length === 1
    ? [key]
    : registry.lookup.getSiType(key).def.asTuple.map((t) => t);

  assert(args.length === keyVec.length, () => `${sig(registry, creator, keyVec)} is a map, requiring ${keyVec.length} arguments, ${args.length} found`);

  // pass as tuple
  return [creator, args];
}

// sets up the arguments in the form of [creator, args] ready to be used in a storage
// call. Additionally, it verifies that the correct number of arguments have been passed
export function extractStorageArgs (registry: Registry, creator: StorageEntry, _args: unknown[]): [StorageEntry, any[]] | [StorageEntry] | [StorageEntry, any] {
  const args = _args.filter((arg) => !isUndefined(arg));

  if (creator.meta.type.isMap) {
    return doMap(registry, creator, args);
  }

  assert(args.length === 0, () => `${sig(registry, creator, [])} does not take any arguments, ${args.length} found`);

  // no args
  return [creator];
}
