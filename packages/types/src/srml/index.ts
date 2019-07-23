// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import getTypeRegistry from '../codec/typeRegistry';
import * as srmlTypes from './definitions';

/**
 * @description A utility method that injects all the srml definitions into the type registry
 */
export function injectDefinitions (): void {
  const registry = getTypeRegistry();

  Object.values(srmlTypes).forEach(({ types }): void =>
    registry.register(types)
  );
}
