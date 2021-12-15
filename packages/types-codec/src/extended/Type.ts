// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '../types';

import { Text } from '../native/Text';
import { sanitize } from '../utils';

/**
 * @name Type
 * @description
 * This is a extended version of Text, specifically to handle types. Here we rely fully
 * on what Text provides us, however we also adjust the types received from the runtime,
 * i.e. we remove the `T::` prefixes found in some types for consistency across implementation.
 */
export class Type extends Text {
  constructor (registry: CodecRegistry, value: Text | Uint8Array | string = '') {
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
