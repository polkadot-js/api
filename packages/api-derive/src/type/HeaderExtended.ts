// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Header } from '@polkadot/types/interfaces';
import type { AnyJson, Constructor, Registry } from '@polkadot/types/types';

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

  constructor (registry: Registry, header?: Header, sessionValidators?: AccountId[]) {
    super(registry, header);

    this.#author = extractAuthor(this.digest, sessionValidators);
  }

  /**
   * @description Convenience method, returns the author for the block
   */
  public get author (): AccountId | undefined {
    return this.#author;
  }

  /**
   * @description Creates a human-friendly JSON representation
   */
  public toHuman (isExtended?: boolean): Record<string, AnyJson> {
    return {
      ...super.toHuman(isExtended),
      author: this.author
        ? this.author.toHuman()
        : undefined
    };
  }

  /**
   * @description Creates the JSON representation
   */
  public toJSON (): Record<string, AnyJson> {
    return {
      ...super.toJSON(),
      author: this.author
        ? this.author.toJSON()
        : undefined
    };
  }
}
