// Copyright 2017-2026 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Server } from 'mock-socket';

// Test-only types used by the mock helpers (mockHttp/mockWs) and the provider
// specs. Kept in a `.manual.ts` file so the test-only `mock-socket` dependency
// stays out of the published build and out of `dependencies`.

export type Global = typeof globalThis & {
  WebSocket: typeof WebSocket;
  fetch: any;
}

export interface Mock {
  body: Record<string, Record<string, unknown>>;
  requests: number;
  server: Server;
  done: () => Promise<void>;
}
