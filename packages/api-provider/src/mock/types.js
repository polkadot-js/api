// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

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

export type MockState = {
  l: Logger,
  subscriptionId: number,
  subscriptionMap: {
    [number]: string
  },
  subscriptions: MockState$Subscriptions
};
