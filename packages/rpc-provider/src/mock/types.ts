// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Server } from 'mock-socket';
import { Constructor } from '@polkadot/types/types';

export interface Global extends NodeJS.Global {
  WebSocket: Constructor<WebSocket>;
  fetch: GlobalFetch;
}

export type Mock = {
  body: Object,
  requests: Number,
  server: Server
  done: () => {}
};

export type MockState$Subscription$Callback = (error: Error | null, value: any) => void;

export type MockState$Subscriptions = {
  [index: string]: {
    callbacks: {
      [index: number]: MockState$Subscription$Callback
    },
    lastValue: any
  }
};

export type MockState$Db = {
  [index: string]: Uint8Array
};

export type MockState$Requests = {
  [index: string]: (db: MockState$Db, params: Array<any>) => string
};
