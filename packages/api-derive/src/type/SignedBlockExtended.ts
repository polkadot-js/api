// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId, SignedBlock } from '@polkadot/types/interfaces';
import { AnyJson, Constructor, Registry } from '@polkadot/types/types';

import runtimeTypes from '@polkadot/types/interfaces/runtime/definitions';
import { Struct } from '@polkadot/types';

import { extractAuthor } from './util';

// We can ignore the properties, added via Struct.with
const _SignedBlock = Struct.with(runtimeTypes.types.SignedBlock as any) as Constructor<SignedBlock>;

/**
 * @name SignedBlockExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export default class BlockExtended extends _SignedBlock {
  readonly #author?: AccountId;

  constructor (registry: Registry, block?: SignedBlock, sessionValidators?: AccountId[]) {
    super(registry, block);

    this.#author = extractAuthor(this.block.header.digest, sessionValidators);
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
  public toHuman (isExtended?: boolean): AnyJson {
    return {
      ...super.toHuman(isExtended) as { [index: string]: AnyJson },
      author: this.author
        ? this.author.toHuman()
        : undefined
    };
  }

  /**
   * @description Creates the JSON representation
   */
  public toJSON (): AnyJson {
    return {
      ...super.toJSON() as { [index: string]: AnyJson },
      author: this.author
        ? this.author.toJSON()
        : undefined
    };
  }
}
