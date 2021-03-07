// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Header } from '@polkadot/types/interfaces';
import type { Constructor, Registry } from '@polkadot/types/types';

import { Struct } from '@polkadot/types';
import runtimeTypes from '@polkadot/types/interfaces/runtime/definitions';

import { extractAuthor } from './util';

// We can ignore the properties, added via Struct.with
const _Header = Struct.with(runtimeTypes.types.Header as any) as Constructor<Header>;

/**
 * @name HeaderExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export class HeaderExtended extends _Header {
  readonly #author?: AccountId;
  readonly #validators?: AccountId[];

  constructor (registry: Registry, header?: Header, validators?: AccountId[]) {
    super(registry, header);

    this.#author = extractAuthor(this.digest, validators);
    this.#validators = validators;
    this.createdAtHash = header?.createdAtHash;
  }

  /**
   * @description Convenience method, returns the author for the block
   */
  public get author (): AccountId | undefined {
    return this.#author;
  }

  /**
   * @description Convenience method, returns the validators for the block
   */
  public get validators (): AccountId[] | undefined {
    return this.#validators;
  }
}
