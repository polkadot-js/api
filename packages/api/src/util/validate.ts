// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageEntry, unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { assert } from '@polkadot/util';

// sets up the arguments in the form of [creator, args] ready to be used in a storage
// call. Additionally, it verifies that the correct number of arguments have been passed
export function extractStorageArgs (creator: StorageEntry, args: any[]): any[] {
  const { meta, method, section } = creator;
  const type = unwrapStorageType(meta.type);

  if (meta.type.isDoubleMap) {
    const dmType = meta.type.asDoubleMap;
    assert(args.length === 2, `${section}.${method}(${dmType.key1}, ${dmType.key2}): ${type} is a doublemap, requiring 2 arguments, ${args.length} found`);

    return [creator, args];
  } else if (meta.type.isMap) {
    const mType = meta.type.asMap;
    const sig = `${section}.${method}(${mType.key}): ${type}`;

    mType.linked.isTrue
      ? assert(args.length <= 1, `${sig} is a linked map, requiring either no arguments (retrieving all recursively) or a single argument, ${args.length} found`)
      : assert(args.length === 1, `${sig} is a map, requiring 1 argument, ${args.length} found`);

    return [creator, ...args];
  }

  assert(args.length === 0, `${section}.${method}(): ${type} does not take any arguments, ${args.length} found`);

  return [creator];
}
