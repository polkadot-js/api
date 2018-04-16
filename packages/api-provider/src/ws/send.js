// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface$Callback } from '../types';
import type { WsState } from './types';

module.exports = async function send (self: WsState, method: string, params: Array<mixed>, subscription?: ProviderInterface$Callback): Promise<mixed> {
  return new Promise((resolve, reject): void => {
    try {
      const json = self.coder.encodeJson(method, params);
      const id = self.coder.getId();
      const callback = (error: ?Error, result: mixed) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      };

      self.handlers[id] = {
        callback,
        subscription
      };

      if (self.isConnected) {
        self.websocket.send(json);
      } else {
        self.queued[id] = json;
      }
    } catch (error) {
      reject(error);
    }
  });
};
