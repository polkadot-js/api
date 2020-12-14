// Copyright 2017-2019 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Type } from '@polkadot/types';
import type { StorageEntry } from '@polkadot/types/primitive/types';

import { assert, isUndefined } from '@polkadot/util';

function sig ({ method, section }: StorageEntry, ...args: Type[]): string {
  return `${section}.${method}(${args.join(', ')})`;
}

function doDoubleMap (creator: StorageEntry, args: unknown[]): [StorageEntry, [any, any]] {
  const { key1, key2 } = creator.meta.type.asDoubleMap;

  assert(args.length === 2, `${sig(creator, key1, key2)} is a doublemap, requiring 2 arguments, ${args.length} found`);

  // pass as tuple
  return [creator, args as [any, any]];
}

function doMap (creator: StorageEntry, args: unknown[]): [StorageEntry] | [StorageEntry, any] {
  const { key } = creator.meta.type.asMap;

  assert(args.length === 1, `${sig(creator, key)} is a map, requiring 1 argument, ${args.length} found`);

  // expand
  return args.length
    ? [creator, args[0]]
    : [creator];
}

// sets up the arguments in the form of [creator, args] ready to be used in a storage
// call. Additionally, it verifies that the correct number of arguments have been passed
export function extractStorageArgs (creator: StorageEntry, _args: unknown[]): [StorageEntry, [any, any]] | [StorageEntry] | [StorageEntry, any] {
  const args = _args.filter((arg) => !isUndefined(arg));

  if (creator.meta.type.isDoubleMap) {
    return doDoubleMap(creator, args);
  } else if (creator.meta.type.isMap) {
    return doMap(creator, args);
  }

  assert(args.length === 0, `${sig(creator)} does not take any arguments, ${args.length} found`);

  // no args
  return [creator];
}
