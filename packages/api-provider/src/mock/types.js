// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type EventEmitter from 'eventemitter3';
import type { Logger } from '@polkadot/util/types';

export type MockState$Subscription$Callback = (error: ?Error, value: mixed) => void;

export type MockState$Subscriptions = {
  [string]: {
    callbacks: {
      [number]: MockState$Subscription$Callback
    },
    lastValue: mixed
  }
};

export type MockState$Storage = {
  [string]: Uint8Array
};

export type MockState$Requests = {
  [string]: (storage: MockState$Storage, params: Array<mixed>) => string
};

export type MockState = {
  emitter: EventEmitter,
  l: Logger,
  requests: MockState$Requests,
  storage: MockState$Storage,
  subscriptionId: number,
  subscriptionMap: {
    [number]: string
  },
  subscriptions: MockState$Subscriptions
};
