// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types';
import type { Registry } from '@polkadot/types/types';

export class BytesFactory {
  private __$$_registry: Registry;

  constructor (registry: Registry) {
    this.__$$_registry = registry;
  }

  public bytes = (value: string): Bytes => this.__$$_registry.createType('Bytes', value);
}
