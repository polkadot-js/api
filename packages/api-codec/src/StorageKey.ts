// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { StorageFunctionMetadata, StorageFunctionType } from './Metadata';
import Bytes from './Bytes';

export interface StorageFunction extends StorageFunctionMetadata {
  create (arg?: any): Uint8Array;
}

type StorageFunctionWithArg = [StorageFunction, any];

const DEFAULT_TYPE = new StorageFunctionType(0, 'Bytes');

// A representation of a storage key (typically hashed) in the system. It can be constructed
// by passing in a raw key or a StorageFunction with (optional) arguments.
export default class StorageKey extends Bytes {
  private _outputType: StorageFunctionType;

  constructor (value?: AnyU8a | StorageFunctionWithArg, outputType?: StorageFunctionType) {
    super(StorageKey.encode(value));

    this._outputType = outputType
      ? outputType
      : Array.isArray(value)
        ? (value[0] as StorageFunction).type
        : DEFAULT_TYPE;
  }

  static encode (value?: AnyU8a | StorageFunctionWithArg): AnyU8a {
    if (Array.isArray(value)) {
      const [fn, ...args] = value as StorageFunctionWithArg;

      return fn.create(...args);
    }

    return value as AnyU8a;
  }

  get outputType (): string {
    return this._outputType.toString();
  }
}
