// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Header } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { HeaderExtended } from './types.js';

import { extractAuthor } from './util.js';

export function createHeaderExtended (registry: Registry, header?: Header, validators?: AccountId[] | null, author?: AccountId | null): HeaderExtended {
  // an instance of the base extrinsic for us to extend
  const HeaderBase = registry.createClass('Header');

  class Implementation extends HeaderBase implements HeaderExtended {
    readonly #author?: AccountId | undefined;

    constructor (registry: Registry, header?: Header, validators?: AccountId[] | null, author?: AccountId | null) {
      super(registry, header);

      this.#author = author || extractAuthor(this.digest, validators || []);
      this.createdAtHash = header?.createdAtHash;
    }

    /**
     * @description Convenience method, returns the author for the block
     */
    public get author (): AccountId | undefined {
      return this.#author;
    }
  }

  return new Implementation(registry, header, validators, author);
}
