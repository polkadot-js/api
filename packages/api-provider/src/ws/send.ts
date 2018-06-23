// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface$Callback } from '../types';
import { WsState } from './types';

export default async function send (self: WsState, method: string, params: Array<any>, subscription?: ProviderInterface$Callback): Promise<any> {
  return new Promise((resolve, reject): void => {
    try {
      const json = self.coder.encodeJson(method, params);
      const id = self.coder.getId();
      const callback = (error: ?Error, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      };

      self.l.debug(() => ['calling', method, params, json, !!subscription]);

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
}
