// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, DispatchError, DispatchInfo, EventRecord, Extrinsic, SignedBlock } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { SignedBlockExtended, TxWithEvent } from './types.js';

import { extractAuthor } from './util.js';

function mapExtrinsics (extrinsics: Extrinsic[], records: EventRecord[]): TxWithEvent[] {
  return extrinsics.map((extrinsic, index): TxWithEvent => {
    let dispatchError: DispatchError | undefined;
    let dispatchInfo: DispatchInfo | undefined;

    const events = records
      .filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index))
      .map(({ event }) => {
        if (event.section === 'system') {
          if (event.method === 'ExtrinsicSuccess') {
            dispatchInfo = event.data[0] as DispatchInfo;
          } else if (event.method === 'ExtrinsicFailed') {
            dispatchError = event.data[0] as DispatchError;
            dispatchInfo = event.data[1] as DispatchInfo;
          }
        }

        return event;
      });

    return { dispatchError, dispatchInfo, events, extrinsic };
  });
}

export function createSignedBlockExtended (registry: Registry, block?: SignedBlock, events?: EventRecord[], validators?: AccountId[] | null, author?: AccountId | null): SignedBlockExtended {
  // an instance of the base extrinsic for us to extend
  const SignedBlockBase = registry.createClass('SignedBlock');

  class Implementation extends SignedBlockBase implements SignedBlockExtended {
    private readonly __$$_author?: AccountId | undefined;
    private readonly __$$_events: EventRecord[];
    private readonly __$$_extrinsics: TxWithEvent[];

    constructor (registry: Registry, block?: SignedBlock, events?: EventRecord[], validators?: AccountId[] | null, author?: AccountId | null) {
      super(registry, block);

      this.__$$_author = author || extractAuthor(this.block.header.digest, validators || []);
      this.__$$_events = events || ([] as EventRecord[]);
      this.__$$_extrinsics = mapExtrinsics(this.block.extrinsics, this.__$$_events);
      this.createdAtHash = block?.createdAtHash;
    }

    /**
     * @description Convenience method, returns the author for the block
     */
    public get author (): AccountId | undefined {
      return this.__$$_author;
    }

    /**
     * @description Convenience method, returns the events associated with the block
     */
    public get events (): EventRecord[] {
      return this.__$$_events;
    }

    /**
     * @description Returns the extrinsics and their events, mapped
     */
    public get extrinsics (): TxWithEvent[] {
      return this.__$$_extrinsics;
    }
  }

  return new Implementation(registry, block, events, validators, author);
}
