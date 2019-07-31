// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Header } from '@polkadot/types/interfaces';
import { AnyJsonObject, Constructor } from '@polkadot/types/types';

import { ClassOf } from '@polkadot/types';

// This is a bit hacky, but is exactly what it resolves to when compiled -
// and as a bonus is gets the typing right
const _Header: Constructor<Header> = ClassOf('Header');

/**
 * @name HeaderExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export default class HeaderExtended extends _Header {
  private _author?: AccountId;

  public constructor (header: Header | null = null, sessionValidators: AccountId[] = []) {
    super(header);

    if (!header || !header.digest || !sessionValidators.length) {
      return;
    }

    const [pitem] = header.digest.logsWith('PreRuntime');

    // extract from the substrate 2.0 PreRuntime digest
    if (pitem) {
      const [engine, data] = pitem.asPreRuntime;

      if (engine.isBabe || engine.isAura) {
        this._author = engine.extractAuthor(data, sessionValidators);
      }
    } else {
      const [citem] = header.digest.logsWith('Consensus');

      // extract author from the consensus (substrate 1.0, digest)
      if (citem) {
        const [engine, data] = citem.asConsensus;

        if (engine.isAura) {
          this._author = engine.extractAuthor(data, sessionValidators);
        }
      } else {
        const [sitem] = header.digest.logsWith('SealV0');

        // extract author from the seal (pre substrate 1.0, backwards compat)
        if (sitem) {
          this._author = sessionValidators[
            sitem.asSealV0[0].modn(sessionValidators.length)
          ];
        }
      }
    }
  }

  /**
   * @description Convenience method, returns the author for the block
   */
  public get author (): AccountId | undefined {
    return this._author;
  }

  /**
   * @description Creates the JSON representation
   */
  public toJSON (): AnyJsonObject {
    return {
      ...super.toJSON() as AnyJsonObject,
      author: this.author
        ? this.author.toJSON()
        : undefined
    };
  }
}
