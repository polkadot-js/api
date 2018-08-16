// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import EventEmitter from 'eventemitter3';
import { Logger } from '@polkadot/util/types';

export type MockState$Subscription$Callback = (error: Error | null, value: any) => void;

export type MockState$Subscriptions = {
  [index: string]: {
    callbacks: {
      [index: number]: MockState$Subscription$Callback
    },
    lastValue: any
  }
};

export type MockState$Storage = {
  [index: string]: Uint8Array
};

export type MockState$Requests = {
  [index: string]: (storage: MockState$Storage, params: Array<any>) => string
};

export type MockState = {
  emitter: EventEmitter,
  l: Logger,
  requests: MockState$Requests,
  storage: MockState$Storage,
  subscriptionId: number,
  subscriptionMap: {
    [index: number]: string
  },
  subscriptions: MockState$Subscriptions
};
