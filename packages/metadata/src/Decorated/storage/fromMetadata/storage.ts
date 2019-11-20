// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '@polkadot/types/types';

import { Storage } from '../../types';
import * as substrate from './substrate';

export function getStorage (registry: Registry): Storage {
  return Object
    .entries(substrate)
    .reduce((storage: Storage, [key, fn]): Storage => {
      (storage as any)[key] = fn(registry);

      return storage;
    }, {} as any as Storage);
}
