// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Header, u64 } from '@plugnet/types';

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

    let item = header.digest.logs.find((log) => log.isConsensus);
    let slot: u64 | undefined;

    // extract author from the consensus (substrate 1.0, digest)
    if (item) {
      const consensus = item.asConsensus;

      if (consensus.isAura) {
        slot = consensus.asAura[0];
      }
    } else {
      item = header.digest.logs.find((log) => log.isSeal);

      // extract author from the seal (pre substrate 1.0, backwards compat)
      if (item) {
        slot = item.asSeal.slot;
      }
    }

    // found a slot? Great, extract the validator
    if (slot) {
      this._author = sessionValidators[slot.toNumber() % sessionValidators.length];
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
  toJSON (): any {
    return {
      ...super.toJSON(),
      author: this.author
        ? this.author.toJSON()
        : undefined
    };
  }
}
