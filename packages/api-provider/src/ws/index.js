// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse, ProviderInterface$Callback } from '../types';

type Awaiting = {
  callback: (error: ?Error, result: mixed) => void
};

require('./polyfill');

const l = require('@polkadot/util/logger')('ws-provider');
const assert = require('@polkadot/util/assert');
const JsonRpcCoder = require('../jsonRpcCoder');

module.exports = class WsProvider extends JsonRpcCoder implements ProviderInterface$Subscribe {
  _autoConnect: boolean = true;
  _endpoint: string;
  _handlers: { [number]: Awaiting } = {};
  _isConnected: boolean = false;
  _queued: { [number]: string } = {};
  _websocket: WebSocket;

  constructor (endpoint: string, autoConnect: boolean = true) {
    super();

    assert(/^ws:\/\//.test(endpoint), `Endpoint should start with 'ws://', received '${endpoint}'`);

    this._endpoint = endpoint;
    this._autoConnect = autoConnect;

    if (autoConnect) {
      this.connect();
    }
  }

  // flowlint-next-line unsafe-getters-setters:off
  get isConnected (): boolean {
    return this._isConnected;
  }

  connect = () => {
    this._websocket = new WebSocket(this._endpoint);

    this._websocket.onclose = this._onClose;
    this._websocket.onerror = this._onError;
    this._websocket.onmessage = this._onMessage;
    this._websocket.onopen = this._onOpen;
  }

  _onClose = () => {
    l.debug(() => ['disconnected from', this._endpoint]);

    this._isConnected = false;

    if (this._autoConnect) {
      setTimeout(this.connect, 1000);
    }
  }

  _onError = (error: Event) => {
    l.error(error);
  }

  _onOpen = () => {
    l.debug(() => ['connected to', this._endpoint]);

    this._isConnected = true;

    Object.keys(this._queued).forEach((id) => {
      try {
        this._websocket.send(
          // flowlint-next-line unclear-type:off
          this._queued[((id: any): number)]
        );

        // flowlint-next-line unclear-type:off
        delete this._queued[((id: any): number)];
      } catch (error) {
        l.error(error);
      }
    });
  }

  _onMessage = (message: MessageEvent): void => {
    // flowlint-next-line unclear-type:off
    const response: JsonRpcResponse = JSON.parse(((message.data: any): string));
    const handler = this._handlers[response.id];

    if (!handler) {
      l.error(`Unable to find handler for id=${response.id}`);
      return;
    }

    try {
      const result = this.decodeResponse(response);

      handler.callback(null, result);
    } catch (error) {
      handler.callback(error);
    }

    delete this._handlers[response.id];
  }

  send (method: string, params: Array<mixed>): Promise<mixed> {
    return new Promise((resolve, reject): void => {
      try {
        const json = this.encodeJson(method, params);

        this._handlers[this.id] = {
          callback: (error: ?Error, result: mixed) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        };

        if (this._isConnected) {
          this._websocket.send(json);
        } else {
          this._queued[this.id] = json;
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  subscribe (method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> {
    throw new Error('Subscriptions has not been implemented');
  }

  unsubscribe (id: number): Promise<boolean> {
    throw new Error('Subscriptions has not been implemented');
  }
};
