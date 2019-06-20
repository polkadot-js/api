// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Header, u64 } from '@polkadot/types';
import { AnyJsonObject } from '@polkadot/types/types';

/**
 * @name HeaderExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export default class HeaderExtended extends Header {
  private _author?: AccountId;

  constructor (header: Header | null = null, sessionValidators: Array<AccountId> = []) {
    super(header);

    if (!header || !header.digest || !sessionValidators.length) {
      return;
    }

    let slot: u64 | undefined;
    const [pitem] = header.digest.logsWith('PreRuntime');

    // extract from the substrate 2.0 PreRuntime digest
    if (pitem) {
      const preRuntime = pitem.asPreRuntime;

      if (preRuntime.engine.isAura) {
        slot = preRuntime.slot;
      }
    } else {
      const [citem] = header.digest.logsWith('Consensus');

      // extract author from the consensus (substrate 1.0, digest)
      if (citem) {
        const consensus = citem.asConsensus;

        if (consensus.engine.isAura) {
          slot = consensus.slot;
        }
      } else {
        const [sitem] = header.digest.logsWith('SealV0');

        // extract author from the seal (pre substrate 1.0, backwards compat)
        if (sitem) {
          slot = sitem.asSealV0.slot;
        }
      }
    }

    // found a slot? Great, extract the validator
    if (slot) {
      this._author = sessionValidators[slot.modn(sessionValidators.length)];
    }
  }

  /**
   * @description Convenience method, returns the author for the block
   */
  get author (): AccountId | undefined {
    return this._author;
  }

  /**
   * @description Creates the JSON representation
   */
  toJSON (): AnyJsonObject {
    return {
      ...super.toJSON() as AnyJsonObject,
      author: this.author
        ? this.author.toJSON()
        : undefined
    };
  }
}
