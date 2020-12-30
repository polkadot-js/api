// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, Registry } from '../types';

import { Null } from './Null';

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export class DoNotConstruct extends Null {
  constructor (registry: Registry, typeName = 'DoNotConstruct') {
    super(registry);

    throw new Error(`Cannot construct unknown type ${typeName}`);
  }

  public static with (typeName?: string): Constructor {
    return class extends DoNotConstruct {
      constructor (registry: Registry) {
        super(registry, typeName);
      }
    };
  }
}
