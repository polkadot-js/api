// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, DispatchError, DispatchInfo, Event, EventRecord, Extrinsic, Header, SignedBlock } from '@polkadot/types/interfaces';

export interface HeaderExtended extends Header {
  readonly author: AccountId | undefined;
}

export interface SignedBlockExtended extends SignedBlock {
  readonly author: AccountId | undefined;
  readonly events: EventRecord[];
  readonly extrinsics: TxWithEvent[];
}

export interface TxWithEvent {
  dispatchError?: DispatchError | undefined;
  dispatchInfo?: DispatchInfo | undefined;
  events: Event[];
  extrinsic: Extrinsic;
}
