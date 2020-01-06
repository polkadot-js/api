// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor, Registry } from '../types';

import Null from './Null';

/**
 * @name Unconstructable
 * @description
 * A type that should not be constructed
 */
export default class Unconstructable extends Null {
  constructor (registry: Registry) {
    super(registry);

    throw new Error('Unconstructable should not be constructed, it is only a placeholder for compatibility');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static with (typeDef: any): Constructor {
    return class extends Unconstructable {
    };
  }
}
