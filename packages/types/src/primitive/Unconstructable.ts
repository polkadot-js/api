// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '../types';

import Null from './Null';

/**
 * @name Unconstructable
 * @description
 * A type that should not be constructed
 */
export default class Unconstructable extends Null {
  constructor () {
    super();

    throw new Error('Unconstructable should not be constructed, it is only a placeholder for compatibility');
  }

  static with (typeDef: any): Constructor {
    return class extends Null {
      constructor () {
        super();

        throw new Error(`Unabdle to construct ${JSON.stringify(typeDef)}`);
      }
    };
  }
}
