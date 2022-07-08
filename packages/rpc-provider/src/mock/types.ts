// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Server } from 'mock-socket';
import type nock from 'nock';
import type { Constructor } from '@polkadot/types/types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export interface Global extends NodeJS.Global {
  WebSocket: Constructor<WebSocket>;
  fetch: any;
}

export interface Mock extends nock.Scope {
  body: Record<string, Record<string, unknown>>;
  requests: number;
  server: Server;
  done: () => Record<string, unknown>;
}

export type MockStateSubscriptionCallback = (error: Error | null, value: any) => void;

export type MockStateSubscriptions = Record<string, {
  callbacks: Record<number, MockStateSubscriptionCallback>;
  lastValue: any;
}>;

export type MockStateDb = Record<string, Uint8Array>;

export type MockStateRequests = Record<string, (db: MockStateDb, params: any[]) => string>;
