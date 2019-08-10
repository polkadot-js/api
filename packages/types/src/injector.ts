// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ClassOf } from './codec/createType';
import getTypeRegistry from './codec/typeRegistry';
import * as definitions from './interfaces/definitions';
import * as baseTypes from './index.types';

/**
 * @description A utility method that injects all the srml definitions into the type registry
 */
export function injectTypes (): void {
  const registry = getTypeRegistry();

  // since these are classes, the are active immediately
  registry.register({ ...baseTypes });

  // since these are definitions, they would only get created when needed
  Object.values(definitions).forEach(({ types }): void =>
    registry.register(types)
  );

  // FIXME Register the fallbacks. The issue with this atm is that it forcibly
  // creates the actual classes here, which is something we don't really want,
  // we want it do be done on-demand, not up-front.
  ClassOf('Vec<EventRecord>').Fallback = ClassOf('Vec<EventRecord0to76>');
}

injectTypes();
