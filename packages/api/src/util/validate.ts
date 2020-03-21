// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { Type } from '@polkadot/types';

import { assert, isUndefined } from '@polkadot/util';

function sig ({ method, section }: StorageEntry, ...args: Type[]): string {
  return `${section}.${method}(${args.join(', ')})`;
}

function doDoubleMap (creator: StorageEntry, args: any[]): [StorageEntry, [any, any]] {
  const { key1, key2 } = creator.meta.type.asDoubleMap;

  assert(args.length === 2, `${sig(creator, key1, key2)} is a doublemap, requiring 2 arguments, ${args.length} found`);

  // pass as tuple
  return [creator, args as [any, any]];
}

function doMap (creator: StorageEntry, args: any[]): [StorageEntry] | [StorageEntry, any] {
  const { key, linked } = creator.meta.type.asMap;

  linked.isTrue
    ? assert(args.length <= 1, `${sig(creator, key)} is a linked map, requiring either 0 arguments (retrieving all) or 1 argument, ${args.length} found`)
    : assert(args.length === 1, `${sig(creator, key)} is a map, requiring 1 argument, ${args.length} found`);

  // expand
  return args.length
    ? [creator, args[0]]
    : [creator];
}

// sets up the arguments in the form of [creator, args] ready to be used in a storage
// call. Additionally, it verifies that the correct number of arguments have been passed
export function extractStorageArgs (creator: StorageEntry, _args: any[]): any[] {
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
