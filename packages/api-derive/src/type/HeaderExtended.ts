// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Header } from '@polkadot/types/interfaces';
import { AnyJson, Constructor, Registry } from '@polkadot/types/types';

import runtimeTypes from '@polkadot/types/interfaces/runtime/definitions';
import { Struct } from '@polkadot/types';

// We can ignore the properties, added via Struct.with
const _Header: Constructor<Header> = Struct.with(runtimeTypes.types.Header as any) as any;

/**
 * @name HeaderExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export default class HeaderExtended extends _Header {
  readonly #author?: AccountId;

  constructor (registry: Registry, header?: Header, sessionValidators?: AccountId[]) {
    super(registry, header);

    this.#author = this._extractAuthor(sessionValidators);
  }

  private _extractAuthor (sessionValidators: AccountId[] = []): AccountId | undefined {
    const [pitem] = this.digest.logs.filter(({ type }) => type === 'PreRuntime');

    // extract from the substrate 2.0 PreRuntime digest
    if (pitem) {
      const [engine, data] = pitem.asPreRuntime;

      return engine.extractAuthor(data, sessionValidators);
    } else {
      const [citem] = this.digest.logs.filter(({ type }) => type === 'Consensus');

      // extract author from the consensus (substrate 1.0, digest)
      if (citem) {
        const [engine, data] = citem.asConsensus;

        return engine.extractAuthor(data, sessionValidators);
      }
    }

    return undefined;
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
