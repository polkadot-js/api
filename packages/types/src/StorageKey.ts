// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import isFunction from '@polkadot/util/is/function';
import toU8a from '@polkadot/util/u8a/toU8a';

import U8a from './codec/U8a';
import Bytes from './Bytes';
import { StorageFunctionMetadata } from './Metadata';

export interface StorageFunction {
  (arg?: any): Uint8Array;
  meta: StorageFunctionMetadata;
  toJSON: () => any;
}

// A representation of a storage key (typically hashed) in the system. It can be constructed
// by passing in a raw key or a StorageFunction with (optional) arguments.
export default class StorageKey extends Bytes {
  private _outputType: string | null;

  constructor (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]) {
    super(StorageKey.encode(value));

    this._outputType = StorageKey.getType(value as StorageKey);
  }

  static encode (value: AnyU8a | StorageKey | StorageFunction | [StorageFunction, any]): Uint8Array {
    if (value instanceof StorageKey || value instanceof U8a) {
      return value.raw;
    } else if (isFunction(value)) {
      return value();
    } else if (Array.isArray(value)) {
      const [fn, arg] = value;

      if (isFunction(fn)) {
        return fn(arg);
      }
    }

    return toU8a(value);
  }

  static getType (value: StorageKey | StorageFunction | [StorageFunction, any]): string | null {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (isFunction(value)) {
      return value.meta.type.toString();
    } else if (Array.isArray(value)) {
      const [fn] = value;

      return fn.meta.type.toString();
    }

    return null;
  }

  get outputType (): string | null {
    return this._outputType;
  }
}
