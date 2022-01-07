// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Bytes } from '@polkadot/types';
import { Registry } from '@polkadot/types/types';

export class BytesFactory {
  #registry: Registry;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  public bytes = (value: string): Bytes => this.#registry.createType('Bytes', value);
}
