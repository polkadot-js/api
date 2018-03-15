// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

module.exports = function onError (self: WsState): (Event) => void {
  return (error: Event): void => {
    self.l.error(error);
  };
};
