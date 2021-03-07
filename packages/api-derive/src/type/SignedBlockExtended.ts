// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, DispatchError, DispatchInfo, Event, EventRecord, Extrinsic, SignedBlock } from '@polkadot/types/interfaces';
import type { Constructor, Registry } from '@polkadot/types/types';

import { Struct } from '@polkadot/types';
import runtimeTypes from '@polkadot/types/interfaces/runtime/definitions';

import { extractAuthor } from './util';

// We can ignore the properties, added via Struct.with
const _SignedBlock = Struct.with(runtimeTypes.types.SignedBlock as any) as Constructor<SignedBlock>;

interface TxWithEvent {
  dispatchError?: DispatchError;
  dispatchInfo?: DispatchInfo;
  events: Event[];
  extrinsic: Extrinsic;
}

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

/**
 * @name SignedBlockExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export class SignedBlockExtended extends _SignedBlock {
  readonly #author?: AccountId;
  readonly #events: EventRecord[];
  readonly #extrinsics: TxWithEvent[];

  constructor (registry: Registry, block?: SignedBlock, events?: EventRecord[], validators?: AccountId[]) {
    super(registry, block);

    this.#author = extractAuthor(this.block.header.digest, validators);
    this.#events = events || ([] as EventRecord[]);
    this.#extrinsics = mapExtrinsics(this.block.extrinsics, this.#events);
    this.createdAtHash = block?.createdAtHash;
  }

  /**
   * @description Convenience method, returns the author for the block
   */
  public get author (): AccountId | undefined {
    return this.#author;
  }

  /**
   * @description Convenience method, returns the events associated with the block
   */
  public get events (): EventRecord[] {
    return this.#events;
  }

  /**
   * @description Returns the extrinsics and their events, mapped
   */
  public get extrinsics (): TxWithEvent[] {
    return this.#extrinsics;
  }
}
