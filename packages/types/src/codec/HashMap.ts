// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, Codec, InterfaceTypes, Registry } from '../types';

import BTreeMap from './BTreeMap';

export default class HashMap<K extends Codec = Codec, V extends Codec = Codec> extends BTreeMap<K, V> {
  public static with<K extends Codec, V extends Codec> (keyType: Constructor<K> | keyof InterfaceTypes, valType: Constructor<V> | keyof InterfaceTypes): Constructor<BTreeMap<K, V>> {
    return class extends HashMap<K, V> {
      constructor (registry: Registry, value?: any) {
        super(registry, keyType, valType, value);
      }
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return super.toRawType('HashMap');
  }
}
