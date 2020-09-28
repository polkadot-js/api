// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Constructor, Codec, InterfaceTypes, Registry } from '../types';

import CodecMap from './Map';

export default class BTreeMap<K extends Codec = Codec, V extends Codec = Codec> extends CodecMap<K, V> {
  public static with<K extends Codec, V extends Codec> (keyType: Constructor<K> | keyof InterfaceTypes, valType: Constructor<V> | keyof InterfaceTypes): Constructor<CodecMap<K, V>> {
    return class extends BTreeMap<K, V> {
      constructor (registry: Registry, value?: Uint8Array | string | Map<any, any>) {
        super(registry, 'BTreeMap', keyType, valType, value);
      }
    };
  }
}
