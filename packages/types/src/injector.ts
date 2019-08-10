// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import { ClassOf } from './codec/createType';
import getTypeRegistry from './codec/typeRegistry';
import * as definitions from './interfaces/definitions';
import * as baseTypes from './index.types';

/**
 * @description A utility method that injects all the srml definitions into the type registry
 */
export function injectTypes (): void {
  const registry = getTypeRegistry();

  registry.register({ ...baseTypes });

  Object.values(definitions).forEach(({ types }): void =>
    registry.register(types)
  );

  // FIXME Here we setup the fallbacks, well, rather we HAD them here. So these have
  // been moved to API base since types are now created lazily
  // ClassOf('EventRecord').Fallback = ClassOf('EventRecord0to76');
}

injectTypes();
