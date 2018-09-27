// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import isFunction from '@polkadot/util/is/function';

import Bytes from './Bytes';
import { StorageFunctionMetadata } from './Metadata';

export interface StorageFunction extends StorageFunctionMetadata {
  create (arg?: any): StorageKey;
}

export type StorageFunctionWithArg = [StorageFunction, any];

function isStorageFunction (value?: any): value is StorageFunction {
  return value && isFunction(value.create);
}

// A representation of a storage key (typically hashed) in the system. It can be constructed
// by passing in a raw key or a StorageFunction with (optional) arguments.
export default class StorageKey extends Bytes {
  private _outputType: string | null;

  constructor (value: AnyU8a | StorageKey | StorageFunction | StorageFunctionWithArg = new Uint8Array(), ...args: Array<any>) {
    super(StorageKey.encode(value, args));

    this._outputType = StorageKey.getType(value as StorageKey);
  }

  static encode (value: AnyU8a | StorageKey | StorageFunction | StorageFunctionWithArg, args: Array<any>): AnyU8a {
    if (value instanceof StorageKey) {
      return value;
    } else if (isStorageFunction(value)) {
      return value.create(...args);
    } else if (Array.isArray(value)) {
      const [fn, arg] = value;

      if (isStorageFunction(fn)) {
        return fn.create(arg);
      }
    }

    return value as AnyU8a;
  }

  static getType (value: StorageKey | StorageFunction | StorageFunctionWithArg): string | null {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isStorageFunction(value)) {
      return value.type.toString();
    } else if (Array.isArray(value)) {
      const [fn] = value;

      if (isStorageFunction(fn)) {
        return fn.type.toString();
      }
    }

    return null;
  }

  get outputType (): string | null {
    return this._outputType;
  }
}
