// Copyright 2017-2026 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type MockStateSubscriptionCallback = (error: Error | null, value: any) => void;

export interface MockStateSubscription {
  callbacks: Record<number, MockStateSubscriptionCallback>;
  lastValue: any;
}

export interface MockStateSubscriptions {
  // known
  chain_subscribeNewHead: MockStateSubscription;
  state_subscribeStorage: MockStateSubscription;

  // others
  [key: string]: MockStateSubscription;
}

export type MockStateDb = Record<string, Uint8Array>;

export type MockStateRequests = Record<string, (db: MockStateDb, params: any[]) => string>;
