// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../../types';

import Null from '../Null';

/**
 * @name Origin
 * @description
 * Where Origin occurs, it should be ignored as an internal-only value, so it should
 * never actually be constructed
 */
export default class Origin extends Null {
  constructor (registry: Registry) {
    super(registry);

    throw new Error('Origin should not be constructed, it is only a placeholder for compatibility');
  }
}
