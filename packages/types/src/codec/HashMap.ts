// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Constructor, InterfaceTypes, Registry, WrappedConstructor } from '../types';

import { CodecMap } from './Map';
import { unwrapClass } from './utils';

export class HashMap<K extends Codec = Codec, V extends Codec = Codec> extends CodecMap<K, V> {
  public static with<K extends Codec, V extends Codec> (keyType: WrappedConstructor<K> | Constructor<K> | keyof InterfaceTypes, valType: WrappedConstructor<V> | Constructor<V> | keyof InterfaceTypes): Constructor<CodecMap<K, V>> {
    return class extends HashMap<K, V> {
      constructor (registry: Registry, value?: Uint8Array | string | Map<any, any>) {
        super(registry, unwrapClass(keyType), unwrapClass(valType), value);
      }
    };
  }
}
