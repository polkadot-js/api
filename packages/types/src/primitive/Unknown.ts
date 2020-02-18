// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, Registry } from '../types';

import Null from './Null';

/**
 * @name Unknown
 * @description
 * An unknown type theat fails on constrction with the type info
 */
export default class Unknown extends Null {
  constructor (registry: Registry, typeName: string) {
    super(registry);

    throw new Error(`Cannot construct unknown type ${typeName}`);
  }

  public static with (typeName: string): Constructor {
    return class extends Unknown {
      constructor (registry: Registry) {
        super(registry, typeName);
      }
    };
  }
}
