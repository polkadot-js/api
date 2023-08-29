// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types/index.js';

import { Text } from '../native/Text.js';
import { sanitize } from '../utils/index.js';

/**
 * @name Type
 * @description
 * This is a extended version of Text, specifically to handle types. Here we rely fully
 * on what Text provides us, however we also adjust the types received from the runtime,
 * i.e. we remove the `T::` prefixes found in some types for consistency across implementation.
 */
export class Type extends Text {
  constructor (registry: Registry, value: Text | Uint8Array | string = '') {
    super(registry, value);

    this.setOverride(sanitize(this.toString()));
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'Type';
  }
}
