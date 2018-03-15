// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

module.exports = async function send (self: WsState, method: string, params: Array<mixed>): Promise<mixed> {
  return new Promise((resolve, reject): void => {
    try {
      const json = self.coder.encodeJson(method, params);

      self.handlers[this.coder.getId()] = {
        callback: (error: ?Error, result: mixed) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      };

      if (self.isConnected) {
        self.websocket.send(json);
      } else {
        self.queued[this.id] = json;
      }
    } catch (error) {
      reject(error);
    }
  });
};
