// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapTypeLatest, MapTypeLatest } from '@polkadot/types/interfaces';

import { StorageEntry, unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { assert } from '@polkadot/util';

function doDoubleMap (creator: StorageEntry, { key1, key2 }: DoubleMapTypeLatest, type: string, args: any[]): [StorageEntry, [any, any]] {
  assert(args.length === 2, `${creator.section}.${creator.method}(${key1}, ${key2}): ${type} is a doublemap, requiring 2 arguments, ${args.length} found`);

  // pass as tuple
  return [creator, args as [any, any]];
}

function doMap (creator: StorageEntry, { key, linked }: MapTypeLatest, type: string, args: any[]): [StorageEntry] | [StorageEntry, any] {
  const sig = `${creator.section}.${creator.method}(${key}): ${type}`;

  linked.isTrue
    ? assert(args.length <= 1, `${sig} is a linked map, requiring either 0 arguments (retrieving all) or 1 argument, ${args.length} found`)
    : assert(args.length === 1, `${sig} is a map, requiring 1 argument, ${args.length} found`);

  // expand
  return args.length
    ? [creator, args[0]]
    : [creator];
}

// sets up the arguments in the form of [creator, args] ready to be used in a storage
// call. Additionally, it verifies that the correct number of arguments have been passed
export function extractStorageArgs (creator: StorageEntry, args: any[]): any[] {
  const { meta, method, section } = creator;
  const type = unwrapStorageType(meta.type);

  if (meta.type.isDoubleMap) {
    return doDoubleMap(creator, meta.type.asDoubleMap, type, args);
  } else if (meta.type.isMap) {
    return doMap(creator, meta.type.asMap, type, args);
  }

  assert(args.length === 0, `${section}.${method}(): ${type} does not take any arguments, ${args.length} found`);

  // no args
  return [creator];
}
