// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { StorageFunctionMetadata } from './Metadata';
import Bytes from './Bytes';

export interface StorageFunction extends StorageFunctionMetadata {
  (arg?: any): Uint8Array;
}

type StorageFunctionWithArg = [StorageFunction, any];

// A representation of a storage key (typically hashed) in the system. It can be constructed
// by passing it a raw key or a StorageFunction with (optional) arguments.
export default class StorageKey extends Bytes {
  constructor (value?: AnyU8a | StorageFunctionWithArg) {
    super(StorageKey.encode(value));
  }

  static encode (value?: AnyU8a | StorageFunctionWithArg): AnyU8a {
    if (Array.isArray(value)) {
      const [fn, ...args] = value as StorageFunctionWithArg;

      return fn(...args);
    }

    return value as AnyU8a;
  }
}
